function Monitor(opt) {
	opt = opt || {};
	console.log(opt)
	let last = null;
	let runURLCheck = function () {
		let url = location.href;
		if( url !== last){
			let event = {
				oldValue: last,
				newValue: url
			};
			last = url;
			if(typeof opt.onchange === 'function') {
				opt.onchange(event);
			}
		}
	};
	window.setInterval(runURLCheck,500);
}
export {Monitor};