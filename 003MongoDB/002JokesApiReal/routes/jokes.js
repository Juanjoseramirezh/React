const { Router } = require('express')

const jokeController = require('../controllers/jokes.controllers')

const router = Router()

router.get('/', jokeController)
router.get('/:_id', jokeController)
router.get('/random', jokeController)
router.get('/new', jokeController)
router.get('/update/:_id', jokeController)
router.get('/delete/:_id', jokeController)

module.exports = router