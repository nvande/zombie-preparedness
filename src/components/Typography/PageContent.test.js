import React from "react";
import { render, screen } from "@testing-library/react";
import PageContent from "./PageContent";
import parseMarkdown from "../../utility/parseMarkdown";

jest.mock('../../utility/parseMarkdown', () => ({
  __esModule: true,
  default: jest.fn((text) => <div>{text}</div>),
}));

describe('PageContent', () => {
  it('renders the heading when provided', () => {
    const heading = "Test Heading";
    render(<PageContent heading={heading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
  });

  it('does not render a heading when none is provided', () => {
    render(<PageContent />);
    expect(screen.queryByRole('heading')).toBeNull();
  });

  it('renders parsed markdown content when string content is provided', () => {
    const content = "This is a test content.";
    parseMarkdown.mockImplementation(() => <span>{content}</span>);
    render(<PageContent content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('renders a list of parsed markdown contents when array content is provided', () => {
    const contents = ["First content", "Second content"];
    contents.forEach((content, idx) => {
      parseMarkdown.mockImplementationOnce(() => <span key={idx}>{content}</span>);
    });
    render(<PageContent content={contents} />);
    contents.forEach(content => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  it('renders a button with action link and label when provided', () => {
    const actionLabel = "Click me!";
    const actionLink = "http://example.com";
    render(<PageContent actionLabel={actionLabel} actionLink={actionLink} />);
    const button = screen.getByRole('link', { name: actionLabel });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', actionLink);
  });

  it('does not render a button when actionLabel or actionLink is missing', () => {
    render(<PageContent actionLabel="Click me!" />);
    expect(screen.queryByRole('link')).toBeNull();
    render(<PageContent actionLink="http://example.com" />);
    expect(screen.queryByRole('link')).toBeNull();
  });
});
