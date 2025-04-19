function getClosestToZero(values) {
  return values.reduce((prev, curr) => {
    const diff = Math.abs(curr) - Math.abs(prev);
    if (diff < 0) return curr;
    if (diff === 0) return curr > prev ? curr : prev;
    return prev;
  });
}

module.exports = { getClosestToZero };
