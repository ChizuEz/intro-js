//Solicitar al usuario que ingrese tres numeros y mostrar cual de los tres es el numero mayor. Considerar
//el caso en que 2 numeros sean iguales


const numA = parseFloat(prompt("Ingrese número A"))
const numB = parseFloat(prompt("Ingrese número B"))
const numC = parseFloat(prompt("Ingrese número C"))


if (numA === numB && numA === numC) {
  alert("Todos los numeros son iguales")
}else if(numA > numB){ 
  if(numA > numC){
    alert("El número A " + numA + " es el mayor")
  } else if(numC > numA){
    alert("El número C " + numC + " es el mayor")
  } else{
    alert("El número A y el número C son iguales", numA, numC)
  }
} else if(numB > numA){
  if(numB > numC){
    alert("El número B " + numB + " es el mayor")
  } else if(numC > numB){
    alert("El número C " + numC + " es el mayor")
  }else {
    alert("El número B y el C son iguales", numB, numC)
  }
} else { 
  alert("El número B y el A son iguales", numA, numB)
}
