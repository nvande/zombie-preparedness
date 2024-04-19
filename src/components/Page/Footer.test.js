import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  const mockProps = {
    primaryLinks: [
      { label: 'Home', href: '/home' },
      { label: 'About', href: '/about' }
    ],
    logoImgSrc: '/logo.png',
    agencyName: 'Test Agency',
    socialLinks: [
      { iconSrc: '/social-icon.png', href: '/social', label: 'social' }
    ],
    contactCenter: 'Contact Us',
    contactLinks: [
      { label: 'Email Us', href: 'mailto:test@example.com' }
    ],
    attributions: [
      'Test Attribution'
    ],
    disclaimer: 'All rights reserved.'
  };

  it('renders the footer with all provided props', () => {
    render(<Footer {...mockProps} />);

    // Check if the agency name is displayed
    expect(screen.getByText(mockProps.agencyName)).toBeInTheDocument();

    // Check if primary links are rendered
    expect(screen.getByText('Home')).toHaveAttribute('href', '/home');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');

    // Check social link
    const socialLink = screen.getByTestId('social-social');
    expect(socialLink).toHaveAttribute('href', '/social');

    // Check contact link
    expect(screen.getByText('Email Us')).toHaveAttribute('href', 'mailto:test@example.com');

    // Check attribution and disclaimer
    expect(screen.getByText("Test Attribution")).toBeInTheDocument();
    expect(screen.getByText(mockProps.disclaimer)).toBeInTheDocument();
  });

  it('scrolls to the top when "Return to top" is clicked', () => {
    window.scrollTo = jest.fn();

    render(<Footer {...mockProps} />);
    const returnToTopButton = screen.getByText('Return to top');
    fireEvent.click(returnToTopButton);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });
});
