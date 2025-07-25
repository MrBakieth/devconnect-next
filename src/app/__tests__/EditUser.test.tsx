import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditUser from "../components/EditUser";

describe("EditUser Component", () => {
  const mockOnSubmit = jest.fn((e) => e.preventDefault());
  const mockOnCancel = jest.fn();
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <EditUser
        title="Edit User"
        name="Robin"
        email="robin@example.com"
        job="Developer"
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
        onChange={mockOnChange}
      />
    );
  });

  it("renders form with initial values", () => {
    expect(screen.getByPlaceholderText("Name")).toHaveValue("Robin");
    expect(screen.getByPlaceholderText("Email")).toHaveValue(
      "robin@example.com"
    );
    expect(screen.getByPlaceholderText("Job")).toHaveValue("Developer");
  });

  it("calls onChange when typing in input fields", () => {
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Robinn" },
    });
    expect(mockOnChange).toHaveBeenCalledWith("name", "Robinn");
  });

  it("calls onsubmit when form is submitted", () => {
    fireEvent.click(screen.getByText("Update"));
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
