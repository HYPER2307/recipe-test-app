import React, { FC } from "react";
import cn from "classnames";
import { Sizes } from "@/@types/sizes";
import { LOADER_SIZES } from "./constants";

interface Props {
  size?: Sizes;
  className?: string;
}

export const Loader: FC<Props> = ({ size = Sizes.XS, className }) => (
  <div
    className={cn(
      "border-orange-light mx-auto animate-spin rounded-full border-2 border-t-orange-500",
      LOADER_SIZES[size],
      className
    )}
  />
);
