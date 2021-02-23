import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* ingredientListSaga() {
    try {
        const ingredients = yield axios.get('/api/userIngredients');
        console.log(ingredients.data)
        yield put ({type: 'SET_INGREDIENTS' , payload: ingredients.data});
    } catch {
        console.log('get ingredients error');
    }
}

function* ingredientSaga() {
    yield takeEvery('FETCH_INGREDIENTS', ingredientListSaga)
}
export default ingredientSaga;