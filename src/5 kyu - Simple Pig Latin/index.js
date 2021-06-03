function pigIt(str) {
  let arr = str.split(' ');
  const result = arr.map((item) => {
    let letterAr = item.split('');
    const firstLetter = letterAr.shift();
    letterAr.push(firstLetter);
    if(item !== '!' && item !== '?') {
      letterAr.push('ay');
    }
    const t = letterAr.join('');
    return t;
  });
  const lastLetter = result[result.length - 1]
  const target = result.join(' ');
  return target;
}