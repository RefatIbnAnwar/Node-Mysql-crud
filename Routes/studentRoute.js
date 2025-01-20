const express = require('express')
const { getStudents } = require('../Controllers/StudentsController')

const router = express.Router()


// get all student list --GET

router.get('/list', getStudents)


module.exports = router
