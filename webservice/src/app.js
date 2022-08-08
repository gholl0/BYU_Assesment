const env = require('./env')
const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.use(function(req, res, next) {
    if (req.headers['content-type'] === 'application/json;') {
      req.headers['content-type'] = 'application/json';
    }
    next();
});

app.get('/movies',  async (req, res, next) => {
    try {
        const query = req.query.title;
        const data = await fetchMovies(query);
        return res.status(200).json({
          status:200,
          message: `${data.length} movies found`, 
          data
        })
      } catch (err) {
        return next(err);
      }
});

const fetchMovies = async (query) => {
    try {
        let result;
        await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${env.apiKey}&language=en-US&query=${query}`
        ).then(response => {
            let resultCount = 0

            if (response.data.results.length >= 10) {
                resultCount = 10
            } else {
                resultCount = resposne.data.results.length
            }

            result = response.data.results.slice(0,resultCount);
        })
        .catch((error) => {
            colsole.log(error);
        });
        return result
    } catch (error) {
        console.error(error)
    }
};


app.listen(process.env.PORT || 8081)