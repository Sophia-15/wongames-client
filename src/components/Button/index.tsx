import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

export function Button({
  children,
  size = "md",
  icon,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
