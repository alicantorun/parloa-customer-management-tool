import React from "react";
import "assets/styles/base.less";
import { render } from "react-dom";
import { store, persistor } from "store/app.store";
import { App } from "containers/app";

render(
  <App store={store} storePersistor={persistor} />,
  document.getElementById("root")
);
