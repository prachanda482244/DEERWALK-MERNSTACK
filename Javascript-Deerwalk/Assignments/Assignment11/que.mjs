import { products } from "../01Data/data.mjs";
const log = console.log

// 1 find those array of  title whose price is does not equal to 5000

// 2 define  array using destructuring and call them

// 3 define object using destructuring and call them

// 4 make a error  and handle it useing try catch

const que1 = () => {
    let price = products.filter((elem) => {
        if (elem.price !== 5000) {
            return elem.price
        }
    })
    let title = price.map((val) => {
        return val.title
    })
    log(title)
}
que1()
const que2 = () => {
    let users = ['ramesh', 'suresh', 'hari', 'gopal']
    let [u1, u2, u3, u4, u5 = 'default'] = users
    log(u1)
    log(u2)
    log(u3)
    log(u4)
    log(u5)
}

const que3 = () => {
    let obj = {
        name: 'Itachi',
        surname: 'Uchiha',
        age: 22,
        isMarried: true,
    }
    let { name, surname, age, isMarried, role = 'Developer' } = obj

    log(name)
    log(surname)
    log(age)
    log(isMarried)
    log(role)

}


const que4 = () => {
    try {
        let error = new Error('Sorry - some error occurred');
        throw error
    } catch (err) {
        log(err.message)
    }
}

export { que1, que2, que3, que4 }