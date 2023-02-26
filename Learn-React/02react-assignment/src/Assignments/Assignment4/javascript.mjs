let log = console.log
let arr = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [...arr, ...arr2]
log(arr3)


let numFun = (number) => {
    if (number >= 3) {
        log('I am greater than equal to 3')
    } else if (number === 3) {
        log('I am 3')
    } else if (number < 3) {
        log('I am less than 3')
    } else {
        log('i am other')
    }
}

numFun(2)

let watchMovie = (age) => {
    if (age >= 18) {
        log('YOu are authorized to watch movies')
    }
}
watchMovie(18)

let arrInput = (arr) => {
    let newArr = arr.join(' , ')
    log(newArr)
}
arrInput(['html', 'css', 'js'])

let conStr = (word) => {
    let upp = word.toUpperCase();
    let split = upp.split('');
    log(split)
}

conStr('nitan')

let mul = (arr) => {
    let mul = arr.map((val) => {
        return val * 2
    })
    return mul
}
log(mul([1, 2, 3, 4]))