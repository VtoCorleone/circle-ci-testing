const { sum } = require('./index');

test('sum numbers together', () => {
  expect(sum(1, 2)).toBe(3);
});
