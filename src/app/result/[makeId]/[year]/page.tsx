import React, { FC, Suspense } from "react";
import { instance } from "@/services/api-client";
import { Loader } from "@/components/Loader";
import { CAR_YEARS } from "@/constants/years";
import { Sizes } from "@/@types/sizes";
import { IVehiclesResponse } from "@/@types/vehicle";
import { ModelsPage } from "./ModelsPage";

export const generateStaticParams = async () => {
  const { data } = await instance.get<IVehiclesResponse>(
    "/vehicles/GetMakesForVehicleType/car?format=json",
    {
      withCredentials: false,
    }
  );

  const { Results } = data;

  const paths = Results.flatMap(({ MakeId }) =>
    CAR_YEARS.map(({ label: year }) => ({
      params: { makeId: MakeId, year: year.toString() },
    }))
  );

  return paths;
};

interface Props {
  params: { makeId: string; year: string };
}

const Page: FC<Props> = async ({ params }) => {
  const { makeId, year } = await params;

  return (
    <div className="container h-full">
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center">
            <Loader size={Sizes.XXL} />
          </div>
        }
      >
        <ModelsPage makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
};

export default Page;
