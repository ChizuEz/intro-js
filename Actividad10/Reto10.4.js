 /**
  * La suma de un rango:
  * 
  * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
  * que contenga todos los números desde inicio hasta (e incluyendo) final. 
  * Luego, escribe una función suma que tome un array de números y retorne 
  * la suma de estos números
  */


    function listaInicioFinal(inicio, final) {
        
        var lista = []
        var contador = inicio
        sum = 0

        while (!(lista.length == final)) {
            lista.push(contador++)
        }

        function total() {
        for (var i = 0; i < lista.length; i++) {
            sum += lista[i]
          }
          return sum
        }
    console.log("La suma de todos los elementos de la lista es " + total(lista))
    }


    listaInicioFinal(1, 10)











