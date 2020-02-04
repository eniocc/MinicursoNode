const path = require('path')
const morgan = require('morgan')

const http = require('http')
const express = require('express')
const porta = 3000

const rotasPizzas = require('./rotas/pizzas')

const app = express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/pizzas', rotasPizzas)

const servidor = http.createServer(app)
servidor.listen(porta, () => {
    console.log(`servidor escutando em http://localhost:${porta}/`)
})