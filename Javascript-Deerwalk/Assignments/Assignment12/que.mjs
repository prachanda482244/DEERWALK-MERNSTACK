import { products } from "../01Data/data.mjs";
// Q26 make a perfect sum function that returns sum of two number
//          eg sum(1,2) must return 3
//          eg sum(012,2) must return 14 (edited)

const log = console.log;

const que26sum = (a, b) => {
    return parseInt("a") + parseInt(b)
        // return Number(a) + Number(b);

}
log(que26sum(`012`, 2))

// Q27 make a function that takes a sentence and return the greatest(in length) palindrom string
//      eg  greatest("mam is beautiful and madam is fabulous but mom is the best) , it   must return  madam because madam is the palindrom string which has largest length than other palindrom )

const que27Palin = (sentence) => {
    // Split the whole sentence into words
    let words = sentence.split(' ');

    // assigning a variable to store the greatest value
    let greatest = '';

    // looping through all words
    words.map((word) => {

        // Checking  the palindrome value
        if (word === word.split('').reverse().join('')) {
            // log(word.length)
            // log(greatest.length)
            if (word.length > greatest.length) {
                greatest = word;
            }
        }
    })
    return greatest
}
log(que27Palin('mam is beautiful and madam is fabulous but mom is the best'))

// Q28 make a function that takes two input one is array and another is string and  return true if the string lies in that array else return false
//    eg    fun(["admin","superAdmin"],"admin") must return true because admin lies in the given array
//     eg   fun(["admin","superAdmin"],"user") must return false because user doesnot lies then the given array

const que28Arr = (arr, str) => {
    if (arr.includes(str)) return true
    else return false
}
log(que28Arr(['admin', 'superAdmin'], 'admin'))
log(que28Arr(['admin', 'superAdmin'], 'user'))

// Q29 Write a JavaScript function to get the last element of an array

const que29LstElm = (arr) => {
    return arr.at(-1)
}

log(que29LstElm([1, 2, 3, 4, 5, 9]))


// Q30 make a function that takes a sentence and return capitalized version of that sentence
//       eg eachWordCapital("my name is nitan thapa") the output must be "My Name Is Nitan Thapa" here note each word has first letter capital.

const que30Cap = (sentence) => {
    let words = sentence.split(' ');
    let capitalize = words.map((word) => {
        // log(word.charAt(0).toUpperCase())
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capitalize.join(' ')
}
log(que30Cap('my name is nitan thapa'))

// practice example
// let str = 'my name is nitan'
//     // str = str.charAt(0).toUpperCase()
//     // str = str.slice(1) // remove the n leter
//     // log(str)

// 31 make a function that produce following  output ( ie perform international conversion)
//     eg groupDigital(1234567890.1234567)    must  return        1,234,567,890.1234
//           groupDigital(1234567890.1234)       must return        1,234,567,890.1234
//           groupDigital(12345.1234)       must return        12,345.1234 (edited)
const que31 = () => {
    // log('i dont know')

}
console.clear()

// Q32 make a function that takes one input as number and returns array format of that number
// eg convertToArray(4) it must provide [1,2,3,4]
// eg convertToArray(5) it must provide [1,2,3,45]
const que32 = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }

    return arr;

}
log(que32(5))


const que33 = () => {
        // find category
        let categories = products.map((category) => {
            log(category.category)
        })
        let uniqueCategory = categories.filter((category, index) => {
            if (categories.indexOf(category) === index) {
                // log(category)
                return category
            }
        })
        return uniqueCategory

    }
    // log(products)
que33()