import React from "react";
import { render, screen } from "@testing-library/react";
import { Section } from ".";

test("should render with default values", () => {
  render(<Section>Texto in section</Section>);
  const section = screen.getByText("Texto in section");
  expect(section);
});
