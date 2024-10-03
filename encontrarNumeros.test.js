const { encontrarMaior, encontrarMenor } = require('./array');

describe('Teste das funções encontrarMaior e encontrarMenor', () => {
    it('Deve encontrar o maior número no array ["98298347", "103492", "94832459", "73272343", "2347823"]', () => {
        const array = ["98298347", "103492", "94832459", "73272343", "2347823"];
        expect(encontrarMaior(array)).toBe(98298347);
    });

    it('Deve encontrar o menor número no array ["12234", "22347", "98234", "225255", "712486"]', () => {
        const array = ["12234", "22347", "98234", "225255", "712486"];
        expect(encontrarMenor(array)).toBe(12234);
    });

    it('Deve retornar o maior número em um array com números negativos ["-10", "-20", "-30", "0"]', () => {
        const array = ["-10", "-20", "-30", "0"];
        expect(encontrarMaior(array)).toBe(0);
    });

    it('Deve retornar o menor número em um array com números negativos ["-10", "-20", "-30", "0"]', () => {
        const array = ["-10", "-20", "-30", "0"];
        expect(encontrarMenor(array)).toBe(-30);
    });
});