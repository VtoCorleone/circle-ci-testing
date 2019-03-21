const { minus, sum } = require('./index');

test('sum numbers together', () => {
  expect(sum(1, 2)).toBe(3);
});

test('difference between numbers', () => {
  expect(minus(2, 1)).toBe(1);
});
