const express = require('express')
const rotas = express.Router()

rotas.route('/')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })
    
    .get((req, res) => {
        res.end('enviando todas as promoções!')
    })
    
    .post((req, res) => {
        const { titulo, description } = req.body
        res.end(`adicionando uma promoção: ${titulo}, ${description}`)
    })
    
    .put((req, res) => {
        res.status(405)
        res.append('Allow', ['GET', 'POST', 'DELETE'])
        res.end('operação PUT não é suportada em /promoções')
    })
    
    .delete((req, res) => {
        res.end('deletando todas as promoções!')
    })

rotas.route('/:promocaoId')
    .all((req, res, next) => {
        res.status(200)
        res.append('Content-Type', 'text/plain')
        next()
    })

    .get((req, res) => {
        const { promocaoId } = req.params
        res.end(`informações da promoção: ${promocaoId}`)
    })

    .post((req, res) => {
        const { promocaoId } = req.params
        res.status(405)
        res.append('Allow', ['GET', 'PUT', 'DELETE'])
        res.end(`operação POST não é suportada em /promocoes/${promocaoId}`)
    })

    .put((req, res) => {
        const { promocaoId } = req.params
        const { titulo, description } = req.body
        res.write(`atualizando promoção: ${promocaoId}`)
        res.write(`novo título: ${titulo}`)
        res.end(`nova descrição: ${description}`)
    })

    .delete((req, res) => {
        const { promocaoId } = req.params
        res.end(`deletando promoção: ${promocaoId}`)
    })

module.exports = rotas