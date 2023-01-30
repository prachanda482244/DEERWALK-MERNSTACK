export function isNumber(age) {
    if (typeof (age) === 'number') {
        console.log(` ${age} is a number`);
    } else {
        console.log(`The value is not number`);
    }
}