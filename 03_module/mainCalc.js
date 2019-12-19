console.log('****Bienvenidos a la calculadora****');
console.log('Introduzca la operación');
console.log('Operacion ( 1 = sum; 2 = resta; 3 = multiplicacion; 4 = division)');

console.log('Introduzca los valores');
console.log('A = ');
console.log('B = ');

switch( op ){
    case 1: 
        console.log('opcion 1');
        var result = a+b;
        break;
    case 2:
        console.log('opcion 2');
        var result = a - b; 
        break;
    case 3:
        console.log('opcion 3');
        var result = a*b;
        break;
    case 4:
        console.log('opcion 4');
        var result = a/b;
        break;
    default:
        console.log('no option');
}
console.log(result);

