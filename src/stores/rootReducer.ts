import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import testReducer from "./testReducer/testReducer";

const reducer = combineReducers({
  testReducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
