import React from 'react';
import { render } from '@testing-library/react';
import parseMarkdown from './parseMarkdown';

describe('parseMarkdown', () => {
  it('parses bold text correctly', () => {
    const text = "This is **bold** text";
    const result = parseMarkdown(text);
    const { container } = render(<>{result}</>);
    expect(container.querySelector('strong')).toHaveTextContent('bold');
    expect(container.textContent).toContain('This is bold text');
  });

  it('parses links correctly', () => {
    const text = "Check out [Mock](https://mock.com)";
    const result = parseMarkdown(text);
    const { getByText } = render(<>{result}</>);
    const link = getByText('Mock');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('https://mock.com/');
  });

  it('parses horizontal rules correctly', () => {
    const text = "---";
    const result = parseMarkdown(text);
    const { container } = render(<>{result}</>);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('converts full link to anchor only if pathname matches and link contains an anchor', () => {
    const text = "Visit [Home](https://example.com/home#section)";
    const currentPathname = "/home";
    const result = parseMarkdown(text, currentPathname);
    const { getByText } = render(<>{result}</>);
    const link = getByText('Home');
    expect(link.getAttribute('href')).toBe('#section');
  });

  it('keeps full link if pathname does not match', () => {
    const text = "Visit [Home](https://example.com/about#section)";
    const currentPathname = "/home";
    const result = parseMarkdown(text, currentPathname);
    const { getByText } = render(<>{result}</>);
    const link = getByText('Home');
    expect(link.getAttribute('href')).toBe('https://example.com/about#section');
  });

  it('handles text without markdown correctly', () => {
    const text = "Just some plain text.";
    const result = parseMarkdown(text);
    const { container } = render(<>{result}</>);
    expect(container.textContent.trim()).toBe("Just some plain text.");
  });

  it('parses multiple markdown elements in text', () => {
    const text = "**Bold** and [Link](https://link.com)";
    const result = parseMarkdown(text);
    const { container, getByText } = render(<>{result}</>);
    expect(container.querySelector('strong')).toHaveTextContent('Bold');
    expect(getByText('Link').getAttribute('href')).toBe('https://link.com/');
  });
});
