import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import "modern-normalize/modern-normalize.css";
/////////////////////////////////////////////////
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
