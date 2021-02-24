import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* ingredientListSaga() {
    try {
        const ingredients = yield axios.get('/api/userIngredients');
        yield put ({type: 'SET_INGREDIENTS' , payload: ingredients.data});
    } catch {
        console.log('get ingredients error');
    }
}

function* updateIngredientSaga(action) {
    try {
        const update = yield axios.put(`/api/userIngredients/${action.payload.id}`, action.payload)
        yield put ({ type: 'FETCH_INGREDIENTS', payload:update.data})
    } catch(error) {
        console.log('error updating ingredient!', error);
    }
}

function* ingredientSaga() {
    yield takeEvery('FETCH_INGREDIENTS', ingredientListSaga)
    yield takeEvery('UPDATE_INGREDIENT', updateIngredientSaga)
}
export default ingredientSaga;