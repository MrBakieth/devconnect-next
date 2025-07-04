import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "../components/UserList";
import userEvent from "@testing-library/user-event";
import { User } from "../type/user";

// Mock data for users
const mockUsers: User[] = [
  {
    id: "1",
    name: "Robin",
    email: "furkan@example.com",
    job: "Developer",
  },
];

// Mock function to handle user selection
const mockOnEdit = jest.fn(); // jest.fn() creates a mock function
const mockOnDelete = jest.fn();

describe("UserList Component", () => {
  it("renders user list with correct datas", () => {
    render(
      <UserList users={mockUsers} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    expect(screen.getByText(/Robin/i)).toBeInTheDocument();
    expect(screen.getByText(/furkan@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Developer/i)).toBeInTheDocument();
  });
});

it("calls onEdit when Edit button is clicked", async () => {
  render(
    <UserList users={mockUsers} onEdit={mockOnEdit} onDelete={mockOnDelete} />
  );

  const user = userEvent.setup(); // userEvent.setup() is used to create a user evenet instance
  const editButton = screen.getByRole("button", { name: /edit/i }); // Get the Edit button by its role and name

  await user.click(editButton);

  expect(mockOnEdit).toHaveBeenCalledTimes(1);
  expect(mockOnEdit).toHaveBeenCalledWith(mockUsers[0]);
});

it("calls onDelete when Delete button is clicked", async () => {
  render(
    <UserList users={mockUsers} onEdit={mockOnEdit} onDelete={mockOnDelete} />
  );

  const user = userEvent.setup();
  const deleteButton = screen.getByRole("button", { name: /delete/i });

  await user.click(deleteButton);

  expect(mockOnDelete).toHaveBeenCalledTimes(1);
  expect(mockOnDelete).toHaveBeenCalledWith(mockUsers[0]);
});

it("shows no user message when user list is empty", () => {
  render(<UserList users={[]} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

  expect(screen.getByText(/No user found./i)).toBeInTheDocument();
});
