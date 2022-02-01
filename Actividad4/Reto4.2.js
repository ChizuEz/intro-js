// Crea el mismo problema que el anterior pero usando Do While

var num = parseInt(prompt("Ingrese un numero: "));
var contador = 1;

do {
    contador++
    if (contador % 5 === 0) console.log(contador + " es multiplo de 5")

}while (contador <= num)