var counter = function(elements){
    return `${ elements }; -> ${ elements.length } elements in total`
}

var adder = function( a,b ){
    return `the sume of the two number is ${ a+b }`;
}

var pi = 3.14;

module.exports.contador = counter;
module.exports.sumador = adder;
module.exports.pi = pi;

/*
 Otra forma de hacer la últimas tres lineas es

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}

*/