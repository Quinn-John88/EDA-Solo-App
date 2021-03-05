const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `
    SELECT * FROM "recipes"
    WHERE "recipes"."id" IN (SELECT DISTINCT "recipe_ingredients"."recipe_id" FROM "ingredient_user"
    RIGHT JOIN "recipe_ingredients" ON "ingredient_user"."ingredient_id"="recipe_ingredients"."ingredient_id"
    WHERE "ingredient_user"."user_id"=$1 AND "recipe_ingredients"."recipe_id"
    NOT IN (SELECT DISTINCT "recipe_ingredients"."recipe_id" FROM "ingredient_user"
    RIGHT JOIN "recipe_ingredients" ON "ingredient_user"."ingredient_id"="recipe_ingredients"."ingredient_id"
    WHERE "ingredient_user"."ingredient_id" IS NULL));`
    pool.query(query, [req.user.id]).then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id)
    const query1 = `
    INSERT INTO "recipes" ("title","description","ingredient_list","cooking_directions","poster")
    VALUES ($1,$2,$3,$4,$5);
    `
    const query2 = `
    INSERT INTO "ingredients" ("name","category_id")
    VALUSE ($1,$2)
    `
    const query3 = `
    INSERT INTO "recipe_ingrediens" ("recipe_id","ingredient_id")
    VALUES ($1,$2)
    `
    pool.query(query, [req.body.title, req.body.description, req.body.ingredient_list, req.body.cooking_directions, req.body.poster])
        .then(result => {
            res.send(result.rows)
        }).catch(err => {
            res.sendStatus(500)
            console.log(err);
        })
})

module.exports = router;