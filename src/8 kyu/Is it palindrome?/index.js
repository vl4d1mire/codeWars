
function isPalindrome(x) {
  let w = x.toLowerCase();

  return x === undefined
    ? false
    : w ===
        w
          .split('')
          .reverse()
          .join('');
}