// import cn from "classnames";
import { Sizes } from "@/@types/sizes";
import { ButtonVariants } from "./types";

export const BUTTON_STYLE_VARIANTS: Record<ButtonVariants, string> = {
  [ButtonVariants.DEFAULT]: "px-4 border rounded hover:bg-gray-700 py-1",
  [ButtonVariants.TRANSPARENT]: "",
};

export const BUTTON_STYLE_SIZE = {
  [Sizes.S]: "py-2.5 text-10",
  [Sizes.M]: "text-lg font-medium",
  [Sizes.XS]: "",
  [Sizes.L]: "",
  [Sizes.XXL]: "",
};
