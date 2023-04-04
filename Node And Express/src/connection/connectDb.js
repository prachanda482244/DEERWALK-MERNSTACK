// import { connect } from 'mongoose'
const { connect } = require('mongoose')
let db = 'mongodb'
let dbUrl = `mongodb://localhost:27017/${db}`

//creating a connection and making a new database
let connectDb = async () => {
    try {
        await connect(dbUrl);
        console.log(`successfully connected to database ${db}`);
    } catch (error) {
        console.log("Unable to connect database");
    }



}
module.exports = connectDb