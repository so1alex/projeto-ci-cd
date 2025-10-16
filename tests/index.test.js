// Importa o objeto inteiro que foi exportado (exports) de src/index.js
const app = require('../src/index.js');

// A função pura 'soma' agora está dentro do objeto 'app'.
const soma = app.soma;

describe('Função de Soma', () => {
    test('soma dois números corretamente', () => {
        expect(soma(10, 5)).toBe(15);
        expect(soma(1.5, 2.5)).toBe(4);
    });

    test('soma com zero', () => {
        expect(soma(5, 0)).toBe(5);
        expect(soma(0, 0)).toBe(0);
    });

    test('retorna NaN para inputs não numéricos', () => {
        expect(soma('a', 5)).toBeNaN();
        expect(soma(10, 'b')).toBeNaN();
        expect(soma(null, 5)).toBe(5); // null é tratado como 0 em Number()
    });
});