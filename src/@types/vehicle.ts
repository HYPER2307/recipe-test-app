export interface IVehiclesResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: ICar[];
}

export interface IVehicleResponse extends Omit<IVehiclesResponse, "Results"> {
  Results: IModelCar[];
}

export interface ICar {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IModelCar {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
