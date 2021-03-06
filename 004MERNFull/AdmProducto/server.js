const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000

const productRoutes = require("./server/routes/product.routes");


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api', productRoutes)

require('./server/config/mongoose.config');


app.listen(port, () => { console.log(`Listening on port ${port}`) });