import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
// Redux Starts here
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import i18n from "./i18n/index";
import { I18nextProvider } from "react-i18next";

// Creating Redux Store
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
