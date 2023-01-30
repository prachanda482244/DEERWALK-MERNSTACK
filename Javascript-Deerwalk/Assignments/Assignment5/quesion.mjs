// Q9 make a arrow function  that takes sentence as string and retrun the total number of charater present in that string

// Q10 make a arrow function that takes input as string and return the trim version of string

// Q11 make a arrow function that takes input as ("Bearer 1234") and  return "valid token" if given input starts with Bearer else return "invalid token"

let que9 = (sentence) => {
    return sentence.length;
}

let que10 = (string) => {
    return string.trim();
}

let que11 = (input) => {
    if (input.startsWith('Bearer')) {
        return 'Valid token'
    } else {
        return 'Invalid Token'
    }
}

export { que9, que10, que11 }