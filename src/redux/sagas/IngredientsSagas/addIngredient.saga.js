import { takeEvery, put } from "redux-saga/effects";
import axios from 'axios'

function* addIngredient(action) {
    try {
        yield axios.post('/api/userIngredients', action.payload);
        yield put({ type: 'FETCH_INGREDIENTS' })
    } catch (error) {
        console.log('error adding new ingredient!', error);
    }
}

function* addIngredientSaga() {
    yield takeEvery('ADD_INGREDIENT', addIngredient)
}
export default addIngredientSaga;