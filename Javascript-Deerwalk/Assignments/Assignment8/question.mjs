// Q14 define object with property are name, age, address(in object), favMovies(in Array)
// delete age from the object
// add isMarried property the object
// replace age with another
let lg = console.log;
export let obj = {
    name: 'ItachiUchiha',
    age: 22,
    adress: {
        country: 'Nepal',
        city: 'KTM'
    },
    favMovies: ['Naruto', 'Demon slayer', 'Tokyo revengers']
}
lg(obj)
delete obj.age
obj.isMarried = true
obj.age = 30
lg(obj)