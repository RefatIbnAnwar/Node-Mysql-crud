const express = require('express')
const { getStudents, getStudentsByID } = require('../Controllers/StudentsController')

const router = express.Router()


// get all student list --GET

router.get('/list', getStudents)
router.get('/get/:id',getStudentsByID)


module.exports = router
