const compression = require('compression')
const express = require('express')
const db = require('./config/db')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv/config')

// Models
require('./models/Empleado')

// Routes
const empleados = require('./routes/empleados')

const { HOST, PORT } = process.env
const API_VERSION = 'v1'
const server = express()

db.sync()
    .then(() => console.log('> Base de datos conectada 🙂'))
    .catch(error => console.error(error))

server.use(express.json())
server.use(compression())
server.use(logger('dev'))
server.use(helmet())

server.use(cors({
    origin: 'http://localhost:3000'
}))

// Endpoints
server.use(`/api/${API_VERSION}/empleados`, empleados)
server.use((_, res) => res.status(404).json({ error: 'Not found' }))

server.listen(PORT, () => console.log(`> http://${HOST}:${PORT} 🔥`))