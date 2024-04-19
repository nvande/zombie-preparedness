import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe('HeroSection', () => {
  const bgUrl = "path/to/background.jpg";

  it('renders the title and subtitle correctly', () => {
    render(
      <HeroSection
        title="Main Title"
        subtitle="Sub Title"
        backgroundImage={bgUrl}
      />
    );
    expect(screen.getByText("Main Title")).toBeInTheDocument();
    expect(screen.getByText("Sub Title")).toBeInTheDocument();
  });

  it('applies background image correctly', () => {
    render(<HeroSection backgroundImage={bgUrl} />);
    expect(screen.getByRole('region')).toHaveStyle(`backgroundImage: url(${bgUrl})`);
  });

  it('renders callout elements when showcallout is true', () => {
    render(
      <HeroSection
        showcallout={true}
        heading="Callout Heading"
        subheading="Subheading Here"
        description="Detailed description here."
        ctaLabel="Learn More"
        ctaLink="#"
        backgroundImage={bgUrl}
      />
    );
    expect(screen.getByText("Callout Heading")).toBeInTheDocument();
    expect(screen.getByText("Subheading Here")).toBeInTheDocument();
    expect(screen.getByText("Detailed description here.")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
  });

  it('does not render callout elements when showcallout is false', () => {
    render(
      <HeroSection
        showcallout={false}
        heading="Callout Heading"
        description="Detailed description here."
        ctaLabel="Learn More"
        backgroundImage={bgUrl}
      />
    );
    expect(screen.queryByText("Callout Heading")).toBeNull();
    expect(screen.queryByText("Detailed description here.")).toBeNull();
    expect(screen.queryByText("Learn More")).toBeNull();
  });

  it('does not display title if not provided', () => {
    render(<HeroSection backgroundImage={bgUrl} />);
    expect(screen.queryByText("Main Title")).toBeNull();
  });

  it('shows default styles when bgStyle is not customized', () => {
    const { container } = render(<HeroSection title="Main Title" backgroundImage={bgUrl} />);
    const proseDiv = container.querySelector('.usa-prose');
    expect(proseDiv).toHaveStyle(`backgroundColor: rgba(0,0,0,.6)`);
  });
});
