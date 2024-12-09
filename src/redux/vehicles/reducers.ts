import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getVehiclesAsync } from "./actions";
import { IVehiclesState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<IVehiclesState>) => void;

export const getVehiclesReducer: Reducer = (builder) => {
  builder.addCase(getVehiclesAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.vehiclesData = action.payload;
  });

  builder.addCase(getVehiclesAsync.rejected, (state) => {
    state.isLoading = false;
    state.vehiclesData = null;
  });

  builder.addCase(getVehiclesAsync.pending, (state) => {
    state.isLoading = true;
  });
};
