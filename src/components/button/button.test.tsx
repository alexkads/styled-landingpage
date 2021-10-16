import React from "react";
import { Button } from "../button";
import { render, screen } from "@testing-library/react";

test("should render with default values", () => {
  render(<Button>Texto</Button>);
  const button = screen.getByRole("button", { name: "Texto" });
  expect(button);
});
