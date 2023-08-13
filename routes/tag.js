const { Router, query } = require('express');
const connection = require('../db');

const router = Router();

router.get('/getTag', (req, res) => {
  const selectQuery = "SELECT id, tagName FROM TAG"
  connection.query(selectQuery, (error, results, fields) => {
    if(error) console.log(error);
    else res.send(results);
  })
})

router.get('getLength', (req, res) => {
  const counteQuery = 'SELECT COUNT(*) FROM NOTICE'
  connection.query(counteQuery, (error, results, fields) => {
    if(error) console.log(error);
    else res.send(results);
  })
})

module.exports = router;