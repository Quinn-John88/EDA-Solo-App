import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import ingredients from './ingredients.reducer'
import recipes from './recipes.reducer'
import details from './recipe-details.reducer'
import allIngredients from './all-ingredients'
import categories from './categories.reducer'
import favoriteRecipes from './favorite-recipes.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  ingredients,
  recipes,
  details,
  allIngredients,
  categories,
  favoriteRecipes,
});

export default rootReducer;
