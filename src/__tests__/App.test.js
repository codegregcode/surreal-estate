import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("render App component", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
