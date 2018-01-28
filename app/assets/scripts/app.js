const $ = require('jquery');
const Person = require('./modules/Person');

const john = new Person('John Doe', 'blue');
const jane = new Person('Jane Smith', 'green');

alert('bleh');

john.greet();
jane.greet();

$('h1').remove();
