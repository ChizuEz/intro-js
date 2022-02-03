// 4) Escribe una función que reciba una cadena como parámetro (ejemplo: "soy una cadena de texto" y que convierta la primera letra de cada palabra en mayúscula

function Mayus(Upper) {  //Declaramos nuestra función y usamos nombres fáciles de asimilar
  
    return Upper.toLowerCase()  // Volvemos todo el texto en minúscula para dejar solo las iniciales de cada palabra en mayúsculas
              .trim()           // Eliminamos espacios en blanco de nuestro string en para asegurar sus funcionalidad
              .split(' ')       // Separamos todas las palabras para evaluarlas por separado
              .map( v => v[0].toUpperCase() + v.substr(1) ) //Volvemos cada inicial de la palabra en mayúsculas gracias a substr
              .join(' ');       // Volvemos a unir todas las palabras para que podamos leerlas tranquilamente 
  }
  
  console.log(Mayus("soy una cadena de texto"))

