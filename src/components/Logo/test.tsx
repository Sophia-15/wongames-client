import { screen } from "@testing-library/react";

import { Logo } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Logo />", () => {
  it("should render a white logo, by default", () => {
    renderWithTheme(<Logo />);

    const logoParent = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logoParent).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("should render a black logo when color is passed", () => {
    renderWithTheme(<Logo color="black" />);

    const logoParent = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logoParent).toHaveStyle({
      color: "#030517",
    });
  });

  it("should render a normal logo, when size is not passed", () => {
    renderWithTheme(<Logo />);

    const logoParent = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logoParent).toHaveStyle({
      width: "11rem",
    });
  });

  it("should render a bigger logo", () => {
    renderWithTheme(<Logo size="large" />);

    const logoParent = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logoParent).toHaveStyle({
      width: "20rem",
    });
  });

  it("should render a bigger logo without text if hideOnMobile", () => {
    renderWithTheme(<Logo hideOnMobile />);

    const logoParent = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logoParent).toHaveStyleRule("width", "5.8rem", {
      media: "(max-width: 768px)",
    });
  });
});
