// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// // Components
import Wrapper from 'components/index';

// Routes
export const Routes = () => (
  <BrowserRouter>
    <div>
      <Wrapper />
    </div>
  </BrowserRouter>
);
