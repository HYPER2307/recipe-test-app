"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { IDropdownItem } from "@/components/Dropdown/types";
import { useAppDispatch } from "@/hooks/redux";
import { getVehiclesAsync } from "@/redux/vehicles/actions";
import { selectVehiclesData } from "@/redux/vehicles/selectors";
import { CAR_YEARS } from "@/constants/years";
import { Sizes } from "@/@types/sizes";

export default function Home() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const vehiclesData = useSelector(selectVehiclesData);

  const [selectedVehicleMake, setSelectedVehicleMake] =
    useState<IDropdownItem | null>(null);
  const [selectedVehicleYear, setSelectedVehicleYear] =
    useState<IDropdownItem | null>(null);

  const { Results } = vehiclesData || {};

  const isButtonActive =
    Boolean(selectedVehicleMake) && Boolean(selectedVehicleYear);

  const handleNext = () => {
    router.push(
      `/result/${selectedVehicleMake?.id}/${selectedVehicleYear?.id}`
    );
  };

  const vehiclesMakes: IDropdownItem[] =
    Results?.map(({ MakeId, MakeName }) => ({
      id: MakeId,
      label: MakeName,
    })) || [];

  useEffect(() => {
    dispatch(getVehiclesAsync());
  }, [dispatch]);

  return (
    <div className="container h-full">
      <div className="flex h-full flex-col items-center justify-start gap-4 xs:flex-row xs:items-start xs:justify-center">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Dropdown
            options={vehiclesMakes}
            currentOption={selectedVehicleMake}
            onItemSelect={setSelectedVehicleMake}
            title="Select vehicle"
            className="flex-1"
          />

          <Dropdown
            options={CAR_YEARS}
            currentOption={selectedVehicleYear}
            onItemSelect={setSelectedVehicleYear}
            title="Select year"
            className="flex-1"
          />
        </div>

        <Button
          size={Sizes.M}
          isDisabled={!isButtonActive}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
