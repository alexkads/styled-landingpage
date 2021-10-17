import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

test("should render with default values", () => {
  render(<Button>Texto</Button>);
  const button = screen.getByRole("button", { name: "Texto" });
  expect(button);
});
