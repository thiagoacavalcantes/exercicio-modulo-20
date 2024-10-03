const { calcularSomaMultiplos } = require('./multiplos')

describe('Teste da função calcularSomaMultiplos', () => {

    it('A soma dos múltiplos de 5 ou 7 abaixo de 1000 deve ser 156361', () => {
        expect(calcularSomaMultiplos()).toBe(156361);
    });
   
});
    