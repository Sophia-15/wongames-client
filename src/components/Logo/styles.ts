import styled, { css } from "styled-components";
import { LogoProps } from ".";

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
      }

      .text {
        display: none;
        pointer-events: none;
      }
    }
  `,
};

export const Wrapper = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};

  ${({ size }) => css`
    ${wrapperModifiers[size!]}
  `}

  ${({ hideOnMobile }) => css`
    ${hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`;
