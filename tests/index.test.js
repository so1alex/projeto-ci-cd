const soma = require('../src/index');

test('soma dois números corretamente', () => {
  expect(soma(2, 3)).toBe(5);
  expect(soma(10, 5)).toBe(15);
});