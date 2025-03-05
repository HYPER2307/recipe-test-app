import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
}

export const Search: FC<Props> = ({ setQuery, query }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setQuery(value);
  };

  return (
    <label className="flex flex-col gap-2">
      <span>Enter search query</span>
      <input
        className="px-2 text-black rounded-lg"
        value={query}
        onChange={handleInputChange}
      />
    </label>
  );
};
