import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders buttons", () => {
  render(<App />);

  expect(screen.getByText("+")).toBeInTheDocument();
  expect(screen.getByText("=")).toBeInTheDocument();
  expect(screen.getByText(/result/i)).toBeInTheDocument();
  expect(screen.getByText(/reset/i)).toBeInTheDocument();
});

test("check sum", async () => {
  render(<App />);

  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const sum = a + b;

  await waitFor(() => { screen.getByText(`${a}`).click(); });
  await waitFor(() => { screen.getByText("+").click(); });
  await waitFor(() => { screen.getByText(`${b}`).click(); });
  await waitFor(() => { screen.getByText("=").click(); });

  expect(screen.getByText(`result = ${sum}`)).toHaveTextContent(`result = ${sum}`);
});
