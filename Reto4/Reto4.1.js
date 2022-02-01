// var num = parseInt(prompt("Ingrese un numero: "))
// var multiplo = 0

// while(multiplo < num){
//   if(multiplo == 0){
//       console.log(1)
//   }else {
//     console.log(multiplo)
//   }
//   multiplo = multiplo + 5

// }

var num = parseInt(prompt("Ingrese un numero: "));
var contador = 1;

while (contador <= num) {
  if (contador % 5 === 0) console.log(contador + " es multiplo de 5");
  contador++;
}
