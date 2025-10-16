/**
 * tests/index.test.js
 * Teste unitário para a função soma.
 */
const soma = require('../src/index');

test('soma dois números corretamente', () => {
  // Espera que a soma de 2 e 3 seja 5
  expect(soma(2, 3)).toBe(5);
});

test('soma com zero', () => {
  // Verifica se a soma com zero funciona
  expect(soma(5, 0)).toBe(5);
});