function validateInput(values) {
  return (
    Array.isArray(values) &&
    values.length > 0 &&
    values.every((v) => typeof v === 'number' && Number.isFinite(v))
  );
}

module.exports = { validateInput };
