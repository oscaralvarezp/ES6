class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`${this.name} tiene ${this.age} años`);
    }
}

export default Persona;
