/*
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
    //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e 
    //retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na 
    //chamada do método.

    return x.split(' ').join('');
  }