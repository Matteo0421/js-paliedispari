
parola = prompt('inserisci')
const output = document.getElementById('output')

if (palindromo(parola) === true) {
  const output = document.getElementById('output').innerHTML += `La parola è palindroma` ;
}else{
  const output = document.getElementById('output').innerHTML += `La parola non  è palindroma` ;

}

// FUNZIONE
function palindromo(parola) {
  return parola === parola.split('').reverse().join('');
} 