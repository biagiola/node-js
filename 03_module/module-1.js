function messageOne( argOne ) {
    console.log(argOne + ' extra string.');   
}
module.exports.bienvenida = messageOne;

function messageTwo ( argTwo ) {
    console.log(argTwo);
}
module.exports.despedida = messageTwo;

