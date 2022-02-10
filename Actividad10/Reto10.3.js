     /**
   * Dadas dos matrices de enteros,
   * encuentra qué elementos faltan en la segunda matriz
   * de la primera matriz.
 ​
 Ejemplo
 ​
 La matriz es la lista original. Los números que faltan son
      matriz = [7,2,5,3,5,3]
      br = [7,2,5,4,6,3,5,3]
 ​
      Los números que faltan en arr son [4,6]
 ​
 */

     const identificar = (finder1, finder2) => {
     return finder1.filter(elemento => finder2.indexOf(elemento) == -1);
     }

    const matriz = [7, 2, 5, 3, 5, 3]
    const br = [7, 2, 5, 4, 6, 3, 5, 3]


    const comprobadorMatriz = identificar(br, matriz)
    console.log("Elementos que faltaban en el arreglo matriz: ", comprobadorMatriz)









