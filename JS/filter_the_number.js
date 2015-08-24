// Filter the number
//
// Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?
// Task
//
// Your task is to return a number from a string.
// Details
//
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var FilterString = function(value) {
  valueAsArray = value.split('');
  for (var i = 0; i < valueAsArray.length; i++) {
    if (valueAsArray[i] != parseInt(valueAsArray[i])) {
      valueAsArray[i] = null;
    }
  }

  return parseInt(valueAsArray.join(''));
}

// Tests

Test.describe('Fixed Tests', _ => {
  Test.assertEquals(FilterString("123"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("a1b2c3"), 123, 'Just return the numbers');
  Test.assertEquals(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
});
