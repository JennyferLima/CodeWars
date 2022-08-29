/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if at least one Ruby developer has signed up; or
    false if there will be no Ruby developers.

For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

your function should return true.

Notes:

    The input array will always be valid and formatted as in the example above.

*/

//Escrever uma função que receberá com um array de objetos como parâmetro.
//Retorno deve ser 'true' ou 'false, se existe pelo menos UM dev Ruby que se inscriveu ou se NÃO há dv Ruby, respectivamente.
//Precisa usar um laço for e a condicional.

function isRubyComing(list) {
    
    let devsParticipantesRuby = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i].language == "Ruby"){
            devsParticipantesRuby++;
        }
    }
    
    if (devsParticipantesRuby > 0){
        return true;
    }
    else{
        return false;
    }
}


function isRubyComing(list) {
    
    let devsParticipantesRuby = false;

    lis.forEach(developer => {
        if(developer.language == "Ruby"){
            devsParticipantesRuby = true;}
    });

    return devsParticipantesRuby;
}
