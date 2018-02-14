/*
The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

If the final result is longer than 140 chars it must return false.
If the input is a empty string it must return false.
It must start with a hashtag (#).
All words must have their first letter capitalized.
Example Input to Output:

" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

" Hello World " => "#HelloWorld"
*/

function generateHashtag(str) {
  const maxLength = 140;
  if (!str || str.length > maxLength) { return false; }  
  let hashTag = '#' + str.trim().split(' ').map(word => { return word[0].toUpperCase() + word.slice(1); }).join('');
  return hashTag.length > maxLength ? false : hashTag;
}