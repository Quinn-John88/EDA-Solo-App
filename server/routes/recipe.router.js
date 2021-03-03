const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const query=`
    SELECT * FROM "recipes"
    WHERE "recipes"."id" IN (SELECT DISTINCT "recipe_ingredients"."recipe_id" FROM "ingredient_user"
    RIGHT JOIN "recipe_ingredients" ON "ingredient_user"."ingredient_id"="recipe_ingredients"."ingredient_id"
    WHERE "ingredient_user"."user_id"=$1 AND "recipe_ingredients"."recipe_id"
    NOT IN (SELECT DISTINCT "recipe_ingredients"."recipe_id" FROM "ingredient_user"
    RIGHT JOIN "recipe_ingredients" ON "ingredient_user"."ingredient_id"="recipe_ingredients"."ingredient_id"
    WHERE "ingredient_user"."ingredient_id" IS NULL));`
    pool.query(query,[req.user.id]).then(result => {
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