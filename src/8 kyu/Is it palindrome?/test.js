const { assert } = require('chai');

describe("Fixed tests", function() {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});

describe("Random tests", function() {
  const sol = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
  const base = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 100; i++) {
    let str = null;
    if (Math.random() > 0.5) {
      str = Array(Math.floor(Math.random() * 10) + 1).fill().map(() => base[Math.floor(Math.random() * base.length)]).join('');
      str = (str + str.split('').reverse().join('')).split('').map(x => Math.random() > 0.5 ? x.toUpperCase() : x).join('');
    } else {
      str = Array(Math.floor(Math.random() * 10) + 1).fill().map(() => base[Math.floor(Math.random() * base.length)]).map(x => Math.random() > 0.5 ? x.toUpperCase() : x).join('');
    }
    it(`Testing for ${str}`, () => assert.strictEqual(isPalindrome(str), sol(str)));
  }
});