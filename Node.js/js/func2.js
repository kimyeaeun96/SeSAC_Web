function func(callback) {
	callback();
}

function func2() {
	console.log("this is callback")
}
func(func2);