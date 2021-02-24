import { all } from 'redux-saga/effects';
import loginSaga from './AuthentSagas/login.saga';
import registrationSaga from './AuthentSagas/registration.saga';
import userSaga from './AuthentSagas/user.saga';
import ingredientSaga from './IngredientsSagas/userIngredients.saga'
import RecipeSaga from './RecipesSagas/recipes.saga'
import ingredientSelectSaga from './IngredientsSagas/allIngredients.saga'
import addIngredientSaga from './IngredientsSagas/addIngredient.saga';
import deleteIngredientSaga from './IngredientsSagas/deleteIngredient.saga'
import categorySaga from './IngredientsSagas/ingredient-categories.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    ingredientSaga(),
    RecipeSaga(),
    ingredientSelectSaga(),
    addIngredientSaga(),
    deleteIngredientSaga(),
    categorySaga(),
  ]);
}
