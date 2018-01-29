const $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person{
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes.')
  }
}

const john = new Person('John Doe', 'blue');
const jane = new Adult('Jane Smith', 'orange');

alert('bleh');

john.greet();
jane.greet();
jane.payTaxes();

$('h1').remove();
