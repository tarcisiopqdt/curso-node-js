const express = require('express')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const app = express();



app.use(bodyParser.urlencoded({extended: true}))

app.use(expressValidator())
app.use(express.static('./src/public'))

app.set('view engine', 'ejs')
app.set('views', './src/views/')



module.exports = app