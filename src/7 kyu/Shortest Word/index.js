function findShort(s) {
  return (arr = s
    .split(' ')
    .map(w => w.length)
    .sort((a, b) => a - b)[0]);
}
