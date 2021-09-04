const jokeService = require('../services/services.joke')

module.exports = {
    getAllJokes: async (req, res) => {
        const joke = await jokeService.getAllJokes()
        res.send({ joke })
    },

    getOneJoke: async ({ params: { _id } }, res) => {
        const joke = await jokeService.getOneJoke(_id)
        res.send({ joke })
    },

    getRandomJoke: async (req, res) => {
        const joke = await jokeService.getRandomJoke()
        res.send({ joke })
    },

    createNewJoke: async ({ body }, res) => {
        try {
            const joke = await jokeService.createNewJoke(body)
            res.send({ joke })
        } catch (error) {
            res.status(400).json(error)
        }
    },

    updateOneJoke: async ({ params: { _id }, body }, res) => {
        try {
            const joke = await jokeService.updateOneJoke(_id, body)
            res.send({ joke })
        } catch (error) {
            res.status(400).json(error)
        }
    },

    deleteOneJoke: async ({ params: { _id }, body }, res) => {
        const { deleteCount } = await jokeService.deleteOneJoke(_id)
        if (deleteCount > 0) return res.status(204).send('Joke delete')
        return res.status(404).send('Joke not found')
    }

}