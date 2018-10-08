import {Filter} from './Filter.js';

class AuthFilter extends Filter{
	doFilter(){
		let session = this._context.session;
		if(!session || !session.user || !session.user.id){
			//redirect('/test.html');
			return;
		}
		super.chain();
	}
}
export {AuthFilter};