//Usando for, crea un programa que imprima en consola los números impares del 1 
//al 50.

var contador = 0

for ( num = 1; num <= 50; num = num + 2){
    if (!(num % 2 == 0)){
    console.log(num + " es un numero impar")
    }
}