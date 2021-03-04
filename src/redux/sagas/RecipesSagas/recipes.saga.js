import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';
function* recipeListSaga() {
    try {
        const recipes = yield axios.get('/api/recipes');
        console.log(recipes.data)
        yield put({ type: 'SET_RECIPES', payload: recipes.data });
    } catch {
        console.log('get recipes error');
    }
}

function* GetFavoriteRecipes() {
    try {
        const favorite = yield axios.get('/api/favorites');
        yield put({ type: 'SET_FAVORITES', payload: favorite.data })
    } catch (err) {
        console.log('get favorites error', err)
    }
}

function* addFavorite(action) {
    try {
        console.log(action.payload)
        yield axios.post(`/api/favorites/${action.payload}`);
        yield put({ type: 'FETCH_FAVORITES' })
    } catch (error) {
        console.log('error adding new favorite!', error);
    }
}

function* deleteFav(action) {
    try {
        console.log(action.payload)
        yield axios.delete(`/api/favorites/${action.payload}`)
        yield put({ type: 'FETCH_FAVORITES' })
    } catch (error) {
        console.log(error, 'error deleteing fav')
    }
}

function* RecipeSaga() {
    yield takeEvery('FETCH_RECIPES', recipeListSaga)
    yield takeEvery('FETCH_FAVORITES', GetFavoriteRecipes)
    yield takeEvery('ADD_FAVORITE', addFavorite)
    yield takeEvery('DELETE_FAVORITE', deleteFav)
}

export default RecipeSaga;