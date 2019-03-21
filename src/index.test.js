const { minus, multiply, sum } = require('./index');

test('sum numbers together', () => {
  expect(sum(1, 2)).toBe(3);
});

test('difference between numbers', () => {
  expect(minus(2, 1)).toBe(1);
});

test('multiply 2 numbers together', () => {
  expect(multiply(2, 3)).toBe(6);
});