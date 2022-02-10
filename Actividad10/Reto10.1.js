/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */

function lowhigh(pos1, cant1, pos2, cant2) {

 const arr = [3,4,6,1,5,2,9,10,23,12]

 arr.sort(function(a, b){return a-b})

// console.log(arr)

 console.log(arr.splice(pos1, cant1))
 console.log(arr.splice(pos2, cant2))
}

lowhigh(0, 2, 6, 2)
