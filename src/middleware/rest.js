//输入解析（rest参数）转成正则表达式
function rest(options){
	let matchers = options.matchers || [];
	console.log(matchers)
	matchers.forEach(function(it,index,list){
		list[index] = str2matcher(it);
		console.log("list[index]=="+list[index])
	});
	//转成正则表达式
	function str2matcher(url){
		let ret = {
			url: url,
			keys: []
		};
		let reg = url.replace(/:(.+?)(?=\/|$)/g,function($1,$2){
			ret.keys.push($2);
			return '([^/]+?)';
		});
		console.log("reg--"+reg)
		ret.matchers = new RegExp('^'+reg+'$','gi');
		console.log("ret--"+ret)
		return ret;
	}

	function getParams(path){
		let ret = {};
		matchers.find(function(it) {
			let res = it.matchers.exec(path);
			if(res){
				it.keys.forEach(function (key,index){
					ret[key] = res[index+1]||'';
				});
			return true;
			}
		});
		return ret;
	}

	return function(context,next) {
		console.log("comtext"+context)
		let req = context.request;
		req.restParams = getParams(
			req.pathname
		);
		console.log("req=="+req.restParams)
		if(!!req.hash){
			let hash = new URL(
				req.hash.substr(1),
				req.origin
			);
			context.hash = hash;
			hash.restParams = getParams(
				hash.pathname
			);
		};
		next()
	};
}
	export {rest};