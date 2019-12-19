/*hacer que una function normal herede el events properties*/ 
var events = require('events');
var util = require('util');

class Person {
    constructor(name) {
        this.name = name;
    }
}
/*costum events attached to it*/
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach( function(person) {
    person.on('speak', function(mssg){
        console.log( person.name + ' said: ' + mssg);
    })
})

james.emit('speak', 'Hello everybody');
mary.emit('speak', 'Im a girl');
ryu.emit('speak', 'Its rainy a lot');
