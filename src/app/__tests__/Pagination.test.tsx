import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../components/Pagination";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear(); // Clear mock before each test
  });

  it("renders current page number", () => {
    render(
      <Pagination
        currentPage={2}
        onPageChange={mockOnPageChange}
        disablePrev={false}
      />
    );

    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  it("calls onPageChange with previous page when 'Prev' is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        onPageChange={mockOnPageChange}
        disablePrev={false}
      />
    );

    fireEvent.click(screen.getByText(/Prev/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with next page when 'Next' is clicked", () => {
    render(
      <Pagination
        currentPage={2}
        onPageChange={mockOnPageChange}
        disablePrev={false}
      />
    );

    fireEvent.click(screen.getByText(/Next/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it("calls onPageChange with next page when {currentPage + 1} is clicked", () => {
    render(
      <Pagination
        currentPage={2}
        onPageChange={mockOnPageChange}
        disablePrev={false}
      />
    );

    fireEvent.click(screen.getByText(/3/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it("calls onPageChange with next page when {currentPage + 2} is clicked", () => {
    render(
      <Pagination
        currentPage={2}
        onPageChange={mockOnPageChange}
        disablePrev={false}
      />
    );

    fireEvent.click(screen.getByText(/4/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });
});
