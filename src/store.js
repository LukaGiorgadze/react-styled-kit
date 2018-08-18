// Libraries
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Import reducers and sagas
import allReducers from './reducers';
import rootSaga from './sagas/index';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const _routerMiddleware = routerMiddleware(createHistory());

// Middlewares
const middlewares = [sagaMiddleware, _routerMiddleware];

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
  /* eslint-disable no-underscore-dangle */
  composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          actionsBlacklist: ['REDUX_STORAGE_SAVE'],
        })
      : compose;
  /* eslint-enable */
}

// Create store
let store = createStore(allReducers, composeEnhancers(applyMiddleware(...middlewares)));

// Export store
export default store;

// Then run the saga
sagaMiddleware.run(rootSaga);
