import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contextReducer } from "./context";
const reducer = combineReducers({
  context: contextReducer,
});

export default configureStore({
  reducer: reducer,
});
