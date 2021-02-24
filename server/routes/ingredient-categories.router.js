const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // GET route code here
  query = `
  SELECT * FROM "categories";
  `
  pool.query(query).then(result => {
    res.send(result.rows)
  }).catch(err => {
    res.sendStatus(500)
  })
});

module.exports = router;