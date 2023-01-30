let log = console.log;
let string = 'hello very good'
log(string)

// The method takes 2 parameters: start position, and end position (end not included).
let sliceString = string.slice(3, 8)

// If a parameter is negative, the position is counted from the end of the string:
sliceString = string.slice(-9, -1)
sliceString = string.slice(2) // 2 to rest of the string
log(sliceString)


let str = 'Hello'
log(str.length)

log(str.replace('Hello', 'Bachhi')) // case sensitive
console.clear()
str = 'hey';
let newStr = str.concat(' good boy ')


str = '                        Hey guys   '
newStr = str.trim()
newStr = str.trimEnd()
newStr = str.trimStart()

str = 'Bearer1234'
newStr = str.startsWith('Bearer')

str = 'Hello guys'
newStr = str.split(' ') // Return new string into an array
log(str)
log(newStr);