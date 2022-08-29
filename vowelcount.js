/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


function getCount(str) {
    var vowelsCount = 0;
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = 0; i < str.length; i++){
      
      //O método includes() determina se um array contém um determinado elemento, retornando true ou false.
      //O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo.
      
      if(vowels.includes(str[i].toLowerCase())){
        vowelsCount++;
      }
    }
    
    return vowelsCount;
  }

/*
  OUTRA SOLUÇÃO:
  
  function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/