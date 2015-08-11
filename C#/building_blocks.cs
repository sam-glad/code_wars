// Write a class Block that creates a block (Duh..)
//
// Requirements
//
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
//
// Define these methods:
//
// `GetWidth()` return the width of the `Block`
//
// `GetLength()` return the length of the `Block`
//
// `GetHeight()` return the height of the `Block`
//
// `GetVolume()` return the volume of the `Block`
//
// `GetSurfaceArea()` return the surface area of the `Block`

class Block
{
  public int Length { get; private set; }
  public int Height { get; private set; }
  public int Width { get; private set; }

  public Block(int[] dimensions)
  {
      Width = dimensions[0];
      Length = dimensions[1];
      Height = dimensions[2];
  }

  public int GetWidth()
  {
    return Width;
  }

  public int GetHeight()
  {
    return Height;
  }

  public int GetLength()
  {
    return Length;
  }

  public int GetVolume()
  {
    return Length * Width * Height;
  }

  public int GetSurfaceArea()
  {
    return 2 * (Length * Width + Height * Length + Height * Width);
  }
}

// Tests
using System;
using NUnit.Framework;

[TestFixture]
public class Tests
{
  [Test]
  public static void ExampleTest()
  {
    Block b = new Block(new int[]{2,2,2});
    Assert.AreEqual(2, b.GetWidth());
    Assert.AreEqual(2, b.GetLength());
    Assert.AreEqual(2, b.GetHeight());
    Assert.AreEqual(8, b.GetVolume());
    Assert.AreEqual(24, b.GetSurfaceArea());
  }
}
