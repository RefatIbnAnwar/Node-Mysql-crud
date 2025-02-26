// Get all student list

const mysqlPool = require("../Config/db")

const getStudents = async (req, res) => {
    try {
        const data = await mysqlPool.query('SELECT * FROM STUDENTS')
        if (!data) {
            res.status(404).send({
                success: false,
                message: "No records found",
            })
        } else {
            res.status(200).send({
                success: true,
                message: "All students record",
                totalStudents: data[0].length,
                data: data[0]
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in get all students API",
            error
        })
    }

}


const getStudentsByID = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: "Invalid or provide student ID"
            })
        }
        const data = await mysqlPool.query('SELECT * FROM STUDENTS WHERE ID=?',[studentId])
        if (data[0].length == 0) {
            res.status(404).send({
                success: false,
                message: "No records found",
            })
        } else {
            res.status(200).send({
                success: true,
                data: data[0]
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in get student by id API",
            error
        })
    }

}

module.exports = { getStudents, getStudentsByID }
