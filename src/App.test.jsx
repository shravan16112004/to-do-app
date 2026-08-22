import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders TODO list application", () => {
  render(<App />);

  expect(
    screen.getByText(/10WeeksofCloudOps - TODO LIST/i)
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/add item/i)
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /add/i })
  ).toBeInTheDocument();
});

