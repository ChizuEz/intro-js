// 2) Dado un arreglo de enteros var numbers = [ 1, 2, 3, 4, 10, 11 ], encuentra la suma de 
// sus elementos

//IMPORTANTE: Todo el codigo de abajo son intentos de lograr el ejercicio pero fallidos, no logre encontrar la manera de incluir las
//            funciones a la suma de los array

var Lista = [1, 2, 3, 4, 10, 11]

function total(lista, numero) { 
    for (var i = 0; i < lista.length; i++){
        if(lista[i] === numero) {
            console.log("La suma de todos los elementos de la lista es")
        }
    }
}
total()

//El siguiente intento es el mas cercano al éxito pero sin capacidad de incluir a la función :c

function total(,) { 
    var numbers = [1, 2, 3, 4, 10, 11] 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("La suma de todos los elementos de la lista es " + sum);
        }
total()

//////////////////////////////////////////////////////////////////////////////////////////////

function total(arreglo) {
    console.log(sum([arreglo]))
  }
total([1, 2, 3, 4, 10, 11])
