// Libraries
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// Import reducers and sagas
import allReducers from "./reducers";
import mySaga from "./sagas/index";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store and mount everything in it
let composers = [applyMiddleware(sagaMiddleware)];

// TODO: Remove on production
// Create Redux dev tools for chrome
if (process.env.NODE_ENV === "development") {
  const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  reduxDevTools && composers.push(reduxDevTools);
}

let store = createStore(allReducers, compose(applyMiddleware(sagaMiddleware)));

// Export store
export default store;

// Then run the saga
sagaMiddleware.run(mySaga);
