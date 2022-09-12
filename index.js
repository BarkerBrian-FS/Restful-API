const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
const productRouter = require('./routes/Products')
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", {name: 'World!', users: [
        {name: 'Brian Barker', email: 'bmbarker@fullsail.com'},
        {name: 'Rick Grimes', email: 'rgrimes@fullsail.com'},
        {name: 'Bobby Joe', email: 'bobbyj@fullsail.com'}
    ]})
})

app.use("/products", productRouter)

app.listen(3000)

