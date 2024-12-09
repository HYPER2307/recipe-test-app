import { instance } from "@/services/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IVehicleResponse } from "@/@types/vehicle";

export const VEHICLE_SLICE_NAME = "vehicle";

interface IGetVehicleParams {
  makeId: string;
  year: string;
}

export const getVehicleAsync = createAsyncThunk(
  `${VEHICLE_SLICE_NAME}/fetchVehicle`,
  async ({ makeId, year }: IGetVehicleParams, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IVehicleResponse>(
        `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
        { withCredentials: false }
      );

      return data;
    } catch (response) {
      return rejectWithValue(response);
    }
  }
);
