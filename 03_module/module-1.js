function messageOne( argOne ) {
    console.log(argOne + ' holis');   
}
module.exports.bienvenida = messageOne;

function messageTwo ( argTwo ) {
    console.log(argTwo);
}
module.exports.despedida = messageTwo;

