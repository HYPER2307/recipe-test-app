import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectVehicleState = (state: RootState) => state.vehicle;

export const selectIsLoading = createSelector(
  selectVehicleState,
  (vehiclesState) => vehiclesState.isLoading
);

export const selectVehicleData = createSelector(
  selectVehicleState,
  (vehiclesState) => vehiclesState.vehicleData
);
