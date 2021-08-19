const palindromePairs = words => {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') {
      words[i] = words[i].toString();
    }
    for (let j = 0; j < words.length; j++) {
      if (isPalindrome(words[i] + words[j]) && i !== j) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

function isPalindrome(word = '') {
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) return false;
  }
  return true;
}
