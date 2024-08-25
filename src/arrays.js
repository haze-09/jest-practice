export default function analyzeArray(array) {
  let length = array.length;

  let sum = array.reduce((prev, curr) => prev + curr, 0);
  let average = sum / length;

  let min = Math.min(...array);

  let max = Math.max(...array);

  return { average, min, max, length };
}
