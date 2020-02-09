const express = require('express')
const Combo = require('../models/combo')

const comboRouter = express.Router()


comboRouter.route('/')
    .all((req, res, next) => {
        res.status(200).append('Content-Type', 'application/json')
        next()
    })
    .get((req, res, next) => {
        Combo.find({}).exec()
            .then((combos) => {
                res.json(combos)
            })
            .catch(next)
    })
    .post((req, res, next) => {
        Combo.create(req.body)
            .then((Combo) => {
                res.json(Combo)
            })
            .catch(next)
    })
    .put((req, res) => {
        res.status(405).json({ error: 'operação PUT não suportada em /combos' })
    })
    .delete((req, res, next) => {
        Combo.remove({}).exec()
            .then((combos) => {
                res.json(combos)
            })
            .catch(next)
    })
comboRouter.route('/:comboId')
    .get((req, res, next) => {
        Combo.findById(req.params.comboId).exec()
            .then((Combo) => {
                res.json(Combo)
            })
            .catch(next)
    })
    .post((req, res) => {
        res.status(405).json({ error: 'operação POST não suportada' + req.originalUrl })
    })
    .put((req, res, next) => {
        Combo.findByIdAndUpdate(req.params.comboId,
            { $set: req.body }, { new: true }).exec()
            .then((Combo) => {
                res.json(Combo)
            })
            .catch(next)
    })
    .delete((req, res, next) => {
        Combo.findByIdAndRemove(req.params.comboId).exec()
            .then((Combo) => {
                res.json(Combo)
            })
            .catch(next)
    })

module.exports = comboRouter