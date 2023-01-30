import { age, name, greeting } from './export.mjs'

// return value must be stored in a variable
let fun1 = greeting(name, age)
console.log(age, name, greeting(name, age));
console.log(fun1);