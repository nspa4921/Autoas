import React from "react";
import Header from "./Header";
import { fireEvent, waitForElementToBeRemoved } from "@testing-library/dom";
import { render, act, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should open drawer", () => {
  const { getByTestId } = render(<Header />);
  act(() => {
    fireEvent.click(getByTestId("menuButton"));
  });
  expect(getByTestId("drawer")).toBeVisible();
});

it("should close drawer", async () => {
  const { getByTestId, queryByTestId } = render(<Header />);

  fireEvent.click(getByTestId("menuButton"));
  expect(getByTestId("drawer")).toBeVisible();

  fireEvent.click(getByTestId("closeButton"));
  await waitForElementToBeRemoved(getByTestId("drawer"));

  expect(queryByTestId("drawer")).toBeNull();
});