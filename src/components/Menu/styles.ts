import styled, { css } from "styled-components";

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.small} 0;
  position: relative;
`;

export const LogoWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacings.xsmall};
`;

export const MenuNav = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: ${({ theme }) => theme.spacings.small};
  }
`;

export const MenuLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin: 0.3rem ${({ theme }) => theme.spacings.small} 0;
  text-decoration: none;
  text-align: center;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: ${({ theme }) => theme.colors.primary};
      animation: hoverAnimation 0.2s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  transition: 0.3s opacity ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};

  > svg {
    position: absolute;
    right: 0;
    top: 0;
    margin: ${({ theme }) => theme.spacings.xsmall};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  }

  ${MenuNav} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
  }

  ${MenuLink} {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    margin-bottom: ${({ theme }) => theme.spacings.small};

    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(3rem)"};
    transition: transform 0.3s ease-in-out;
  }

  ${RegisterBox} {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(3rem)"};
    transition: transform 0.3s ease-in-out;
  }
`;
