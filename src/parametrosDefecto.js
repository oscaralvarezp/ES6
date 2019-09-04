function registrarUsuario(nombre,pais,mail,telefono = 'No Especificado') {
	return `Nombre: ${nombre} Pais: ${pais} Correo: ${mail} Telefono: ${telefono}`;
}

console.log(registrarUsuario('Oscar', 'Venezuela', 'correo@correo.com'));