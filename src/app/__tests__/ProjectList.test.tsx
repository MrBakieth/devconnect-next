import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectList from "../components/ProjectList";
import userEvent from "@testing-library/user-event";
import { Project } from "../type/project";

// Mock data for projects
const mockProjects: Project[] = [
  {
    id: "1",
    name: "Project Name",
    description: "Project Description",
    date: "2025-10-30",
  },
];

// mock function to handle project selection
const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

describe("ProjectList Component", () => {
  it("renders project list with correct datas", () => {
    render(
      <ProjectList
        projects={mockProjects}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    expect(screen.getByText(/Project Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Project Description/i)).toBeInTheDocument();
    expect(screen.getByText(/30 Ekim 2025/i)).toBeInTheDocument();
  });
});

it("calls onEdit when Edit button is clicked", async () => {
  render(
    <ProjectList
      projects={mockProjects}
      onDelete={mockOnDelete}
      onEdit={mockOnEdit}
    />
  );

  const user = userEvent.setup();
  const editButton = screen.getByRole("button", { name: /edit/i });

  await user.click(editButton);

  expect(mockOnEdit).toHaveBeenCalledTimes(1);
  expect(mockOnEdit).toHaveBeenCalledWith(mockProjects[0]);
});

it("calls onDelete when Delete button is clicked", async () => {
  render(
    <ProjectList
      projects={mockProjects}
      onDelete={mockOnDelete}
      onEdit={mockOnEdit}
    />
  );

  const user = userEvent.setup();
  const deleteButton = screen.getByRole("button", { name: /delete/i });

  await user.click(deleteButton);

  expect(mockOnDelete).toHaveBeenCalledTimes(1);
  expect(mockOnDelete).toHaveBeenCalledWith(mockProjects[0]);
});

it("shows no project message when project list is empty", () => {
  render(
    <ProjectList projects={[]} onDelete={mockOnDelete} onEdit={mockOnEdit} />
  );
  expect(screen.getByText(/No project found./i)).toBeInTheDocument();
});
