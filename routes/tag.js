const { Router, query } = require('express');
const connection = require('../db');

const router = Router();

router.get('/getTag', async(req, res) => {
  console.log('getTag');
  const selectQuery = "SELECT * FROM TAG"
  connection.query(selectQuery, (error, results, fields) => {
    if(error) console.log(error);
    else console.log(results);
  })
})

module.exports = router;