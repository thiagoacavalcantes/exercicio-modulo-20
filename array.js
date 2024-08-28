// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.//

//maior
var array = ["98298347", "103492", "94832459", "73272343", "2347823"];  
var maior_numero = array.map(Number).reduce(function(numero1, numero2) {  
  return Math.max(numero1, numero2);  
});  
        
console.log('O maior número é  ' + maior_numero);  
//menor
var array = ["12234", "22347", "98234", "225255", "712486"];  
var menor_numero = array.map(Number).reduce(function(numero1, numero2) {  
  return Math.min(numero1, numero2);  
});  
        
console.log('O menor número é  ' + menor_numero); 