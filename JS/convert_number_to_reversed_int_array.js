// Given a non-negative integer, return an array containing a list of independent digits in reverse order.
//
// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  return n.toString().split('').reverse().map(function(i) { return parseInt(i); });
}

// Tests
Test.assertSimilar(digitize(35231),[1,3,2,5,3]);
