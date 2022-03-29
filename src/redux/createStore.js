// Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Packages
import appReducers from './rootReducers';
import rootSagas from './rootSagas';

// Environment
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Apply Middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const rootReducer = (state, action) => {
  let newState = { ...state };
  if (action.type === 'LOGOUT') {
    newState = undefined;
  }
  return appReducers(newState, action);
};

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // Run Saga
  sagaMiddleware.run(rootSagas);
  return store;
};
