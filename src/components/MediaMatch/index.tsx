import theme from "@/styles/theme";
import styled, { css, DefaultTheme } from "styled-components";

type breakpoint = keyof typeof theme.breakpoints;

export type MediaMatchProps = {
  greaterThan?: breakpoint;
  lessThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    @media (max-width: ${theme.breakpoints[size]}) {
      display: block;
    }
  `,
  greaterThan: (size: breakpoint) => css`
    @media (min-width: ${theme.breakpoints[size]}) {
      display: block;
    }
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)} //max
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)} //min
  `}
`;
