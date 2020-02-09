const mongoose = require('mongoose')

const Pizza = require('./models/pizza')

const url = 'mongodb://localhost:27017/pizzaPlace'

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

//const connect = mongoose.connect(url)
const connect = mongoose.connect(url, { useNewUrlParser: true });

var pizzasRouter = require('./routes/rotasPizza');
var promosRouter = require('./routes/rotasPromo');
var combosRouter = require('./routes/rotasCombo');

connect.then((db) => {
    console.log('conectado ao mongodb')

    Pizza.create({
        name: 'Havaiana1',
        description: 'Teste'
    })
        .then((pizza) => {
            //console.log(pizza)
            return Pizza.findByIdAndUpdate(pizza._id, {
                $set: { description: 'Pizza com abacaxi' }
            }, {
                new: true
            }).exec()
        })
        .then((pizza) => {
            console.log(pizza)
            pizza.comments.push({
                rating: 5,
                comment: 'Ôh louco meu!',
                author: 'Fausto Silva'
            })
            return pizza.save()
        })
        .then((pizza) => {
            console.log(pizza)
            return Pizza.remove({})
        })
        .then(() => {
            return mongoose.connection.close()
        })
        .catch(console.log)
})