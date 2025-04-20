export function validateInput(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return false;
  return numbers.every((n) => typeof n === 'number' && Number.isFinite(n));
}
