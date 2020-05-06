import React from "react";
import { store, persistor } from "store/app.store";
import { App } from "containers/app";
import { render } from "react-dom";
import "assets/styles/base.less";

render(
  <App store={store} storePersistor={persistor} />,
  document.getElementById("root")
);
