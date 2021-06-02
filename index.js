// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let arr = str.split(' ');
  const result = arr.map(item => {
    let letterArr = item.split('');
    const firstLetter = letterArr.shift();
    letterArr.push(firstLetter);
    if(item !== '!' && '?') {
      letterArr.push('ay');
    }
    return letterArr.join('');
  });
  return result.join(' ')
}

// Examples
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
