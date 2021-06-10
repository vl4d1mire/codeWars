function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let result = [];
  let sum;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result.push(i);
      sum = result.reduce((n, acc) => acc + n);
    }
  }
  return sum;
}
