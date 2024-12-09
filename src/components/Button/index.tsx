import React, {
  CSSProperties,
  FC,
  memo,
  MouseEventHandler,
  ReactNode,
} from "react";
import cn from "classnames";
import { Sizes } from "@/@types/sizes";
import { Loader } from "../Loader";
import { BUTTON_STYLE_SIZE, BUTTON_STYLE_VARIANTS } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
  size?: Sizes;
  type?: "button" | "submit" | "reset";
  leaderSize?: Sizes;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export const Button: FC<Props> = memo(
  ({
    children,
    className,
    isLoading,
    variant = ButtonVariants.DEFAULT,
    size = Sizes.M,
    type = "button",
    leaderSize,
    isDisabled,
    onClick,
    style,
  }) => {
    const combinedClassNames = cn(
      "flex justify-center items-center outline-0 transition ease-in-out duration-200 active:translate-y-0.5 active:duration-150 active:brightness-95 disabled:opacity-50 disabled:active:translate-y-0 disabled:brightness-100",
      BUTTON_STYLE_VARIANTS[variant],
      BUTTON_STYLE_SIZE[size],
      className,
      {
        "hover:brightness-130 hover:scale-105": !variant,
      }
    );

    return (
      <button
        className={combinedClassNames}
        type={type}
        onClick={onClick}
        disabled={isLoading || isDisabled}
        style={style}
      >
        {isLoading ? <Loader size={leaderSize} /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
