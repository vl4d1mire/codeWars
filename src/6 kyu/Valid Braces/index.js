function validBraces(s) {
  const stock = [];
  const braces = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  let current;
  for (let i = 0; i < s.length; i++) {
    current = s[i];
    if (isClosedBrace(current)) {
      if (braces[current] !== stock.pop()) return false;
    } else {
      stock.push(current);
    }
  }
  return stock.length === 0;
}

function isClosedBrace(ch) {
  return [')', ']', '}'].indexOf(ch) > -1;
}