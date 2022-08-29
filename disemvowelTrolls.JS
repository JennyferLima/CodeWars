/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array
    //e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro
    //parâmetro na chamada do método.
    
    let arr = str.split('');
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!vowels.includes(arr[i])) {
        
        //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. 
        
        newArr.push(arr[i])
      }
    }
     
  return newArr.join('')
  }