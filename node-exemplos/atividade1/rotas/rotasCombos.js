const express = require('express')
const rotas = express.Router()

rotas.route('/')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    
    .get((req, res) => {
        res.end('enviando todos os combos!')
    })
    
    .post((req, res) => {
        const { titulo, description } = req.body
        res.end(`adicionando uma combo: ${titulo}, ${description}`)
    })
    
    .put((req, res) => {
        res.status(405)
        res.append('Allow', ['GET', 'POST', 'DELETE'])
        res.end('operação PUT não é suportada em /combos')
    })
    
    .delete((req, res) => {
        res.end('deletando todos os combos!')
    })

rotas.route('/:comboId')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })

    .get((req, res) => {
        const { comboId } = req.params
        res.end(`informações do combo: ${comboId}`)
    })

    .post((req, res) => {
        const { comboId } = req.params
        res.status(405)
        res.append('Allow', ['GET', 'PUT', 'DELETE'])
        res.end(`operação POST não é suportada em /combos/${comboId}`)
    })

    .put((req, res) => {
        const { comboId } = req.params
        const { titulo, description } = req.body
        res.write(`atualizando combo: ${comboId}`)
        res.write(`novo título: ${titulo}`)
        res.end(`nova descrição: ${description}`)
    })

    .delete((req, res) => {
        const { comboId } = req.params
        res.end(`deletando combo: ${comboId}`)
    })

module.exports = rotas