function iqTest(numbers) {
  const arr = numbers.split(' ');
  let evenEl = [];
  let oddEl = [];
  arr.map(i => {
    if (i % 2 === 0) {
      evenEl.push(i);
    } else {
      oddEl.push(i);
    }
  });
  const el = evenEl.length < oddEl.length ? evenEl : oddEl

  return arr.indexOf(String(el)) + 1
}