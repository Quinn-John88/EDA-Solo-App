import { takeEvery, put } from "redux-saga/effects";
import axios from 'axios'

function* fetchCategory(action) {
    try {
        const categories = yield axios.get(`/api/categories/`);
        yield put({ type: 'SET_CATEGORIES', payload: categories.data })
    } catch (error) {
        console.log('error getting categories!',error);
    }
}
function* categorySaga() {
    yield takeEvery('FETCH_CATEGORIES',fetchCategory)
}
export default categorySaga;