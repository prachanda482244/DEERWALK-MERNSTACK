import { products } from '../01Data/data.mjs'
let log = console.log

// 1.find the array of id ie  output must be [1,2,3]
// 2.find the array of title ie output must be ["Product 1", "Product 2", "Product 3"]
// 3.find the array of category
// 4.find the array of type
// 5.find the array of price where each price is multiplied by 3
// 6.find those array of  title whose price is >= 3000
let que1 = () => {
    let ids = products.map((elem) => {
        return (elem.id)
    })
    log(ids)
}
let que2 = () => {
    let titles = products.map((title) => {
        return title.title
    })
    log(titles)
}
let que3 = () => {
    let categorys = products.map((elem) => {
        return elem.category
    })
    log(categorys)
}

let que4 = () => {
    let types = products.map((elem) => {
        let types = elem.discount.type
        return types
    })
    log(types)
}

let que5 = () => {
    let pricesMulby3 = products.map((elem) => {
        let price = elem.price;
        return price * 3
    })
    log(pricesMulby3)
}
let que6 = () => {
    let filterOutput = products.filter((value) => {
        let price = value.price
        if (price >= 3000) return true
    })
    let mappedOutput = filterOutput.map((val) => {
        return val.title;
    })
    log(mappedOutput)
}

export { que1, que2, que3, que4, que5, que6 }