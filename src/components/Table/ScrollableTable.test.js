import React from "react";
import { render, screen } from "@testing-library/react";
import ScrollableTable from "./ScrollableTable";

describe('ScrollableTable', () => {
  const mockContent = [
    { Name: "Alice", Age: "30", Location: "New York" },
    { Name: "Bob", Age: "25", Location: "Los Angeles" }
  ];

  it('renders with title and table headers', () => {
    render(<ScrollableTable title="User Data" content={mockContent} />);
    expect(screen.getByText("User Data")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
  });

  it('renders rows based on content', () => {
    render(<ScrollableTable title="User Data" content={mockContent} />);
    expect(screen.getAllByRole("row").length).toBe(3); // Includes header row
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
  });

  it('handles empty content gracefully', () => {
    render(<ScrollableTable title="Empty Table" content={[]} />);
    expect(screen.getByText("Empty Table")).toBeInTheDocument();
    expect(screen.queryAllByRole("row")).toHaveLength(1); // Only header row should exist
  });

  it('renders Attribution if provided', () => {
    const attributionProps = {
      attribution: "Data provided by Example Inc.",
      sourceUrl: "https://example.com",
      sourceDate: "2021-04-01",
    };
    render(<ScrollableTable title="User Data" content={mockContent} {...attributionProps} />);
    expect(screen.getByText("Data provided by Example Inc.")).toBeInTheDocument();
    expect(screen.getByText("https://example.com")).toBeInTheDocument();
    expect(screen.getByText("2021-04-01")).toBeInTheDocument();
  });

  it('does not render Attribution when not provided', () => {
    render(<ScrollableTable title="User Data" content={mockContent} />);
    expect(screen.queryByText("Data provided by")).not.toBeInTheDocument();
  });
});
