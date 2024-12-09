import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { vehicle } from "./vehicles copy/slice";
import { vehicles } from "./vehicles/slice";

export const store = configureStore({
  reducer: combineReducers({
    vehicles,
    vehicle,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
