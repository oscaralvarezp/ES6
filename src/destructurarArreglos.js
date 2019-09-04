const persona = ['Oscar Eduardo', 24, 'Venezuela'];

const [nombre, , pais, profesion = 'No Especificado'] = persona;

const mostrarInfo = ([nombre, , pais, profesion = 'No Especificado'] = persona) => console.log(nombre, profesion);
mostrarInfo(persona);

