// 3) Crea una función que reciba un número de 5 digitos como parametro y lo revierta: ejemplo
//    numero = 87943
//    salida esperada: 34978

const number1 = 1245612;

function reverseNumber(Holder) {
  const revertido = Holder.toString().split("").reverse().join("");
  return Number(revertido);
}

reverseNumber(number1);
