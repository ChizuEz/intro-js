/**
  * Revirtiendo un array:
  * 
  * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que 
  * aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
  * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
  * produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
  * El segundo, revertirArrayEnSuLugar, hace lo que hace el método reverse: 
  * modifica el array dado como argumento invirtiendo sus elementos. 
  * Ninguno de los dos puede usar el método reverse estándar.
  */


 var animales = ['Lobo', 'Pato', 'Mapache', 'Mantis', 'Perro', 'Zorro'];
 var Array1 = animales.slice(0,3)
 var Array2 = animales.slice(-3)
 var arrayRevertido = []
 console.log(Array1)
 console.log(Array2)
 
 const revertir = (array) => {
     for (var i = 0; i < array.length / 2; i++) {
         let Moment = array[i]
         let other = array.length - i -1
         array[i] = array[other]
         array[other] = Moment
         return Moment
     }
 }

 const ArrayRevert = (array) =>{
     for (var i = 0; i < array.length / 2; i++) {
         let Moment = array[i]
         let other = array.length - i -1
         array[i] = array[other]
         array[other] = Moment
     }
 }
 
 revertir(animales)
 console.log("Invertir" , animales)
 ArrayRevert(revertir(animales))
 console.log("Posicion" , animales)








