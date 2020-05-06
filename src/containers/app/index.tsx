import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";
import { Persistor } from "redux-persist";
import { Provider } from "react-redux";
import { Routes } from "routes";
import { Store } from "redux";

interface AppProps {
  store: Store;
  storePersistor: Persistor;
}

export const App: React.FC<AppProps> = ({ store, storePersistor }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={storePersistor}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};
