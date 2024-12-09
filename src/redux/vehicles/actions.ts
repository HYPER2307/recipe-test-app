import { instance } from "@/services/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IVehiclesResponse } from "@/@types/vehicle";

export const VEHICLES_SLICE_NAME = "vehicles";

export const getVehiclesAsync = createAsyncThunk(
  `${VEHICLES_SLICE_NAME}/fetchVehicles`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IVehiclesResponse>(
        "/vehicles/GetMakesForVehicleType/car?format=json",
        { withCredentials: false }
      );

      return data;
    } catch (response) {
      return rejectWithValue(response);
    }
  }
);
