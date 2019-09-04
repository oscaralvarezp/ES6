const nombres = ['Carlos', 'Alejandro', 'Cesar'];

const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} caracteres`);

// const numero_caracteres = nombres.map(function (nombre) {
// 	return `${nombre} tiene ${nombre.length} caracteres`;
// });

console.log(numero_caracteres);
// (parametro) => {
// 	//codigo a ejecutar
// }