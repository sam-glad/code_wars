/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
Go challenge Build Tower Advanced once you have finished this :)
*/

function getSpacesToEitherSide(numSpaces) {
  return ' '.repeat(numSpaces);
}

function getStars(numStars) {
  return '*'.repeat(numStars);
}

function buildRow(numSpaces, numStars) {
  return getSpacesToEitherSide(numSpaces) + getStars(numStars) + getSpacesToEitherSide(numSpaces);
}

function towerBuilder(nFloors) {
  let tower = [];
  let numStars = 1;
  let numSpaces = nFloors - 1;
  
  for(let i = 1; i <= nFloors; i++) {
    tower.push(buildRow(numSpaces, numStars));
    numSpaces--;
    numStars+= 2;
  }
  return tower;
}