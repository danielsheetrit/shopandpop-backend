'use strict'

const express = require('express')
const cors = require('cors')
const config = require('./config')


const productRoutes = require('./routes/products-routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', productRoutes.routes)

app.listen(
    config.port,
    () => console.log(`App is listening on port ${config.port}`)
)