import { render, screen } from "@testing-library/react";

import { Button } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";
import { ShoppingCart } from "lucide-react";

describe("<Button />", () => {
  it("should render a medium size button by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    const button = screen.getByRole("button", { name: /buy now/i });

    expect(button).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a small button", () => {
    renderWithTheme(<Button size="sm">Buy now</Button>);

    const button = screen.getByRole("button", { name: /buy now/i });

    expect(button).toHaveStyle({
      height: "3rem",
      "font-size": "1.2rem",
    });
  });

  it("should render a large button", () => {
    renderWithTheme(<Button size="lg">Buy now</Button>);

    const button = screen.getByRole("button", { name: /buy now/i });

    expect(button).toHaveStyle({
      height: "5rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.6rem",
    });
  });

  it("should render a full width button", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    const button = screen.getByRole("button", { name: /buy now/i });

    expect(button).toHaveStyle({
      width: "100%",
    });
  });

  it("should render an icon version button", () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />}>Buy now</Button>,
    );

    const buttonText = screen.getByText(/buy now/i);
    const buttonTestId = screen.getByTestId("icon");

    expect(buttonText).toBeInTheDocument();
    expect(buttonTestId).toBeInTheDocument();
  });

  it("should render button as a link", () => {
    renderWithTheme(
      <Button as={"a"} href="/link">
        Buy now
      </Button>,
    );

    const buttonLink = screen.getByRole("link", { name: /buy now/i });

    expect(buttonLink).toHaveAttribute("href", "/link");
  });
});
