const express = require('express')
const cors = require('cors')
const app = express()
const whitelist = [
    'http://localhost:3000',
    'https://localhost:3443'
]
const corsDelegate = (req, done) => {
    let opts, header = req.header('Origin')
    console.log('cors', header)
    if (whitelist.includes(header)) {
        opts = { origin: true }
    } else {
        opts = { origin: false }
    }
    done(null, opts)
}
exports.cors = cors()
exports.corsWithOptions = cors(corsDelegate)