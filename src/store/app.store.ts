import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { customerReducer } from "store/customer/reducers";
import { filterReducer } from "store/filter/reducers";

const reduxPersistConfig: PersistConfig<any> = {
  blacklist: ["customer", "filter"],
  stateReconciler: autoMergeLevel2,
  key: "application",
  storage: storage,
};

const rootReducer = combineReducers({
  customer: customerReducer,
  filter: filterReducer,
});

const pReducer = persistReducer(reduxPersistConfig, rootReducer);

export const store: Store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
