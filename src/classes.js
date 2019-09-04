class User {
	// constructor: es el primer metodo que se ejecuta siempre.
	constructor(name, age, mail) {
		// propiedades o variables
		this.name = name,
		this.age  = age,
		this.mail = mail;
	}

	// Metodos o Funciones
	show(message) {
		return message;
	}

	showInfo() {
		return `<b>Nombre:</b> ${this.name} <br/>
				<b>Age:</b> ${this.age} <br/>
				<b>Mail:</b> ${this.mail} <br/>
				<hr/>
		`;
	}
}

// Student hereda(extends) de User(metodos y propiedades)
class Student extends User {
	constructor(name, age, mail,career) {
		// super() llama al construtor de la clase user
		super(name, age, mail);
		this.career = career;
	}

	showInfo() {
		return `<b>Nombre:</b> ${this.name} <br/>
				<b>Age:</b> ${this.age} <br/>
				<b>Mail:</b> ${this.mail} <br/>
				<b>Career:</b> ${this.career} <br/>
				<hr/>
		`;
	}
}


// Instancia de Clase
const oscar = new User('Oscar', 24, 'mail@mail.com');

document.write(oscar.showInfo());

const ale = new Student('Alejandro',22, 'show@show.com', ' Web Developer');
document.write(ale.showInfo());