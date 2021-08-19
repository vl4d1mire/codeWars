describe('Solution', function() {
  it('should return the right pairs', function() {
    Test.assertSimilar(palindromePairs(['bat', 'tab', 'cat']), [
      [0, 1],
      [1, 0]
    ]);
    Test.assertSimilar(palindromePairs(['dog', 'cow', 'tap', 'god', 'pat']), [
      [0, 3],
      [2, 4],
      [3, 0],
      [4, 2]
    ]);
    Test.assertSimilar(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']), [
      [0, 1],
      [1, 0],
      [2, 4],
      [3, 2]
    ]);
  });

  it('should work with an empty list', function() {
    Test.assertSimilar(palindromePairs([]), []);
  });

  it('should work when there are no pairs', function() {
    Test.assertSimilar(
      palindromePairs(['adgdfsh', 'wertewry', 'zxcbxcb', 'efveyn']),
      []
    );
  });

  it('should handle non-string inputs', function() {
    Test.assertSimilar(palindromePairs([5, 2, 'abc', true, [false]]), []);
    Test.assertSimilar(palindromePairs([5777, 'dog', 'god', true, 75]), [
      [0, 4],
      [1, 2],
      [2, 1]
    ]);
  });

  it('should work for random cases', function() {
    let _ = require('lodash');

    const solution = words => {
      words = words.map(word => String(word));
      let pairs = [];
      for (i = 0; i < words.length; i++) {
        for (j = 0; j < words.length; j++) {
          if (
            i != j &&
            words[i] + words[j] ==
              (words[i] + words[j])
                .split('')
                .reverse()
                .join('')
          ) {
            pairs.push([i, j]);
          }
        }
      }
      return pairs;
    };

    const makeWords = (n = 1) => {
      let words = [];
      for (i = 0; i < n; i++) {
        words.push(
          _.shuffle('abcdefghijklmnopqrstuvwxyz'.split(''))
            .slice(0, Math.ceil(Math.random() * 5 + 5))
            .join('')
        );
      }
      return words;
    };

    const makePalindromePairs = (n = 1) => {
      let words = makeWords(n);
      let pairs = [];
      for (i = 0; i < words.length; i++) {
        pairs.push([
          words[i],
          words[i]
            .split('')
            .reverse()
            .join('')
        ]);
      }
      return pairs;
    };

    let words;
    let pairs;
    let arr;
    let tests = 10;

    while (tests > 0) {
      words = makeWords(Math.round(Math.random() * 5));
      pairs = makePalindromePairs(Math.round(Math.random() * 5));
      arr = _.shuffle(words + pairs);
      Test.assertSimilar(palindromePairs(arr), solution(arr));
      tests--;
    }
  });
});
