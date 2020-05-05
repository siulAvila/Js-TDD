const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => {
  if (b === 0) return 'It is not possible divide by 0';

  return a / b;
};
const mult = (a, b) => a * b;

export { sum, sub, div, mult };
