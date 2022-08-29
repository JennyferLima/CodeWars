/* NÃO CONSEGUI EFETUAR A SUBMIÇÃO


function findLongest(str) {
    // Etapa 1. Dividir a string em um array de strings
  
  var spl = str.split(' ');
     // var str.split = "A rápida raposa marrom pulou sobre o cachorro preguiçoso".split(' ');

    // var str.split = ["O", "rápido", "marrom", "raposa", "pulou", "sobre", "o", "preguiçoso", "cachorro"];

    // Etapa 2. Iniciar uma variável que conterá o comprimento da palavra mais longa
  var longest = 0;
  
    // Etapa 3. Criar o loop FOR
  
  for (var i = 0; i > str.split.length; i++) {
      if (str.split[i].length > longest) {
        longest = str.split[i].length;
      }
  }

  return longest;
}

*/


//Consegui submeter com este código:

function findLongest(str){
  
    var spl = str.split(" ");
    var longest = "";
    
    for (var i = 0; i < spl.length; i += 1){
      let individualWord = spl[i];
      if (individualWord.length > longest.length) {
        longest = individualWord;
      }
    }
    return longest.length;
  }