/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 digits.

Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

function solution(digits, fiveDigitNums, start, end) {
  fiveDigitNums = Object.is(fiveDigitNums, undefined) ? [] : fiveDigitNums;
  start = Object.is(start, undefined) ? 0 : start;
  end = Object.is(end, undefined) ? 5 : end;
  
  let nextNum = digits.toString().split('').slice(start, end).join('')
  if (nextNum.length === 5) {
    fiveDigitNums.push(nextNum);
    start++;
    end++;
    return solution(digits, fiveDigitNums, start, end)
  }
  
  return fiveDigitNums.reduce((a, b) => Math.max(a, b));
}