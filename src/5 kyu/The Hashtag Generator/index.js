function generateHashtag(str) {
  let t, resultString
  if (!str.match(/\w/)) return false;
  let arr = str
    .trim()
    .split(' ')
    .filter(i => i !== '');
  t = arr.map(i => i.replace(i[0], i[0].toUpperCase()));
  t.splice(0, 0, '#');
  resultString = t.join('')
  return resultString.length > 140 ? false : resultString
}