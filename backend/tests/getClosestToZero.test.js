const { getClosestToZero } = require('../helpers/getClosestToZero');

describe('getClosestToZero', () => {
  test('returns the closest positive number when tied', () => {
    expect(getClosestToZero([-5, 5])).toBe(5);
  });

  test('returns the closest to zero in a mixed array', () => {
    expect(getClosestToZero([4, -2, 1, -1])).toBe(1);
  });

  test('handles only negative numbers', () => {
    expect(getClosestToZero([-3, -2, -1])).toBe(-1);
  });

  test('handles only positive numbers', () => {
    expect(getClosestToZero([3, 2, 1])).toBe(1);
  });

  test('handles empty array', () => {
    expect(() => getClosestToZero([])).toThrow();
  });

  test('handles array with 0', () => {
    expect(getClosestToZero([0, 1, -1])).toBe(0);
  });

  test('returns first closest value when duplicates exist', () => {
    expect(getClosestToZero([-1, -1, 1])).toBe(1);
  });

  test('handles large numbers correctly', () => {
    expect(getClosestToZero([-1000, 999])).toBe(999);
  });

  test('handles decimal values', () => {
    expect(getClosestToZero([-0.5, 0.4])).toBe(0.4);
  });

  test('returns the only value in a single-item array', () => {
    expect(getClosestToZero([42])).toBe(42);
  });
});
