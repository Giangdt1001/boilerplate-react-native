import { fork, all, takeLatest } from 'redux-saga/effects';
import { getUser } from '@/Store/User/userSaga'
const sagas = function* () {
    yield all([takeLatest('fetchOne', getUser)]);
};
export default sagas;
