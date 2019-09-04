const user = {
	name      : 'Oscar',
	mail      : 'mail@mail.com',
	age       : 24,
	country   : 'Venezuela'
};

const {name, country, profesion = 'not specified'} = user

const showInfo = ({ name, profesion = 'Student' }) => `${name} is a ${profesion}`;

console.log(showInfo(user));