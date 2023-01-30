// Q7 make a arrow function that takes 1 input as number and return "category1" for number range from 1 to10,  return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30

export let category = (num) => {
    if (num >= 1 && num <= 10) {
        return 'Category 1'
    } else if (num >= 11 && num <= 20) {
        return 'Category 2'
    } else if (num >= 21 && num <= 30) {
        return 'Category 3'
    } else {
        return 'Other category'
    }
}