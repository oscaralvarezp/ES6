const text = 'Hola mundo';

console.log(text, 'empieza con h: ', text.toLowerCase().startsWith('h'));
console.log(text, 'termina con o: ', text.endsWith('o'));

console.log(text,'incluye la palabra oscar: ',text.includes('oscar'));

const friends = ['moises','abraham', 'pedro', 'alejandro'];

console.log(friends.includes('pedro'));
console.log(friends.find(friend => friend.length > 6));
console.log(friends.findIndex(friend => friend === 'alejandro'));
