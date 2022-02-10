//  /*
//  const coleccion = [
//      {a: 11, b:224, name: "M48 Bulldog"},
//      {a:23, b:56, name: "Object 140"},
//      {a: 32, b:75, name: "T57 Heavy"}
//  ];
//  ​
//  Hacer una función para que reciba ese arreglo de objetos
//  y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
//  al String "name" para que devuelva algo así: 
//  ​
//              ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
// */


function contactguns(comb, comb1, comb2, comb3, comb4, comb5) {
 const coleccion = [
     {a: 11, b:224, name: " M48 Bulldog"},
     {a:23, b:56, name: " Object 140"},
     {a: 32, b:75, name: " T57 Heavy"}
 ]

 const sumaAB = coleccion.map((coleccion) => {
    return coleccion.a + coleccion.b
 })

 const namesGuns = coleccion.map((coleccion) =>{
     return coleccion.name
 })

// console.log(namesGuns)
// console.log(sumaAB)

// console.log(sumaAB[0] + namesGuns[0])
// console.log(sumaAB[1] + namesGuns[1])
// console.log(sumaAB[2] + namesGuns[2])

const numguns = sumaAB.concat(namesGuns)

console.log([numguns[comb] + numguns[comb3], numguns[comb1] + numguns[comb4], numguns[comb2] + numguns[comb5]])

}

contactguns(0, 1, 2, 3, 4, 5)