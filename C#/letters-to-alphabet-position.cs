/*
I lost the original description for this, but it was essentially to take a string and convert all letters to the number representing their place in the alphabet. Ignore all characters which are not A-Z or a-z.
*/

using System;
using System.Collections.Generic;
using System.Text;

class Program
{
	public static string AlphabetPosition(string text)
	{
		text = text.ToLower();
		string alphabet = "abcdefghijklmnopqrstuvwxyz";
		Dictionary<char, int> lettersWithPositions = new Dictionary<char, int>();
		for (int i = 0; i < alphabet.Length; i++)
		{
			int position = i + 1;
			lettersWithPositions.Add(alphabet[i], position);
		}

		StringBuilder sb = new StringBuilder();
		foreach (char letter in text)
		{
			if (letter >= 'a' && letter <= 'z')
			{
				sb.Append($"{lettersWithPositions[letter]} ");
			}
		}

		return Convert.ToString(sb).Trim();
	}
}
