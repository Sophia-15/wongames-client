import { ReactNode } from "react";
import * as S from "./styles";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: "sm" | "md";
  lineColor?: LineColors;
};

export function Heading({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size = "md",
  lineColor = "primary",
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      size={size}
      lineColor={lineColor}
    >
      {children}
    </S.Wrapper>
  );
}
