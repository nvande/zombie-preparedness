import React from "react";
import { render, screen } from "@testing-library/react";
import Attribution from "./Attribution";

describe('Attribution', () => {
  it('renders all provided props correctly', () => {
    render(
      <Attribution
        author="John Doe"
        date="2021-12-01"
        title="Sample Article"
        source="https://example.com"
        type="Article"
        copyright="© 2021 Example Inc."
      />
    );
    
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("2021-12-01")).toBeInTheDocument();
    expect(screen.getByText("Sample Article")).toBeInTheDocument();
    expect(screen.getByText("https://example.com")).toBeInTheDocument();
    expect(screen.getByText("[Article]")).toBeInTheDocument();
    expect(screen.getByText("© 2021 Example Inc.")).toBeInTheDocument();
  });

  it('handles missing props gracefully', () => {
    render(<Attribution author="John Doe" />);
    
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.queryByText("2021-12-01")).not.toBeInTheDocument();
    expect(screen.queryByText("Sample Article")).not.toBeInTheDocument();
    expect(screen.queryByText("https://example.com")).not.toBeInTheDocument();
    expect(screen.queryByText("[Article]")).not.toBeInTheDocument();
    expect(screen.queryByText("© 2021 Example Inc.")).not.toBeInTheDocument();
  });

  it('renders link only when source is provided', () => {
    render(<Attribution source="https://example.com" />);
    
    const link = screen.getByText("https://example.com").closest('a');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("2021-12-01")).not.toBeInTheDocument();
    expect(screen.queryByText("Sample Article")).not.toBeInTheDocument();
    expect(screen.queryByText("[Article]")).not.toBeInTheDocument();
    expect(screen.queryByText("© 2021 Example Inc.")).not.toBeInTheDocument();
  });

  it('renders type within brackets only when source and type are provided', () => {
    render(
      <Attribution
        source="https://example.com"
        type="PDF"
      />
    );
    
    expect(screen.getByText("[PDF]")).toBeInTheDocument();
  });

  it('does not render type if no source is provided', () => {
    render(<Attribution type="PDF" />);
    expect(screen.queryByText("[PDF]")).not.toBeInTheDocument();
  });

  it('renders copyright notice when provided', () => {
    render(
      <Attribution
        copyright="© 2021 Example Inc."
      />
    );
    
    expect(screen.getByText("© 2021 Example Inc.")).toBeInTheDocument();
  });
});
