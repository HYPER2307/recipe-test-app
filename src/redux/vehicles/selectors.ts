import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectVehiclesState = (state: RootState) => state.vehicles;

export const selectIsLoading = createSelector(
  selectVehiclesState,
  (vehiclesState) => vehiclesState.isLoading
);

export const selectVehiclesData = createSelector(
  selectVehiclesState,
  (vehiclesState) => vehiclesState.vehiclesData
);
