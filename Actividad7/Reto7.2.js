// 2) Dado un arreglo de enteros var numbers = [ 1, 2, 3, 4, 10, 11 ], encuentra la suma de
// sus elementos

var numbers = [1, 2, 3, 4, 10, 11]
var sum = 0

function total(array) {
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log("La suma de todos los elementos de la lista es " + total(numbers))
