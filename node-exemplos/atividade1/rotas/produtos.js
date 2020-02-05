const express = require('express')
const rotas = express.Router()

rotas.route('/')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    
    .get((req, res) => {
        res.end('enviando todos os produtos!')
    })
    
    .post((req, res) => {
        const { titulo, description } = req.body
        res.end(`adicionando um produto: ${titulo}, ${description}`)
    })
    
    .put((req, res) => {
        res.status(405)
        res.append('Allow', ['GET', 'POST', 'DELETE'])
        res.end('operação PUT não é suportada em /produtos')
    })
    
    .delete((req, res) => {
        res.end('deletando todos os produtos!')
    })

rotas.route('/:produtoId')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })

    .get((req, res) => {
        const { produtoId } = req.params
        res.end(`informações do produto: ${produtoId}`)
    })

    .post((req, res) => {
        const { produtoId } = req.params
        res.status(405)
        res.append('Allow', ['GET', 'PUT', 'DELETE'])
        res.end(`operação POST não é suportada em /produtos/${produtoId}`)
    })

    .put((req, res) => {
        const { produtoId } = req.params
        const { titulo, description } = req.body
        res.write(`atualizando produto: ${produtoId}`)
        res.write(`novo título: ${titulo}`)
        res.end(`nova descrição: ${description}`)
    })

    .delete((req, res) => {
        const { produtoId } = req.params
        res.end(`deletando produto: ${produtoId}`)
    })

module.exports = rotas