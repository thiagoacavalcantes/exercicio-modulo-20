// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.//

function encontrarMaior(array) {
  return array.map(Number).reduce(function(numero1, numero2) {
      return Math.max(numero1, numero2);
  });
}

function encontrarMenor(array) {
  return array.map(Number).reduce(function(numero1, numero2) {
      return Math.min(numero1, numero2);
  });
}

module.exports = { encontrarMaior, encontrarMenor };