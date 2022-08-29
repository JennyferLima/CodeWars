/*
The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number
of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5

The character can be any alphanumeric character.

Good luck.

*/

//Meu código abaixo não funciona...

function countChar(string, char) {
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
       if (string[i] == char) {
         count++;
       }
     }
     return count;
  }
  
  function countBs (string) {
    return (countChar(string,'B'));
  }



/*
CÓDIGO DA INTERNET (FUNCIONANDO):

function countChar(string, char) {
  return (string.match(new RegExp(char, 'ig')) || []).length 
}

*/