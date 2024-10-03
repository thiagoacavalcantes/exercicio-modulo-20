const { calcularMDC } = require('./mdc')

describe('Validar funções MDC', () => {
    it('MDC entre 20 e 7453 deve ser 1', () => {
        expect(calcularMDC(20, 7453)).toBe(1);
    });

    it('MDC entre 54 e 24 deve ser 6', () => {
        expect(calcularMDC(54, 24)).toBe(6);
    });

    it('MDC entre 100 e 25 deve ser 25', () => {
        expect(calcularMDC(100, 25)).toBe(25);
    });

    it('MDC entre 0 e qualquer número deve ser o próprio número', () => {
        expect(calcularMDC(0, 5)).toBe(5);
    });
});