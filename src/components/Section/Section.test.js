import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe('Section', () => {
  it('renders the heading', () => {
    render(<Section heading="Test Heading" />);
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });

  it('renders array of content correctly', () => {
    const contents = ["First paragraph", "Second paragraph"];
    render(
      <Section content={contents} />
    );
    expect(screen.getByText("First paragraph")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph")).toBeInTheDocument();
  });

  it('renders the action button if actionLabel and actionLink are provided', () => {
    render(
      <Section
        actionLabel="Click Me"
        actionLink="/path"
      />
    );
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/path');
  });

  it('does not render the action button if actionLabel is missing', () => {
    render(<Section actionLink="/path" />);
    expect(screen.queryByText("Click Me")).toBeNull();
  });

  it('renders children when provided', () => {
    const childrenText = "Child Component";
    render(
      <Section>
        <div>{childrenText}</div>
      </Section>
    );
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<Section />);
    expect(container.firstChild).toHaveClass('usa-section');
    expect(container.querySelector('.grid-container')).toBeTruthy();
  });
});
