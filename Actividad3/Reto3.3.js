//Solicitar al usuario un numero. Si el numero es el 1000, imprimir "Ganaste un premio", en caso contratrio mostrar
// el numero y el mensaje "Lo sentimos, sigue participando"

var Numero1
Numero1=prompt('Ingrese la cifra:')

var numwin = 1000

if (Numero1 == numwin){
    alert(" Ganaste un premio")
}else{
    alert("Lo sentimos, sigue participando")
}
