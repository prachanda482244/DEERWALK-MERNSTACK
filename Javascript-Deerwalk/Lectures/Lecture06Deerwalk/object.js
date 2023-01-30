let info = {
    name: "nitan",
    age: 28,
    isMarried: false,
    name: "ram",

    obj: {
        country: "nepal",
        city: "kathmandu",
    },
    sum: (a, b) => {
        let s = a + b;
        return s;
    },
};

// console.log(info);

// delete info.name;

// delete info.isMarried;

// console.log(info);

console.log(info.favSubject);

let add = info.sum(1, 2);

console.log(add);

console.clear();
let lg = console.log;
let bio = {
    name: 'Itachi Uchiha',
    age: 22,
    isMarried: true,
    address: {
        country: 'Nepal',
        city: 'KTM'
    },
    details: () => {
        return `Hello ${bio.name} you are ${bio.age} yrs old`
    }
}
// delete bio.age
lg(bio.details())
lg(bio)