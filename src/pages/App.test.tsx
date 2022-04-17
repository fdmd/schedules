import { render } from "@testing-library/react";
import React from "react";
import { Homepage } from "../components/Homepage/Homepage";
import App from "./App";

jest.mock("../components/Homepage/Homepage", () => {
  return {
    Homepage: jest.fn(),
  };
});

test("renders App", () => {
  render(<App />);

  expect(Homepage).toHaveBeenCalledWith({}, {});
});
