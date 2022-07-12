const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/movies', (req, res) => {
    res.send({
        message: `Searching for ${req.body.title}...`
    })
});

app.listen(process.env.PORT || 8081)