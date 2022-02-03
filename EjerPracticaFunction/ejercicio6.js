// 6)Escriba una función que acepte dos argumentos, una cadena y una letra, y la función contará el número de ocurrencias de la letra especificada dentro de la cadena


function cantidadletra(oracion, letra){ //Declaramos la funcion
    var arreglo = [] //arreglo que ayudara a nuestro contador a viajar por los caracteres y contar la cantidad
    for(var i = 0; i < oracion.length; i++) { //Asignamos un valor a i para despues decirle que viaje a traves de oracion mientras esta sea mayor
      if (oracion[i].toLowerCase() === letra) arreglo.push(i) //Volvemos todas las letras en minusculas para que podamos contar correctamente la cantidad
    }
      return arreglo.length
  }
  
  //aqui le damos el dejamos la oracion y la palabra a buscar, ademas la hacemos un var para que despues nuestro console.log nos cuente la cantidad que se repite
  var vecesrep = cantidadletra("Por eso la soledad es tan terrible como estar muerto en vida tener lo peor de las 2 opciones ser olvidado y encima ser conciente de ello", "a")
  
  console.log(vecesrep)

