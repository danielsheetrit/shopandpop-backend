'use strict'

const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
    PORT,
    HOST,
    HOST_URL
} = process.env

assert(PORT, 'Port is requierd')
assert(HOST, 'Host is requierd')

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL
}