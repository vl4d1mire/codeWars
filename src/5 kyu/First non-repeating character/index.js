// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  const hash = {};
  let count = 1;
  const str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]] = count + 1;
    } else {
      hash[str[i]] = count;
    }
  }
  const arr = Object.entries(hash).map(([key, value]) =>
    value === 1 ? key : ''
  );
  if (arr.every(i => i === '')) return '';
  const targetLetter = arr.filter(i => i !== '')[0];
  const indexLetter = parseInt(str.indexOf(targetLetter));
  return s[indexLetter];
}

firstNonRepeatingLetter('stress');

// 2 solution

// function firstNonRepeatingLetter(s) {
//   for (let i in s) {
//     if(s.match(new RegExp(s[i], 'gi')).length === 1) {
//       return s[i]
//     } 
//   }
//   return ''
// }
