require('dotenv').config()
require('colors')

const express = require('express')
const cors = require('cors')
const { WebSocketServer } = require('ws')
const { useServer } = require('graphql-ws/lib/use/ws')
const { createHandler } = require('graphql-http/lib/use/express')
const schema = require('./schema')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())

connectDB()

app.use('/graphql', createHandler({ schema }))

const server = app.listen(PORT, () => {
  const wsServer = new WebSocketServer({ server, path: '/graphql' })

  useServer({ schema }, wsServer)
})
