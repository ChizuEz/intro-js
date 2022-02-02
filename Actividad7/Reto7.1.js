// 1) Crear una función que recibe 2 parámetros (una oración y la palabra a buscar).
//    Retornar true o false en caso de que una oración contenga una palabra dada, es decir,
//    si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un
//    false. En cambio si mando "mundo" entonces debe retornar true.


function find ( oración, palabra )  {
    var total = oración.search(palabra)
    if(total <=0){
      return false
    }else{
      return true
    }
  }

find( "Hola mundo" , "mundo")   // Sirve para el proposito del ejercicio si escribe exactamente mundo mandara true y si se escribe perro se mandara
                                // false pero tiene errores por ejemplo si se escribe undo mandara true porque en cierto sentido undo si se encuentra
                                // en "Hola mUNDO" pero si se escribe mudo mandara false y no se realmente como solucionar esto 


// LO QUE ESTA ABAJO SON SOLO TESTS DE INTERNET QUE ESTUVE PROBANDO AUNQUE NO CON MUCHO EXITO😭

//  function find ( oración, palabra )  {
//    var respuesta 
//     if(oración.test(palabra)){
//       respuesta = return false
//     }else{
//       respuesta = return true
//     }
//  }
                            
// find( "Hola mundo" , "mundo") 

// function probarEntrada(regexp, cadena){
//   var subcadena
//   if (regexp.match(cadena)) {
//     subcadena = ' contiene '
//   } else {
//     subcadena = ' no contiene '
//   }
//   console.log(cadena + subcadena + regexp.source)
// }

// probarEntrada("Hola mundo", "mundo")

// function testinput(re, str) {
//   var midstring;
//   if (str.search(re) != -1) {
//     midstring = ' contains ';
//   } else {
//     midstring = ' does not contain ';
//   }
//   console.log(str + midstring + re);
// }

// testinput("Hola mundo", "mundo")




