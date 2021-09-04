const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

//iniciamos con express

const app = express()
const port = 8011

//contectamos mongoose

const mongoUrl = 'mongodb+srv://dbJuanjose:RDXuNopugdJiMUGW@cluster0.lpsft.mongodb.net/JokeDataBase?retryWrites=true&w=majority'

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


// si se conecta y arroja un error
mongoose.connection.on('error', (err) => {
    console.log('error en la base de datos', err)
})

//cuando la coneccion es exitosa
mongoose.connection.on('connected', (err, res) => {
    console.log('coneccion exitosa')
})

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

//final
app.listen(port, () => console.log(`Estamos en el puerto: ${port}`))
