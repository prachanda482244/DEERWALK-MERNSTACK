// Q8 make a arrow function that takes number as input and
// if age [1 to 12],  return  since your age is ${age} your ticket is free
// if age[13 to 60], return since your age is ${age} your ticket cost 80
// if age[61 to 80 ], return since your age is ${age} your ticket cost 100
// if age[>80], return since your age is ${age} your ticket cost 200

export let ticket = (age) => {
    if (age >= 1 && age <= 12) {
        return `since your age is ${age} your ticket is free`;
    } else if (age >= 13 && age <= 60) {
        return `since your age is ${age} your ticket cost 80`
    } else if (age >= 61 && age <= 80) {
        return `since your age is ${age} your ticket cost 100`
    } else {
        return `since your age is ${age} your ticket cost 200`
    }
}