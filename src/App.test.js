import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing DOM structure", () => {
  test("should show header", () => {
    render(<App />);
    const linkElement = screen.getByText(/My To-Do List/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should have a form", () => {
    render(<App />);
    const element = document.querySelector("form");
    expect(element).toBeInTheDocument();
  });

  test("initial page load should not contain to-dos", () => {
    render(<App />);
    const toDoCard = document.querySelectorAll("article");
    expect(toDoCard).toHaveLength(0);
  });
});
