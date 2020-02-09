const mongoose = require('mongoose')
const passport = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
})

userSchema.plugin(passport)

module.exports = mongoose.model('User', userSchema)