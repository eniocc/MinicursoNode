const mongoose = require('mongoose')
const Schema = mongoose.Schema

var tagSchema = new Schema({ name: String });

const promocaoSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [tagSchema],
        default: undefined
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },        
}, {
    timestamps: true
})

const Promocao = mongoose.model('Promocao', promocaoSchema)
module.exports = Promocao