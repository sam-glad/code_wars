// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Example:
//
// Kata.HighAndLow("1 2 3 4 5"); // return "5 1"
// Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
// Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

using System;
using System.Linq;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    var numbersArray = numbers.Split(' ').Select(num => Int32.Parse(num.ToString())).ToArray();
    return numbersArray.Max().ToString() + " " + numbersArray.Min().ToString();
  }
}

// Tests

using NUnit.Framework;

[TestFixture]
public class Tests
{
  [Test]
  public void Test1()
  {
    Assert.AreEqual("42 -9", Kata.HighAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
  }
}
