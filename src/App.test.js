import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  it("App rendering", () => {
    render(<App />);

    const heading = screen.getByRole("heading");
    const input = screen.getByPlaceholderText("type new todo");
    const button = screen.getByText("add");

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("type input, button click => todo add", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("type new todo");
    const button = screen.getByText("add");

    userEvent.type(input, "learn tdd");
    userEvent.click(button);

    expect(screen.getByText(/learn tdd/i)).toBeInTheDocument();
  });

  it("todo delete", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("type new todo");
    const button = screen.getByText("add");

    userEvent.type(input, "learn tdd");
    userEvent.click(button);

    const todo = screen.getByText(/learn tdd/i);
    expect(todo).toBeInTheDocument();

    const deleteBtn = screen.getByText("delete");
    userEvent.click(deleteBtn);

    expect(todo).not.toBeInTheDocument();
  });
});
