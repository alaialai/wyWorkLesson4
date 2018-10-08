
function router(options){
	console.log(123);
	let routes = options.routes || {};
	let current = null;
	console.log(routes)
	debugger
	return function(context,next){
		//let name = context.request.pathname;
		console.log("name"+name)
		let module = routes[0];
		console.log("module"+module)
		if(!module){
			console.log(404)
			redirect('/404');
			return;
		}
		if(!(module instanceof Module)){
			module = new module();
			routes[name] = module;
			module.build(context);
		}		

		if(module === current){
			module.refresh(context);
		}else{
			if(current){
				current.hide();
			}
			current = module;
			current.show(context)
		}
		next();
	};
}

export {router};
