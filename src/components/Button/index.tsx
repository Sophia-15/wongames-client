import React, { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

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
