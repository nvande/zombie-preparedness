import React from "react";
import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

describe("Anchor", () => {
  it("renders correctly with an id", () => {
    const testId = "test-anchor";
    render(<Anchor id={testId} />);

    const anchor = screen.getByTestId(`anchor-${testId}`);
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("id", testId);
    expect(anchor.style.position).toBe('relative');
    expect(anchor.style.top).toBe('-20px');
  });

  it("does not render without an id", () => {
    const { container } = render(<Anchor />);
    expect(container.firstChild).toBeNull();
  });
});
