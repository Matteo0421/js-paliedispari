
parola = prompt('inserisci')


if (palindromo(parola) === true) {
  console.log('La parola è palindroma');
}else{
  console.log('La parola non è palindroma');

}

// FUNZIONE
function palindromo(parola) {
  return parola === parola.split('').reverse().join('');
} 