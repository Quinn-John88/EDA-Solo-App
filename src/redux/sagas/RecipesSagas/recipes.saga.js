import axios from 'axios'
import { takeEvery , put } from 'redux-saga/effects';
function* recipeListSaga() {
    try {
        const recipes = yield axios.get('/api/recipes');
        console.log(recipes.data)
        yield put ({type: 'SET_RECIPES' , payload:recipes.data});
    } catch {
        console.log('get recipes error');
    }
}

function* RecipeSaga() {
    yield takeEvery('FETCH_RECIPES',recipeListSaga)
}
export default RecipeSaga;