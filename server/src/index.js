const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('colors')
const { createHandler } = require('graphql-http/lib/use/express')
const schema = require('./schema')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())

// Connect to database
connectDB()

app.use('/graphql', createHandler({ schema }))

app.listen(PORT, console.log(`Server running on port ${PORT}`))
