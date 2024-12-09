import { createSlice } from "@reduxjs/toolkit";
import { IVehiclesResponse } from "@/@types/vehicle";
import { VEHICLES_SLICE_NAME } from "./actions";
import { getVehiclesReducer } from "./reducers";

export interface IVehiclesState {
  isLoading: boolean;
  vehiclesData: IVehiclesResponse | null;
}

const initialState: IVehiclesState = {
  isLoading: false,
  vehiclesData: null,
};

export const { reducer: vehicles } = createSlice({
  name: VEHICLES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getVehiclesReducer(builder);
  },
});
