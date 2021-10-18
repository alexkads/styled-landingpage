import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

test("should render with default values", () => {
  const { debug } = render(<Button>Texto</Button>);
  debug();
  const button = screen.getByRole("button", { name: "Texto" });
  expect(button);
});
