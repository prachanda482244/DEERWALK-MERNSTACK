// Q12 make a arrow function that will take a number and return you can enter room only if the enter number is less than 18 else you can not enter

// Q13 make a arrow function that take input as array and return , output in ascneding order (edited)

// Q14 make a arrow function that take input as array and return , output in desending order (edited)

// Q14 make a arrow function that take input as [1,2,3] and return [1,8,3] here ar[1] is changed from 2 to 8 (edited)

// Q15 make a arrow function that take input as [1,2,3] , which when called add 4 at last

// Q16 make a arrow function that take input as "my name is nitan thapa" and product output as ["my","name","is","nitan","thapa"]

// Q17 make a arrow function which takes input as [1,2,3] and produce output as "1,2,3"

let que12 = (num) => {
    if (num < 18) {
        return 'You can enter in the room'
    } else {
        return 'You cannot enter'
    }
}

let que13Ass = (arr) => {
    return arr.sort((a, b) => a - b);
}

let que13Des = (arr) => {
    arr.sort((a, b) => a - b);
    arr.reverse()
    return arr

}
let que14 = (arr) => {
    arr[1] = 8
    return arr;
}

let que15 = (arr) => {
    arr.push(4);
    return arr
}

let que16 = (sentence) => {
    return sentence.split(' ')
}

let que17 = (array) => {
    return array.join(' ');
}

export { que12, que13Ass, que13Des, que14, que15, que16, que17 }