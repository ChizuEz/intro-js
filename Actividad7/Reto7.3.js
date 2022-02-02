// 3) Desarrolla un método para verificar si una palabra es un palíndromo. Casos de 
//    prueba: var word1 = 'madam' var word2 = 'computadora'

function palindromo(word1, word2) {

    if(word1 == word1.split('').reverse().join('')){
        console.log( word1  + " es un palindromo, palabra invertida ---> " + word1.split('').reverse().join('') )
      }else{
        console.log( word1  + " no es un palindromo, palabra invertida ---> " + word1.split('').reverse().join('') )
      }
    if(word2 == word2.split('').reverse().join('')){
        console.log( word2  + " es un palindromo, palabra invertida ---> " + word2.split('').reverse().join('') )
      }else{
        console.log( word2  + " no es un palindromo, palabra invertida ---> " + word2.split('').reverse().join(''))
      }
}
palindromo("madam", "computadora");