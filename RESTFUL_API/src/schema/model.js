const { model } = require('mongoose')

const studentSchema = require('./students')

let Student = new model('Student', studentSchema)
module.exports = Student