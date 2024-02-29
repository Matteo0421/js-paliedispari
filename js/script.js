
// parola = prompt('inserisci')
// const output = document.getElementById('output')

// if (palindromo(parola) === true) {
//   const output = document.getElementById('output').innerHTML += `La parola ${parola} è palindroma` ;
// }else{
//   const output = document.getElementById('output').innerHTML += `La parola ${parola} non  è palindroma` ;
// }

// // FUNZIONE
// function palindromo(parola) {
//   return parola === parola.split('').reverse().join('');
// } 

let pariDispari;
let numGiocatore;

let validPariDispari = false;
let validNumber = false;


while (!validPariDispari) {
  pariDispari = prompt('Scrivi "pari" oppure "dispari"')
  // verifico che la stringa inserita sia 'pari' o 'dispari'
  if(pariDispari.toLowerCase() === 'pari' || pariDispari.toLowerCase() === 'dispari'){
    // se la stringa è valita interrompo il ciclo quindi non chiedo un altrpo inserimento
    validPariDispari = true;
  }else{
    alert('Attenzione! Devi scrivere la parola "pari" o "dispari"')
  }
}

while(!validNumber){
  numGiocatore = parseInt(prompt('Scrivi un numero da 1 a 5'));
  if(isNaN(numGiocatore) === false){
    if(numGiocatore > 0 && numGiocatore <=5){
      validNumber = true;
    }else{
      alert('Attenzione! hai inserito un numero sbagliato')
    }
  }else{
    alert('Attenzione! hai inserito una stringa e non un numero')
  }
}




const numPc = numeroPc (1, 5);

const somma = numPc + numGiocatore;


let risultato, messaggio;


if(verificaPari(somma, pariDispari)){

  messaggio = 'Vince il giocatore'
}else if (verificaDispari(somma, pariDispari)) {

  messaggio = 'Vince il giocatore'
}
else{
  messaggio = 'Vince il pc'
}

document.getElementById('output').innerHTML = `
Il giocatore ha giocato ${pariDispari} con numero ${numGiocatore} <br>
Il pc ha giocato ${numPc}  <br>
${messaggio}
`

// FUNZIONE
function numeroPc (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function verificaPari(somma, pariDispari) {
  return (somma % 2 === 0 && pariDispari === 'pari') ;
};
function verificaDispari(somma, pariDispari) {
  return  (somma % 2 !== 0 && pariDispari === 'dispari');
};


console.log(prompt);