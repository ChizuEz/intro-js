// 1) Concatena los siguientes arreglos:
// var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
// var comingSoonAnimals = ['panter', 'dragon', 'turtle']

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

var comingSoonAnimals = ['panter', 'dragon', 'turtle']

var newanimals = animals.concat(comingSoonAnimals)

// 2) A continuacion el ejercicio dos: Acomoda el arreglo de menor a mayor: var arr = [ 4, 6, 1, 0, 8, 2 ]

var arr = [ 4, 6, 1, 0, 8, 2 ] 

arr.sort(function(a, b){return a-b})

// 3) Despues se hace la tercera parte: Agrega un nuevo animal ("cow") al arreglo de animals

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.push("cow")

// 4) Finalmente hacemos el ultimo ejercicio el cual nos pide retirar el elemento "eagle" del arreglo animals

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.shift()  // utilizo shift ya que eagle es el primer elemento de la lista asi que con este bastaria

//Debo destacar que repito varias veces el var o arreglo animals ya que no estoy seguro si todo estos ejercicios
//son una continuacion del anterior en caso de ser asi solo debemos aplicar los var del primer ejercicio y despues
//solo usar los metodos de arreglo sin repetir los var