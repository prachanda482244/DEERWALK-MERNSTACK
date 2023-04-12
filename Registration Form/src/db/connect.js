import { connect } from 'mongoose'
let db = 'RegisterSystem'
let dbUrl = `mongodb://localhost:27017/${db}`

export const connectToDb = async () => {
    try {
        await connect(dbUrl)
        console.log(`Connect to database ${db}`)
    } catch (e) { console.log(e.message) }
}