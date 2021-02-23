const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `SELECT * FROM "ingredients"`
    pool.query(query).then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
    })
    // GET route code here
  });

  module.exports = router;