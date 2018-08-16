// Libraries
import React from 'react';
import { Provider } from 'react-redux';

// Import Routes and store
import store from './store';
import Wrapper from 'components/wrapper';

// Render everything
export default () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
);

// Puts your console on blast when React is making unnecessary updates.
if (process.env.NODE_ENV === 'development') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
