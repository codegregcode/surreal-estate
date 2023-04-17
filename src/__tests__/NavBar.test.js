import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const { asFragment } = render(<NavBar />);

  it("renders navbar component", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("contains list/link items", () => {
    render(<NavBar />);
    const viewProperties = screen.getByText(/View Properties/);
    const addAProperty = screen.getByText(/Add a Property/);

    expect(viewProperties).toBeInTheDocument();
    expect(addAProperty).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(<NavBar />);
    const logoAlt = screen.getByAltText(/logo/);

    expect(logoAlt).toBeInTheDocument();
  });
});
