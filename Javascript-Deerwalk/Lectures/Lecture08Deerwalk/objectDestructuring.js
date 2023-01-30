const log = console.log
let obj = { name: 'Ram', age: 25, isMarried: true }
let { name, age, isMarried, status = 'Something' } = obj
log(name, age, isMarried, status)