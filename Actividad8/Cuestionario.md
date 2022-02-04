# JS Closures / Scoping exercises

Name: _Benjamin Quezada_

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```
> _Creo nos mostraria solo el dos ya que el var a esta despues del console entonces deberia decir algo como que esta definida y el dos aparaceria por ser lo unico coherente segun dentro de la funcion test_


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _Creo que en este caso no mostraria nada talvez el uno pero creo que nada ya que hay varios fallos como no usar en absolutamente nada los paramentros de las funciones y un var suelto, ademas que los var de abajo solo uno coincide con la funcion de arriba y no es usada en nada asi que creo que daria error o undefined_


3. What is the result of the following code? Explain your answer.
  ```js
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());
  var test = obj.prop.getFullname;
  
  console.log(test());
  ```
> _Creo que deberia dar el nombre de Aurelio De Rosa ya que es de los ultimos con el que interactuá el var obj y el nombre de Colin thrig porque yo entiendo que el nombre de John Doe fue modificado y ahora es Colin Thrig, por esto creo que los nombres que los console.log nos mostrarian seria Colin Thrig y Aurelio De Rosa_


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
  ```
> _Pasa algo parecido como en la pregunta uno porque hay valores que quedan sueltos como los parametros de b, el return vacio y otra a en la funcion 10, por esta falta de datos creo que console.log solo deberia mostrar el 1 ya que el var a = 1 esta como dato global_






