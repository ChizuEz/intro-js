var Numero1
Numero1=prompt('Ingrese la primera cifra:')

var Numero2
Numero2=prompt('Ingrese la segunda cifra diferente a la primera cifra:')

if (+Numero1 > +Numero2){
    alert(Numero2 + " es menor que " + Numero1)
}else{
    alert(Numero1 + " es menor que " + Numero2)
}







// Math.min (Numero1, Numero2)


/* Bueno tengo que decir esta forma es la unica que me funciono al 100% las demas
sufrian un problema raro que con numeros multiplos de 5 o 10, eso creo al menos,
no detectaba del todo bien cual era menor o mayor, pero con Math.min si lo reconoce
bastante bien aunque no logre hacerlo con alerta :c */



// else if(Numero1, Numero2) {
//     alert(Numero1 + " es menor que " + Numero2)
// }



// if (Numero1 < Numero2){
//     alert(Numero1 + " es menor que " + Numero2)
// }



// }else{
//     alert(Numero1 + " es menor que " + Numero2)
// }