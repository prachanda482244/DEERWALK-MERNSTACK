const { name, surName, age } = require('./nameModule')

let output = `My name is ${name} and my surname is ${surName} and my age is ${age}`
if (typeof (name) === 'string') {
    console.log(typeof (name));
}
console.log(output);