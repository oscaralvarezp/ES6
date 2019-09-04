const create = (name, age) => {
	return {
		name,
		age,
		show() {
			return `${name} has ${age} years old`;
		}
	};
}

console.log(create('Eduardo', 24).show());