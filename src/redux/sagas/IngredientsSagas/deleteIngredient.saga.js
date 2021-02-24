import { takeEvery, put } from "redux-saga/effects";
import axios from 'axios'

function* deleteIngredient(action) {
    try {
        yield axios.delete(`/api/userIngredients/${action.payload}`);
        yield put({ type: 'FETCH_INGREDIENTS' })
    } catch (error) {
        console.log('error deleting ingredient!', error);
    }
}

function* deleteIngredientSaga() {
    yield takeEvery('DELETE_INGREDIENT', deleteIngredient)
}
export default deleteIngredientSaga;