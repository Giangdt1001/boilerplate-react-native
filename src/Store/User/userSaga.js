import { call, put, select } from 'redux-saga/effects';
import { FetchOneUserService } from '@/Services/User/index'


function* postLoginAction(userId) {
    try {
        let response = yield FetchOneUserService(userId);
        console.log("response", response);
        // yield call(saveTokenToStore, response);
        // console.log('responseresponse ------------->', response);
        yield put({ type: 'LOGIN_SUCCESS', payload: response });
    } catch (err) {
        console.log('err  ------------->', err);
        yield put({ type: 'LOGIN_FAILURE', err });
    }
}

export function* getUser(action) {
    console.log('Login Saga - Action', action);
    yield call(postLoginAction, action.payload.userId);
}