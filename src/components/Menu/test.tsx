import { fireEvent, render, screen } from "@testing-library/react";

import { Menu } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />);

    const menuLabel = screen.getByLabelText(/open menu/i);
    const searchLabel = screen.getByLabelText(/search/i);
    const shoppingCardLabel = screen.getByLabelText(/open shopping cart/i);
    const logoRole = screen.getByRole("img", { name: /won games/i });

    expect(menuLabel).toBeInTheDocument();
    expect(searchLabel).toBeInTheDocument();
    expect(shoppingCardLabel).toBeInTheDocument();
    expect(logoRole).toBeInTheDocument();
  });

  it("should handle the open/close mobile menu", () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole("navigation", { hidden: true });
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    const menuLabel = screen.getByLabelText(/open menu/i);
    fireEvent.click(menuLabel);
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    const closeMenu = screen.getByLabelText(/close menu/i);
    fireEvent.click(closeMenu);
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it("should show register box when logged out", () => {
    renderWithTheme(<Menu />);

    const wishlistLink = screen.queryByText(/wishlist/i);
    const accountLink = screen.queryByText(/my account/i);

    const loginButton = screen.getByText(/log in now/i);
    const signUpLink = screen.getByText(/sign up/i);

    expect(wishlistLink).not.toBeInTheDocument();
    expect(accountLink).not.toBeInTheDocument();

    expect(loginButton).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it("should show wishlist and account when logged in", () => {
    renderWithTheme(<Menu username="wongames" />);

    const wishlistLink = screen.getByText(/wishlist/i);
    const accountLink = screen.getByText(/my account/i);

    const loginButton = screen.queryByText(/log in now/i);
    const signUpLink = screen.queryByText(/sign up/i);

    expect(wishlistLink).toBeInTheDocument();
    expect(accountLink).toBeInTheDocument();

    expect(loginButton).not.toBeInTheDocument();
    expect(signUpLink).not.toBeInTheDocument();
  });
});
