export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return numerator / denominator;
}
