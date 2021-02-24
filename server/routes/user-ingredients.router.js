const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `
    SELECT "ingredients"."id","ingredients"."name","ingredient_user"."count" FROM "ingredient_user"
    JOIN "ingredients" ON "ingredient_user"."ingredient_id"="ingredients"."id"
    WHERE "user_id"=$1;`
  pool.query(query, [req.user.id]).then(result => {
    const userIngredients = result.rows
    const catergoryName = `
      SELECT "categories"."name" FROM "categories"
      JOIN "ingredients" ON "ingredients"."category_id"="categories"."id"
      JOIN "ingredient_user" ON "ingredient_user"."ingredient_id"="ingredients"."id";
      `
    pool.query(catergoryName).then(result => {
      res.status(200).send(userIngredients);
    })
  }).catch(err => {
    res.sendStatus(500)
  })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const query = `
  DELETE FROM "ingredient_user"
  WHERE "ingredient_id"=$1
  `
  pool.query(query, [req.params.id]).then(result => {
    res.status(200).send(result.rows)
  }).catch(err => {
    res.sendStatus(500)
  })
});

router.put('/:id', rejectUnauthenticated, (req,res) => {
  const query = `
  UPDATE "ingredient_user" 
  SET "count" = $1
  WHERE "ingredient_user"."ingredient_id"=$2 AND "ingredient_user"."user_id"=$3; 
  `
  pool.query(query, [req.body.count, req.params.id , req.body.user_id ]).then( result => {
    res.status(200).send(result.rows)
    console.log('in server');
  }).catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  const query = `
  INSERT INTO "ingredient_user" ("ingredient_id","user_id","count")
  VALUES ($1,$2,$3);
  `
  pool.query(query, [req.body.ingredient_id, req.user.id, req.body.count]).then(result => {
    res.send(result.rows);
  }).catch(err => {
    res.sendStatus(500);
  })
});

module.exports = router;