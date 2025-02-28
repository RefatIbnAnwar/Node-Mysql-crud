const express = require('express')
const { getStudents, getStudentsByID, createStudent, updateStudent, deleteStudent } = require('../Controllers/StudentsController')

const router = express.Router()


// get all student list --GET

router.get('/list', getStudents)
// get student by id
router.get('/get/:id',getStudentsByID)
// Create new student
router.post('/create', createStudent)
// Update new student
router.put('/update/:id', updateStudent)
// Delete student
router.delete('/delete/:id', deleteStudent)

module.exports = router
