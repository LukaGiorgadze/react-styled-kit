// Libraries
import { combineReducers } from 'redux';

// Import Reducers
import { routerReducer } from 'react-router-redux';
import user from 'reducers/user';

// Combine All Reducers
export default combineReducers({
  user,
  router: routerReducer,
});
