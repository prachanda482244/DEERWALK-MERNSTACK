const log = console.log;
let arr = ['a', 'b', 'c', 'd']

let [a, b, c, d, e = 'e'] = arr;
log(a)
log(b)
log(c)
log(d)
log(e)
