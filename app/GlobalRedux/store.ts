import { configureStore, combineReducers } from "@reduxjs/toolkit";
import conterReducer from "./Features/counter/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const rootReducer = combineReducers({ conterReducer });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
