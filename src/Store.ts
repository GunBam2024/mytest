// createStore로 rootReducer과 applyMiddleware(thunk)를 만들어준다.

import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
