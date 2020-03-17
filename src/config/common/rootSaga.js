// import Packages
import { all } from 'redux-saga/effects';
// import internals
import * as page404Sagas from '../page-404/redux/sagas';
import * as allContentSagas from '../redux/sagas';

const featureSagas = [page404Sagas, allContentSagas];

const sagas = featureSagas
  .reduce((prev, curr) => [...prev, ...Object.keys(curr).map(k => curr[k])], [])
  // a saga should be function, below filter avoids error if redux/sagas.js is empty;
  .filter(s => typeof s === 'function');

function* rootSaga() {
  yield all(sagas.map(saga => saga()));
}

export default rootSaga;
