const mongoose = require('mongoose')

const Schema = mongoose.Schema

var tagSchema = new Schema({ name: String });

const comboSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },    
    tags: {
        type: [tagSchema],
        default: undefined
    },
    pizzas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pizza'
    },    
    discount: {
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

const Combo = mongoose.model('Combo', comboSchema)
module.exports = Combo