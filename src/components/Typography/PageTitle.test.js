import React from "react";
import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe('PageTitle', () => {
  it('renders the heading and subheading when showTitle is true', () => {
    const heading = "Main Heading";
    const subheading = "Subheading";
    render(<PageTitle showTitle heading={heading} subheading={subheading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
  });

  it('does not render the heading or subheading when showTitle is false', () => {
    const heading = "Main Heading";
    const subheading = "Subheading";
    render(<PageTitle showTitle={false} heading={heading} subheading={subheading} />);
    expect(screen.queryByText(heading)).not.toBeInTheDocument();
    expect(screen.queryByText(subheading)).not.toBeInTheDocument();
  });

  it('renders the heading, attribution and author information when provided', () => {
    const heading = "Main Heading";
    const author = "John Doe";
    const attribution = "Attribution Text";
    render(<PageTitle showTitle heading={heading} author={author} attribution={attribution} />);
    const headingText = screen.getByText(heading);
    expect(headingText).toBeInTheDocument();
    const attributionText = screen.getByText("Attribution Text, author John Doe");
    expect(attributionText).toBeInTheDocument();
  });

  it('renders only the attribution when no author is provided', () => {
    const heading = "Main Heading";
    const attribution = "Attribution Text";
    render(<PageTitle showTitle heading={heading} attribution={attribution} />);
    const attributionText = screen.getByText("Attribution Text");
    expect(attributionText).toBeInTheDocument();
  });

  it('does not render attribution if not provided', () => {
    const heading = "Main Heading";
    render(<PageTitle showTitle heading={heading} />);
    expect(screen.queryByText(", author ")).toBeNull();
  });

  it('renders copyright when provided', () => {
    const copyright = "© 2024 Company, Inc.";
    render(<PageTitle copyright={copyright} />);
    expect(screen.getByText("© 2024 Company, Inc.")).toBeInTheDocument();
  });

  it('does not render copyright if not provided', () => {
    render(<PageTitle />);
    expect(screen.queryByText("Copyright:")).toBeNull();
  });
});
