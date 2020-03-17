import { takeEvery, call, put } from 'redux-saga/effects';
import {
  ASYNC_BEGIN,
  ASYNC_SUCCESS,
  ASYNC_FAILURE,
  ASYNC_DISMISS_ERROR
} from './constants';

// Make test work?
// export const FirebaseCall = doasyncCall();

export function asyncCall(info) {
  // console.log('data', data);

  return {
    type: ASYNC_BEGIN,
    info,
    reducerType: info.reducerType ? info.reducerType : false,
    reducerName: info.reducerName,
    callName: info.callName
  };
}

export function dismissAsyncCallError() {
  return {
    type: ASYNC_DISMISS_ERROR
  };
}

export function* doAsyncCall(infoCall) {

  let res;
  let firebaseCall = require('../fbCall');
  let fbCallName = infoCall.info.callName;
  let fbCall = firebaseCall[fbCallName];
  let par = infoCall.info.par;

  try {
    res = yield call(fbCall, par);
  } catch (err) {
    yield put({
      type: ASYNC_FAILURE,
      data: { error: err }
    });

    return;
  }

  yield put({
    type: ASYNC_SUCCESS,
    data: res,
    reducerName: infoCall.info.reducerName,
    reducerType: infoCall.info.reducerType,
    callName: fbCallName
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchAsyncCall() {
  yield takeEvery(ASYNC_BEGIN, doAsyncCall);
}

// Redux reducer
export function reducer(state, action) {
  let name = action.reducerName;
  let data = action.data;
  let asyncCallPending = action.callName + 'Pending';
  let asyncCallError = action.callName + 'Error';

  switch (action.type) {
    case ASYNC_BEGIN:
      return {
        ...state,
        [asyncCallPending]: true,
        [asyncCallError]: null
      };

    case ASYNC_SUCCESS:
      if (action.reducerType) {
        if (action.reducerType === 'Array') {
          if (state[name]) {
            return {
              ...state,
              [name]: [...state[name], data],
              [asyncCallPending]: false,
              [asyncCallError]: null
            };
          } else {
            return {
              ...state,

              [name]: [data],
              [asyncCallPending]: false,
              [asyncCallError]: null
            };
          }

        }
      } else {
        return {
          ...state,

          [name]: new Object(data),

          [asyncCallPending]: false,
          [asyncCallError]: null
        };
      }

    case ASYNC_FAILURE:
      return {
        ...state,
        [asyncCallPending]: false,
        [asyncCallError]: action.data.error
      };

    case ASYNC_DISMISS_ERROR:
      return {
        ...state,
        [asyncCallError]: null
      };

    default:
      return state;
  }
}
