const { connect } = require('mongoose')
const database = 'students-api'
const databaseUrl = `mongodb://localhost:27017/${database}`

const connectToDatabase = async () => {
    try {
        await connect(databaseUrl)
        console.log(`Successfully connect to the database ${database}`)
    } catch (err) {
        console.log(err.message, ' cannot connect to the database')
    }
}
module.exports = connectToDatabase