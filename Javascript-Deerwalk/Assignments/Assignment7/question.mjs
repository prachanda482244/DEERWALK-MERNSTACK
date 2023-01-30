// Q13 make a arrow function that takes input as string and return weather true if the given string is palindrom
// palindrom string are those whose orginal and reverse are same

export let palindrome = (str) => {
    // let newStr = str.split('').reverse().join('');
    // if (str === newStr) {
    //     console.log('Given string is palindrome');
    // } else {
    //     console.log('Not palindrome')
    // }
    return str === str.split('').reverse().join('')
}