import {Monitor} from './monitor.js';
import {spa, mws} from './middleware/spa.js';
import {rest} from './middleware/rest.js';
import {hist} from "./middleware/hist.js";
import {rewrite} from './middleware/rewrite.js';
import {filter,filters} from './middleware/filter.js';
import {Filter} from './filter/Filter.js'
import {AuthFilter} from './filter/AuthFilter.js'
import {router} from './middleware/router.js'
import {User} from './module/user.js'
import {Group} from './module/group.js'

let app = {
			start: function(options){
				spa.add(rest(options));
				spa.add(hist());
				spa.add(rewrite(options));
				spa.add(filter.mw);
				filter.add(AuthFilter);
				spa.add(router(options));

				let monitor = new Monitor({
					onchange: function(event){
						let context = {
							request: new URL(event.newValue)
						};
						console.log(context)
						spa.dispatch(context);
					}
				});
			}
		};
	//接口
	app.start({
		matchers:[
			'/user/:id',
			'/group/:gid/user/:uid'
		],
		rules:[
			{
				matcher: /\/group\/[\d]+\/user\/[\d]+\//i,
				target: '/user/'
			}
		],
		routes:{
			'/user/':User,
			'/group/':Group
		}
	});