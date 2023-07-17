const express = require('express')
const mysql = require('mysql2')
const axios = require('axios')
// const connection = require('./db')
const app = express()
const port = 5000
const apiKey = require('./dev.js').apiKey;

const api = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${apiKey}&movieNm=아이&movieNm=언맨`

app.use(express.json())

// connection.connect((err) => {
//   if(err) console.log(err)
//   else console.log('connected!')
// });


// const uri = require('./dev.js')

// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// mongoose.set("strictQuery", false);
// mongoose.connect(uri.mognoURI)
//   .then(() => console.log('Connected!'))
//   .catch(err => console.log(err))

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());


// const api = require('./routes/api');
// app.use('/api', api);

app.get('/api/getHi', async (req, res) => {
  const urlData = await axios.get(api);
  console.log(urlData.data.movieListResult.movieList);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


