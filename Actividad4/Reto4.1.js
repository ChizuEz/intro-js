// Usando while, crea un programa que pregunte al usuario un número. Mostrar los 
// números que son múltiplos de 5 desde 1 hasta el número introducido por el 
// usuario. 

var num = parseInt(prompt("Ingrese un numero: "));
var contador = 1;

while (contador <= num) {
  if (contador % 5 === 0) console.log(contador + " es multiplo de 5");
  contador++;
}
