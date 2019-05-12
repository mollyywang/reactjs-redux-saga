import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducers from "./reducers";
import rootSagas from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];
const reducers = combineReducers({
  router: connectRouter(history),
  ...rootReducers
});

const enhancers = [];
if (process.env.NODE_ENV === "development") {
  const devToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(); // for debugging
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension);
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSagas);
  return { store, persistor };
}
