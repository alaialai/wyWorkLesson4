import Module from './module.js'


class Group extends Module{
	build(options){
		super.build(options);
		this._body = document.createElementt('div');
		this._unode = document.createElement('p');
		this._body.appendChild(this._unode);
	}
	show(context){
		super.show(context);
		let req = context.request;
		this._doUpdateUser(req.restParams.gid);
	}
	refresh(context){
		super.refresh(context);
		let req = context.request;
		this._doUpdateUser(req.restParams.gid);
	}
	_doUpdateUser(gid){
		console.log("group")
		this._unode.innerHTML = '<P> 大家好，我是组'+'gid'+'</P>';
	}
}


export {Group};