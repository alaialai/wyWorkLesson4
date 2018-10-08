export default class Module{
	constructor(config){
		this._parent = config.parent;
	}
	build(options){

	}
	show(context){
		if(this._body){
			this._parent.appendChild(this._body);
		}
	}
	refresh(){

	}
	hide(){
		if(this._body){
			fragment.appendChild(this._body);
		}
	}
	destory(){

	}
}
