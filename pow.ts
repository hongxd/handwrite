function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  if (n % 2 !== 0) return x * pow(x, n - 1);
  return pow(x * x, n / 2);
}
console.log(pow(2, 6));
