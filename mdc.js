// 1. Calcule o MDC (máximo divisor comum) entre dois números. //

function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let numero1 = 20;
let numero2 = 7453;
let resultado = calcularMDC(numero1, numero2);
console.log(`MDC entre ${numero1} e ${numero2}: ${resultado}`);

module.exports = { calcularMDC }