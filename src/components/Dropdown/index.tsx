import { Dispatch, FC, SetStateAction } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import { IDropdownItem } from "./types";

interface Props {
  options: IDropdownItem[];
  currentOption: IDropdownItem | null;
  onItemSelect?: Dispatch<SetStateAction<IDropdownItem | null>>;
  title?: string;
  className?: string;
}
export const Dropdown: FC<Props> = ({
  options = [],
  currentOption,
  onItemSelect = () => {},
  title,
  className,
}) => {
  const dropdownTitle = !currentOption ? title : currentOption.label;

  return (
    <Menu
      className={cn(
        "relative inline-block w-full max-w-40 text-left",
        className
      )}
      as="div"
    >
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span className="truncate" title={dropdownTitle}>
            {dropdownTitle}
          </span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 h-44 w-56 origin-top-right overflow-scroll rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {!options.length ? (
            <span className="px-2 text-black">List empty</span>
          ) : (
            <>
              {options.map(({ id, label }) => (
                <MenuItem key={id}>
                  <div
                    className="block cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    onClick={() => onItemSelect({ id, label })}
                  >
                    {label}
                  </div>
                </MenuItem>
              ))}
            </>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
};
