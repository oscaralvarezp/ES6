const promise = new Promise((resolve, reject) =>{
	//Accion que se ejecutara.
	setTimeout(() => {
		let exito = false;
		if (exito) {
			resolve('La operacion tuvo Exito');
		} else {
			reject('La operacion no tuvo Exito');
		}
	},2000);
});

promise.then((message) => {
	alert(message);
});
promise.catch((message) =>{
	alert(message);
});