/* Caracteristica #1
	con var podemos re-declarar variable, con esto puede 
	causar problemas donde re-declaremos sin darnos cuenta.
*/
// var nombre = 'Oscar';
// var nombre = 'Eduardo';

// let pais = 'Mexico';
// let pais = 'España';

// console.log('Hola ' + pais);

/*Caracteristica #2 
	let y const tambien tienen un scope en el que no podemos acceder a las variables 
	creadas dentro de una funcion.
*/

// function saludo() {
// 	let nombre = 'Oscar';
// 	return 'Hola ' + nombre;
// }

// // console.log(saludo());
// console.log(nombre);

// Caracteristica #3
// let y cons tienen un scope de tipo bloque

// const edad = 18;

// if (edad >= 18){
// 	const esAdulto = true;
// }
// console.log(esAdulto);


// Caracteristica #4
// const lo usamos cuando queremos que el valor de una variable nunca
// cambie
// const nombre = 'Oscar';
// nombre = 'ale';

const colores = ['Rojo', 'Verde'];
colores.push('Azul');
console.log(colores);