// Create a new student data
// studentRouter.post('/students',
const Student = require('../schema/model')

// Create a student
const createStudent = async (req, res) => {
    try {
        const createUser = await Student.create(req.body)
        res.status(201).send(createUser);
    } catch (e) { res.status(400).send(e.message) }

}

// studentRouter.get('/students',

// Get all the student data
const getAllStudent = async (req, res) => {
    try {
        let studentsData = await Student.find()
        res.status(201).send(studentsData)
    } catch (err) { res.status(400).send(e.message) }
}

// Get the student individual data
const getStudent = async (req, res) => {
    try {
        const _id = req.params.id
        const studentData = await Student.findById(_id)
        if (!studentData) res.status(404).send('Not found')
        else res.status(201).send(studentData)

    } catch (e) { res.status(500).send(e.message) }
}
// Update the student by id
const updateStudent = async (req, res) => {
    try {
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, { new: true })
        res.status(200).send(updateStudent)
    }
    catch (e) { res.status(500).send(e.message) }
}

// Delete the student
const deleteStudent = async (req, res) => {
    try {
        const _id = req.params.id
        const deleteStudent = await Student.findByIdAndDelete(_id)
        deleteStudent === null ? res.status(200).send("No data already deleted") : res.status(200).send(deleteStudent)
    } catch (e) { res.status(500).send(e.message) }
}

module.exports = { createStudent, getAllStudent, getStudent, updateStudent, deleteStudent }