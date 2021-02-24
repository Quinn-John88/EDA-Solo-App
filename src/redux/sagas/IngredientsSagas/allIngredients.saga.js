import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* allIngredientsSaga() {
    try {
        const allIngredients = yield axios.get('/api/ingredients');
        yield put ({type: 'SET_ALL_INGREDIENTS' , payload: allIngredients.data});
    } catch {
        console.log('get ingredients error');
    }
}

function* ingredientSelectSaga() {
    yield takeEvery('FETCH_ALL_INGREDIENTS', allIngredientsSaga)
}
export default ingredientSelectSaga;