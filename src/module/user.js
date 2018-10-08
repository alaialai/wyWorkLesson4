import  Module from './module.js'

class User extends Module{
	build(options){
		console.log(789)
		super.build(options);
		this._body = document.createElementt('div');
		this._unode = document.createElement('p');
		this._body.appendChild(this._unode);
	}
	show(context){
		super.show(context);
		let req = context.request;
		this._doUpdateUser(req.restParams.uid);
	}
	refresh(context){
		super.refresh(context);
		let req = context.request;
		this._doUpdateUser(req.restParams.uid);
	}
	_doUpdateUser(uid){
		console.log("uid")
		this._unode.innerHTML = '<P> 大家好，我是用户'+'uid'+'</P>';
	}
}


export {User};