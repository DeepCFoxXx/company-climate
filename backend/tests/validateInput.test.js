const { validateInput } = require('../helpers/validateInput');

describe('validateInput', () => {
  test('validates a proper number array', () => {
    expect(validateInput([1, 2, 3])).toBe(true);
  });

  test('accepts floats and decimal numbers', () => {
    expect(validateInput([-1.5, 0.2, 3.8])).toBe(true);
  });

  test('rejects non-array input', () => {
    expect(validateInput('not-an-array')).toBe(false);
    expect(validateInput(5)).toBe(false);
    expect(validateInput(null)).toBe(false);
    expect(validateInput(undefined)).toBe(false);
  });

  test('rejects empty array', () => {
    expect(validateInput([])).toBe(false);
  });

  test('rejects array with NaN', () => {
    expect(validateInput([1, NaN, 3])).toBe(false);
  });

  test('rejects array with strings', () => {
    expect(validateInput([1, '2', 3])).toBe(false);
  });

  test('rejects array with Infinity or -Infinity', () => {
    expect(validateInput([1, Infinity, 2])).toBe(false);
    expect(validateInput([-Infinity, 1])).toBe(false);
  });

  test('rejects array with null or undefined values', () => {
    expect(validateInput([1, null, 2])).toBe(false);
    expect(validateInput([undefined, 5])).toBe(false);
  });

  test('rejects array with booleans', () => {
    expect(validateInput([1, true, false])).toBe(false);
  });
});
