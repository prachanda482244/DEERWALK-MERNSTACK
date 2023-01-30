let oper = 1 + 2 + '3' + 1 + 2 + '3'
let oper2 = 'ram' - 'shyam'
console.log(oper)
console.log(oper2)
// NaN - cannot perform operation

// Operation inside string literal
let name = 'ramesh'
let strOper = `${1 + 2} ${name}`
console.log(strOper)

console.clear()

let bool = 'str' === 'str'
bool = NaN === NaN
// value and type
console.log(bool);
