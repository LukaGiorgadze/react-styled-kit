// Libraries
import React from "react";
import { Provider } from "react-redux";
import whyDidYouUpdate from "why-did-you-update";

// Components
import store from "./store";
import LogIn from "components/login/index";

// Render everything
export default () => (
  <Provider store={store}>
    <LogIn />
  </Provider>
);

// Puts your console on blast when React is making unnecessary updates.
if (process.env.NODE_ENV === "development") {
  whyDidYouUpdate(React);
}
