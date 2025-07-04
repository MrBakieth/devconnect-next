import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectForm from "../components/ProjectForm";

describe("ProjectForm Component", () => {
  const mockOnSubmit = jest.fn((e) => e.preventDefault());
  const mockOnChange = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    render(
      <ProjectForm
        name="Project"
        description="Description"
        date="2025-07-12" // Attention: inpıt type="data" format must be ISO (yyyy-mm-dd)!
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
      />
    );
  });

  it("renders form with initial values", () => {
    expect(screen.getByPlaceholderText("Name")).toHaveValue("Project");
    expect(screen.getByPlaceholderText("Description")).toHaveValue(
      "Description"
    );
    expect(screen.getByPlaceholderText("Date")).toHaveValue("2025-07-12");
  });

  it("calls onChange when typing in input value", () => {
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Project Name" },
    });
    expect(mockOnChange).toHaveBeenCalledWith("name", "Project Name");
  });

  it("calls onSubmit when form is submitted", () => {
    fireEvent.click(screen.getByText("Submit"));
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("calls onSubmit when form is submitted", () => {
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
