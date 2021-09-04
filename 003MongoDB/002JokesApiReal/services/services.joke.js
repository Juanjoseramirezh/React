const { updateOneJoke } = require('../controllers/jokes.controllers')
const Joke = require('../models/jokes.models')

module.exports = {
    getAllJokes: () => Joke.find({}),

    getRandomJoke: async () => {
        const jokeAmount = await Joke.countDocuments()
        const random = Math.floor(Math.random() * (jokeAmount - 1))
        const joke = await Joke.findOne({}).skip(random)
        return joke
    },

    getOneJoke: (_id) => Joke.findById({ _id }),

    createNewJoke: (joke) => {
        const newJoke = new Joke()
        return newJoke
    },

    updateOneJoke: (_id, joke) => Joke.findByIdAndUpdate({ _id }, joke, { new: true, runValidators: true }),

    deleteOneJoke: (_id) => {
        return Joke.deleteOne({ _id })
    }
}