import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}

export const NumericInput: FC<Props> = ({ setValue, value }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  return (
    <label className="flex flex-col gap-2">
      <span>Enter cooking time</span>
      <input
        className="rounded-lg px-2 text-black"
        value={value}
        onChange={handleInputChange}
        type="number"
        max={999}
        min={1}
      />
    </label>
  );
};
