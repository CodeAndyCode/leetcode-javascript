/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t, letters = {}) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    s[i] in letters ? letters[s[i]]++ : (letters[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in letters) {
      if (--letters[t[i]] === 0) delete letters[t[i]];
    } else return false;
  }

  return Object.keys(letters).length === 0;
};
