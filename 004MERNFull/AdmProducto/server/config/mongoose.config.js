// const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://dbJuanjose:RDXuNopugdJiMUGW@cluster0.lpsft.mongodb.net/ProductDB?retryWrites=true&w=majority'


// Conectar a la base de datos
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// Refleja el error de conexion base de datos
mongoose.connection.on('error', (err) => {
    console.log('err on db connection', err)
})
// Despega mensaje conexion exitosa
mongoose.connection.on('connected', (err, res) => {
    console.log('mongoose is connected')
})