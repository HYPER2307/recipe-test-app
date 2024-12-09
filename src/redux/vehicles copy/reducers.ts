import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getVehicleAsync } from "./actions";
import { IVehicleState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<IVehicleState>) => void;

export const getVehicleReducer: Reducer = (builder) => {
  builder.addCase(getVehicleAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.vehicleData = action.payload;
  });

  builder.addCase(getVehicleAsync.rejected, (state) => {
    state.isLoading = false;
    state.vehicleData = null;
  });

  builder.addCase(getVehicleAsync.pending, (state) => {
    state.isLoading = true;
  });
};
