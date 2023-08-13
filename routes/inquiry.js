const { Router, query } = require('express');
const connection = require('../db');

const router = Router();

router.post('/getList', (req, res) => {
  const limitNum = (req.body.page-1)*10;
  // console.log(req.body.currPage);
  const selectQuery = `SELECT * FROM inquiry ORDER BY createdDate DESC LIMIT ${limitNum},10`;
  connection.query(selectQuery, (error, results, fields) => {
    if(error) console.log(error);
    else res.send(results);
  })
})

router.get('/getLength', (req, res) => {
  const selectQuery = 'SELECT COUNT(*) AS length FROM inquiry';
  connection.query(selectQuery, (error, results, fields) => {
    if(error) console.log(error);
    else res.send(results);
  })
})

module.exports = router;