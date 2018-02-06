/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names) {
  names = names.map(nameObj => nameObj.name);
  
  switch(names.length) {
    case 0:
      return '';
    case 1:
      return names[0];
    case 2:
      return names.join(' & ');
    default:
      let formatted = names.slice(0, -2).join(', ');
      return formatted+= `, ${names[names.length - 2]} & ${names[names.length - 1]}`;
  }
}