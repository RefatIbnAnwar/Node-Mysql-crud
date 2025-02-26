const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mysqlPool = require('./Config/db')

// configure dotenv
dotenv.config()

// Rest Object 
const app = express()

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use("/api/v1/student", require("./Routes/studentRoute"));

app.get('/test', (req, res) => {
    res.status(200).send('<h1>Welcome Crud Application on Live</h1>')
})

//port
const PORT = process.env.PORT || 8000

// conditionally listen
mysqlPool.query('SELECT 1').then(()=> {

    console.log('MYSQL DB connected')

    // Listen
    app.listen(PORT, () => {
            console.log(`server running on port ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
})

