const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id)
    const query = `
    INSERT INTO "favorites" ("user_id", "recipe_id")
    VALUES ($1,$2);
    `
    pool.query(query,[req.user.id, req.params.id]).then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
        console.log(err);
    })
})

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `
        SELECT "recipes"."title","recipes"."poster","recipes"."cooking_directions","recipes"."ingredients_list" FROM "favorites"
        JOIN "recipes" ON "recipes"."id"="favorites"."recipe_id"
        JOIN "user" ON "user"."id"="favorites"."user_id"
        WHERE "user_id"=$1;`
    pool.query(query, [req.user.id]).then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
    })
});

module.exports = router;