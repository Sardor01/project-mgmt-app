const express = require('express')
require('dotenv').config()
require('colors')
const { createHandler } = require('graphql-http/lib/use/express')
const schema = require('./schema')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000

const app = express()

// Connect to database
connectDB()

app.use('/graphql', createHandler({ schema }))

app.listen(PORT, console.log(`Server running on port ${PORT}`))
