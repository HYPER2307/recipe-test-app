"use client";

import React, { FC, useEffect } from "react";
import { Loader } from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getVehicleAsync } from "@/redux/vehicles copy/actions";
import { selectVehicleData } from "@/redux/vehicles copy/selectors";
import { Sizes } from "@/@types/sizes";

interface Props {
  makeId: string;
  year: string;
}

export const ModelsPage: FC<Props> = ({ makeId, year }) => {
  const dispatch = useAppDispatch();
  const vehicle = useAppSelector(selectVehicleData);

  const { Results, Count } = vehicle || {};

  useEffect(() => {
    dispatch(getVehicleAsync({ makeId, year }));
  }, [dispatch, makeId, year]);

  if (!vehicle) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader size={Sizes.XXL} />
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Cars List</h2>

      {!Count ? (
        <div className="w-full rounded-2xl border border-red-600 p-10 text-center">
          <span className="text-2xl">
            List is empty for these car brand and year
          </span>
        </div>
      ) : (
        <>
          <span className="mb-4 block">Year: {year}</span>

          <ul className="grid-cols-auto-fill grid items-center justify-center justify-items-center gap-3">
            {Results?.map(({ Make_Name, Model_Name }) => {
              const currentCarModel = `${Make_Name} ${Model_Name}`;

              return (
                <li
                  className="w-full truncate rounded-3xl border p-3 text-center"
                  title={currentCarModel}
                  key={crypto.randomUUID()}
                >
                  {currentCarModel}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
