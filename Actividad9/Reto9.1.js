/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"

   RESPUESTAS: 
    1R) console.log(student.name)
    2R) console.log(student["age"])
    3R) student.name = "Steve Jobs"
        console.log(student.name)

 */

var student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
}

console.log(student.name)
console.log(student["age"])
student.name = "Steve Jobs"
console.log(student.name)
