// DATOS: Precio teléfono, saldo en cuenta bancaria, precio de accesorios,
// tasa de impuesto, umbral de gasto
// 
// Recomendaciones: Usar loop! ; "$" 
// 

// var valortelef = 400
// var valoraddi = 100
// var saldoCuenta = 3000
// var compratotal = 0

// function compratl (saldoBanco, telef, accesorios){
//     while(saldoBanco < 500 ){
//         var compratotal = telef + accesorios
//         console.log("el saldo de la cuenta es " +  saldoCuenta - compratotal)
//     }
// }
// compratl(saldoCuenta, valortelef, valoraddi)



//declarando los valores globales constantes
const tax = 0.16
const precioAccesorio = 249.99
const telefono = 5999.99
const saldoBancario = 50000
const presupuesto = 30000
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })



//decrementar el saldo de la cuenta bancaria
//agregar articulos
function agregarMercanciaytotaltax (presupues, telef, precioAcce, impuesto) {
    while(TotalConTax <= presupues) { //arreglar 
        var totalCarrito = telef + precioAcce
        var TotalConTax = totalCarrito * impuesto
        return TotalConTax 
    }
}
function Nuevosaldobanco (presu, saldobanc, totaltax) { // agregamos un parametro que va a guardar el valor que necesitamos de nuestra funcion
    var totalConTax =  agregarMercanciaytotaltax(totaltax) // em una variable, guardamos el valor donde se va almaccenar lo que regresa la llamada a la funcion y aqui la ejecutamos
    while(presu < saldobanc) {  //arreglar 
        var Nuevosaldo = saldoBancario - totalConTax //Exactamente aqui me dice que el valor no esta definido
        console.log("Has hecho una compra de " + totalConTax + " , en unos momentos descontaremos este dinero de su cuenta")
        return Nuevosaldo
    }
}

//funcion para obtener el formato correcto de los datos anteriores
function format (){
    var Nuevosaldo =  Nuevosaldobanco()
    console.log(formatter.format("El nuevo saldo en tu cuenta bancaria es: " + Nuevosaldo))
}

//La base de las function estan listas ahora para que funcionen tengo que darle parametros asi que cambiare algunos nombres 
//para sustituirlos por los valores reales

agregarMercanciaytotaltax(presupuesto, telefono, precioAccesorio, tax)
Nuevosaldobanco(presupuesto, saldoBancario)