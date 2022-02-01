//solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de
// "x numero es divisible entre 2" o "x num"

var Numero1 = prompt("Ingrese la cifra:")

if (Numero1 % 2 == 0) {
  console.log(Numero1 + " es divisible entre dos")
} else {
  console.log(Numero1 + " no es divisible entre dos")
}
