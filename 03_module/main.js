//Importamos más de una function desde un módulo
/* const mensaje1 = require('./module-1');
mensaje1.bienvenida('Bienvenidos al sistema');

const mensaje2 = require('./module-1');
mensaje2.despedida('Le esperamos pronto'); */

//Importamos una variable y un array
/* const modulo2 = require('./module-2');

console.log(modulo2.contador([1,2,3]));
console.log(modulo2.nombre);
console.log(modulo2.edad);
console.log(modulo2.profesion); */

//Importamos un obj
/* const objeto = require('./module-3');
console.log(objeto); */

//Información que viene con cada módulo
/* console.log(__filename);
console.log(__dirname); */

//Enviar un array a otro módulo para que imprima sus valores
var stuff = require('./module-4');
console.log(stuff.contador(['David', 'José', 'Ricardo']));
console.log(stuff.sumador( stuff.pi, 1));
