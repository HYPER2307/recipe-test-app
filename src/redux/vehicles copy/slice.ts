import { createSlice } from "@reduxjs/toolkit";
import { IVehicleResponse } from "@/@types/vehicle";
import { VEHICLE_SLICE_NAME } from "./actions";
import { getVehicleReducer } from "./reducers";

export interface IVehicleState {
  isLoading: boolean;
  vehicleData: IVehicleResponse | null;
}

const initialState: IVehicleState = {
  isLoading: false,
  vehicleData: null,
};

export const { reducer: vehicle } = createSlice({
  name: VEHICLE_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getVehicleReducer(builder);
  },
});
