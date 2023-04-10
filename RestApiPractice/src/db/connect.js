import { connect } from 'mongoose'
let db = 'restApiPractice'
let dbUrl = `mongodb://localhost:27017/${db}`
const connectToDb = async () => {
    try {
        await connect(dbUrl)
        console.log(`Connect to db ${db}`)
    } catch (err) {
        console.log(err.message)
    }
}
export default connectToDb