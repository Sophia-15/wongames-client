import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth">;

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  md: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  lg: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
