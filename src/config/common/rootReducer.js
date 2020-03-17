// import Packages
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
// import internals
import page404Reducer from '../page-404/redux/reducer';
import allContentReducer from '../redux/reducer';

const reducerMap = {
  // router: routerReducer,
  page404: page404Reducer,
  allContent: allContentReducer
};

export default combineReducers(reducerMap);
