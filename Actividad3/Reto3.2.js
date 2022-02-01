//Crear un programa que determine si un numero introducido en un Prompt es par o no, la respuesta será mostrada
// en un alert


var Numero1

Numero1=prompt('Ingrese la cifra:')

if ((Numero1 % 2) == 0){
    alert(Numero1 + " es par")
}else{
    alert(Numero1 + " no es par")
}
