import React from "react";
import { render, screen } from "@testing-library/react";
import ProcessList from "./ProcessList";

describe("ProcessList", () => {
  const title = "Process Steps";
  const content = [
    "Identify the problem.",
    "Analyze the problem.",
    "Develop solutions.",
    "Implement the solution."
  ];

  it("renders the title and process steps correctly", () => {
    render(<ProcessList title={title} content={content} />);
    
    // Check title
    expect(screen.getByText(title)).toBeInTheDocument();

    // Check for all steps
    content.forEach((step, index) => {
      expect(screen.getByText(`Step ${index + 1}`)).toBeInTheDocument();
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it("does not render an anchor when no ID is provided", () => {
    const { container } = render(<ProcessList title={title} content={content} />);

    // Check for the absence of an anchor element
    expect(container.querySelector("[data-testid^='anchor-']")).toBeNull();
  });
});
