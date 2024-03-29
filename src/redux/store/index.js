import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
