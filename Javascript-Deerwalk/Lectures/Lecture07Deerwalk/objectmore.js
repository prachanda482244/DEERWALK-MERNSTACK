// arrow function doesnt support this
// this is a keyword which point itself

// let a = [1, 2, 3];
// let b = a

// let o = { name: 'ram' }
// // let p = o
// let p = { name: 'ram' }
// console.log(a === b);
// console.log(o === p);
let log = console.log;

// let user = 'Nitan,thapa, nsdf,sdfsdf,sdfsd'
// let arr = user.split(',');
// log(arr)
// let j = arr.join(' ')
// log(j)

let obj = {
    firstName: 'Nitan',
    lastName: 'Thapa',
    merge: function () {
        let fullName = `${this.firstName} ${this.lastName}`;
        console.log(fullName);
    }
}
obj.merge()

let keysArr = Object.keys(obj)
let valuesArr = Object.values(obj)
log(keysArr)
log(valuesArr)