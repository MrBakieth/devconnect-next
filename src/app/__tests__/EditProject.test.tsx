import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditProject from "../components/EditProject";

describe("EditProject Component", () => {
  const mockOnSubmit = jest.fn((e) => e.preventDefault());
  const mockOnCancel = jest.fn();
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <EditProject
        title="Edit Project"
        name="Project Name"
        description="Project Description"
        date="2025-07-12"
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
        onChange={mockOnChange}
      />
    );
  });

  it("renders form with initial values", () => {
    expect(screen.getByPlaceholderText("Name")).toHaveValue("Project Name");
    expect(screen.getByPlaceholderText("Description")).toHaveValue(
      "Project Description"
    );
    expect(screen.getByPlaceholderText("Date")).toHaveValue("2025-07-12");
  });

  it("calls onChange when typing in input fields", () => {
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Project Name 2" },
    });
    expect(mockOnChange).toHaveBeenCalledWith("name", "Project Name 2");
  });

  it("calls onSubmit when form is submitted", () => {
    fireEvent.click(screen.getByText("Update"));
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
