const Mongoose = require('mongoose')

const jokeShema = new Mongoose.Schema(
    {
        setup: {
            type: String,
            minlength: [10, 'Tiene que tener al menos 10 caracteres']
        },
        punchiline: {
            type: String,
            minlength: [3, 'Tiene que tener al menos 3 caracteres']
        }
    }, { timestamps: true }
)

module.exports = Mongoose.model('jokeShemaDB', jokeShema)

