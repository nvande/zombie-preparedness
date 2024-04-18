import React from 'react';

type HeroProps = {
  heading: string;
  subheading: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
};

const HeroSection: React.FC<HeroProps> = ({ heading, subheading, description, ctaLabel, ctaLink }) => (
  <section className="usa-hero" aria-label="Introduction">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h1 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">{subheading}</span>{heading}
        </h1>
        <p>{description}</p>
        <a className="usa-button margin-top-2" href={ctaLink}>{ctaLabel}</a>
      </div>
    </div>
  </section>
);

export default HeroSection;
