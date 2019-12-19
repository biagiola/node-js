//normal expresion
function saludo(){
    console.log('hola');
}
saludo();

//function expresion
var despedida = function(){
    console.log('chau');
}
despedida();

//pasar una funccion a otra function
function callFunction(fun) {
    fun()
}
callFunction(despedida);