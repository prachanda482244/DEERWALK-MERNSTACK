const { Router } = require('express')
const {
    createStudent,
    getAllStudent,
    getStudent,
    updateStudent,
    deleteStudent } = require('../controllers/studentController')
const studentRouter = Router()

studentRouter.route('/students').post(createStudent).get(getAllStudent)
studentRouter.route('/students/:id').get(getStudent).put(updateStudent).delete(deleteStudent)

module.exports = studentRouter