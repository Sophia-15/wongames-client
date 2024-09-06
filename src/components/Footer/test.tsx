import { screen } from "@testing-library/react";

import { Footer } from ".";
import { renderWithTheme } from "@/utils/tests/helpers";

describe("<Footer />", () => {
  it("should render the heading", () => {
    renderWithTheme(<Footer />);

    const contactHeading = screen.getByRole("heading", { name: /contact/i });
    const socialsHeading = screen.getByRole("heading", { name: /follow us/i });
    const linksHeading = screen.getByRole("heading", { name: /links/i });
    const locationHeading = screen.getByRole("heading", { name: /location/i });

    expect(contactHeading).toBeInTheDocument();
    expect(socialsHeading).toBeInTheDocument();
    expect(linksHeading).toBeInTheDocument();
    expect(locationHeading).toBeInTheDocument();
  });
});
