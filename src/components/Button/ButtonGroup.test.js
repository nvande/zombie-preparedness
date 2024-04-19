import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ButtonGroup from "./ButtonGroup";

describe('ButtonGroup', () => {
  it('renders a group of buttons', () => {
    const buttons = [
      { label: 'Home', url: '/', type: 'default' },
      { label: 'External', url: 'https://example.com', type: 'outline' },
      { label: 'Click Me', onClick: jest.fn(), type: 'accent-cool' }
    ];

    render(
      <MemoryRouter>
        <ButtonGroup buttons={buttons} isSegmented={true} customClass="extra-class" />
      </MemoryRouter>
    );

    // Expect the internal link to be rendered
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');

    // Expect the external link to be rendered
    const externalLink = screen.getByText('External');
    expect(externalLink.tagName).toBe('A');
    expect(externalLink).toHaveAttribute('href', 'https://example.com');
    expect(externalLink).toHaveClass('usa-button usa-button--outline');

    // Expect the button with an onClick handler
    expect(screen.getByText('Click Me').tagName).toBe('BUTTON');
    expect(screen.getByText('Click Me')).toHaveClass('usa-button usa-button--accent-cool');
  });

  it('applies custom classes correctly', () => {
    const buttons = [{ label: 'Test', type: 'big' }];
    render(
      <MemoryRouter>
        <ButtonGroup buttons={buttons} customClass="custom-class" />
      </MemoryRouter>
    );

    expect(screen.getByText('Test')).toHaveClass('usa-button usa-button--big');
    expect(screen.getByRole('list')).toHaveClass('usa-button-group custom-class');
  });

  it('handles segmented class based on prop', () => {
    const buttons = [{ label: 'Segmented', type: 'default' }];

    // Test with segmented
    const { rerender } = render(
      <MemoryRouter>
        <ButtonGroup buttons={buttons} isSegmented={true} />
      </MemoryRouter>
    );
    expect(screen.getByRole('list')).toHaveClass('usa-button-group--segmented');

    // Test without segmented
    rerender(
      <MemoryRouter>
        <ButtonGroup buttons={buttons} isSegmented={false} />
      </MemoryRouter>
    );
    expect(screen.getByRole('list')).not.toHaveClass('usa-button-group--segmented');
  });
});
