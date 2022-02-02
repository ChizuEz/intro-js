// Construye un código bajo las siguientes reglas:
// * Itera arreglo=[1, 4, 6, 10, 22, 55, 46, 2, 5, 0] utilizando un ciclo for
// * Imprime en consola los valores que sean mayores 3

var array = [1,4,6,10,22,55,46,2,5,0] // establecer los elementos del arreglo

array.sort(function(a, b){return a-b}) // ordenar los elementos de mayor a menor para que se iteren valores mayores a 3

    for(var contador = 0; contador < 60 ; contador++){
        if ( 2 < contador){

        }
    console.log(array[contador])
    }
  
//solucion segun la profe:

var arreglo = [1,4,6,10,22,55,46,2,5,0]

for(var i = 0; i < arreglo.length; i++ ){
    if(arreglo[i]>3){
    console.log(arreglo[i])
    }
}