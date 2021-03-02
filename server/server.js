const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const userIngredientsRouter = require('./routes/user-ingredients.router')
const recipesRouter = require('./routes/recipe.router')
const allIngredients = require('./routes/all-ingredients.router')
const ingredientCategories = require('./routes/ingredient-categories.router')
const favoriteRecipes = require('./routes/favorite-recipes.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/userIngredients', userIngredientsRouter);
app.use('/api/recipes',recipesRouter);
app.use('/api/ingredients', allIngredients)
app.use('/api/categories', ingredientCategories);
app.use('/api/favorites',favoriteRecipes)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
