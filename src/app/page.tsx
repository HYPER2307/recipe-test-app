"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { IDropdownItem } from "@/components/Dropdown/types";
import { NumericInput } from "@/components/NumericInput";
import { Search } from "@/components/Search";
import { CUISINES_LIST } from "@/constants/cuisines";
import { Sizes } from "@/@types/sizes";

export default function Home() {
  const router = useRouter();

  const [selectedCuisine, setSelectedCuisine] = useState<IDropdownItem | null>(
    null
  );
  const [query, setQuery] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const isButtonActive =
    Boolean(selectedCuisine) || Boolean(query) || Boolean(cookingTime);

  const handleNext = () => {
    router.push(
      `/recipes?query=${query}&cuisine=${selectedCuisine?.label || ""}&maxReadyTime=${cookingTime.length ? cookingTime : 999}`
    );
  };

  const cuisinesDropdownItems: IDropdownItem[] = CUISINES_LIST.map(
    (cuisine) => ({
      id: crypto.randomUUID(),
      label: cuisine,
    })
  );

  return (
    <div className="container h-full p-6 md:p-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-full max-w-4xl space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Search query={query} setQuery={setQuery} />
            <NumericInput setValue={setCookingTime} value={cookingTime} />
            <Dropdown
              options={cuisinesDropdownItems}
              currentOption={selectedCuisine}
              onItemSelect={setSelectedCuisine}
              title="Select cuisine"
              className="flex-1"
            />
          </div>

          <Button
            size={Sizes.M}
            isDisabled={!isButtonActive}
            onClick={handleNext}
            className="w-full transform px-6 py-3 text-xl font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-600 sm:w-auto"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
