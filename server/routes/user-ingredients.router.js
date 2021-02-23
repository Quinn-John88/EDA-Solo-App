const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const query=`
    SELECT "ingredients"."id","ingredients"."name","ingredients"."category_id" FROM "ingredient_user"
    JOIN "ingredients" ON "ingredient_user"."ingredient_id"="ingredients"."id"
    WHERE "user_id"=$1;`
    pool.query(query, [req.user.id]).then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
