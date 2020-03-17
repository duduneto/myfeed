// import Packages
// import { MemoryRouter } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
// import { routerMiddleware } from 'react-router-redux';
// import internals
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const persistConfig = {
  storage,
  key: 'root',
  // whitelist: ['allContent']
  transforms: [createWhitelistFilter('allContent', ['rdAuthUser', 'rdContent', 'Cp01', 'rdListClients', 'Sc07_oportunities', 'Sc05b_activities', 'Sc10_opportunities'])]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

// const router = routerMiddleware(MemoryRouter);
// const router = routerMiddleware(history);

// NOTE: Do not change middleares delaration pattern since rekit plugins may register middlewares to it.
// const middlewares = [router, sagaMiddleware];
const middlewares = [sagaMiddleware];

let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__();
  }
}

export default function configStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      devToolsExtension
    )
  );

  /* istanbul ignore if  */
  if (module.hot) {
    // Enable Webpack or React-Native hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);

  return { store, persistor };
}
