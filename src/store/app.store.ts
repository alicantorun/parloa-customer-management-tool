import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";

import { customerReducer } from "store/customer/reducers";
import { filterReducer } from "store/filter/reducers";

const reduxPersistConfig: PersistConfig<any> = {
  key: "application",
  storage: storage,
  stateReconciler: autoMergeLevel2,
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
