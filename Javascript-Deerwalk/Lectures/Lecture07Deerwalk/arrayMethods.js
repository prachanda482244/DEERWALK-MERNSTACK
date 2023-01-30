let log = console.log

// MAP MEthod
// use map method when input is array and output is array when the length of input and output array is same , Map must return something

let mapUsers = ['Ram', 'Shyam', ' Hari', 'Nitan'].map((value, i) => {
    // log(value)
    if (value === 'Nitan') {
        return (value + ' thapa ' + (i + 1))
    } else {
        return (value + ' bahadur ' + (i + 1))
    }
})
let arr = [1, 2, 3, 4].map((v, i) => {
    return v + 2;
})
log(arr)
log(mapUsers)
let newArr = ['a', 'b', 'c', 'd'].map((value, i) => {
    let returnVal = `${value}${i}`
    return (returnVal)
})
log(newArr)


// Filter method
// All element of output must be from input.
// return when the value is true false will not write
let filterArr = [1, 2, 3, 4].filter((val, i) => {
    if (val === 1 || val === 2) {
        return true
    } else {
        return false
    }
})
log(filterArr)

let que = [1, 9, 11, 15, 3].filter((val) => {
    if (val >= 10) return true
})
log(que)
console.clear()

// Find method
// return only first match - return single data

let qe2 = [1, 9, 11, 15, 3].find((value, i) => {
    // (value >= 11) ? true : false
    if (value >= 11) return true
})
log(qe2, typeof (qe2))