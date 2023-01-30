const log = console.log
let arr = ['Superadmin', 'Admin', 'Customer'].includes('Admin');
log(arr);

// for length method arr [index] but for at only index
let ar1 = [1, 2, 3, 4, 2, 5, 35, 454, 45, 5, 5, 32, 446, 12, 21]
// let lastindex = arr1.length - 1
let index = ar1.at(-1);
log(index)
// log(ar1.at(-1))