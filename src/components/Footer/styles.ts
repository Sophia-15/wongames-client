import * as HeadingStyles from "@/components/Heading/styles";
import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin: ${theme.spacings.large} 0 ${theme.spacings.medium};
    text-align: center;
  `}
`;
