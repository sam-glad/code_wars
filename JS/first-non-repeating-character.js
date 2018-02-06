/*
Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
*/

function firstNonRepeatingLetter(s) {
  let notRepeated = '';
  let lettersCovered = [];
  for (let i = 0; i < s.split('').length; i++) {
    let currentLetter = s[i];
    if (lettersCovered.indexOf(currentLetter) !== -1) { continue; }
    let count = s.split(new RegExp(currentLetter, 'i')).length - 1;
    if (count === 1) {
      notRepeated = currentLetter;
      break;
    }
    lettersCovered.push(currentLetter.toUpperCase());
    lettersCovered.push(currentLetter.toLowerCase());
  }
  return notRepeated;
}