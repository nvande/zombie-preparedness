import React from "react";

import { HeroSectionProps } from "../../types/types";

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  content,
  heading,
  subheading,
  description,
  ctaLabel,
  ctaLink,
  backgroundImage,
  showcallout = false,
}) => (
  <section
    className="usa-hero"
    aria-label="Introduction"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="grid-container">
      {title && (
        <div
          className="usa-prose padding-4 padding-top-8 padding-bottom-6"
          style={bgStyle}
        >
          <span className="text-bold font-heading-xl tablet:font-heading-2xl desktop:font-heading-3xl">
            {title}
          </span>
          {subtitle && (
            <span className="usa-intro text-bold font-heading-xl tablet:font-heading-2xl desktop:font-heading-3xl">
              {subtitle}
            </span>
          )}
          {content && <p className="font-sans-2xs tablet:font-sans-xs desktop:font-sans-sm">{content}</p>}
        </div>
      )}
      {showcallout && (heading || description || ctaLabel) && (
        <div className="usa-hero__callout margin-top-4 desktop:margin-top-0">
          {heading && (
            <h1 className="usa-hero__heading">
              {subheading && (
                <span className="usa-hero__heading--alt">{subheading}</span>
              )}
              {heading}
            </h1>
          )}
          {description && <p>{description}</p>}
          {ctaLabel && ctaLink && (
            <a className="usa-button margin-top-2" href={ctaLink}>
              {ctaLabel}
            </a>
          )}
        </div>
      )}
    </div>
  </section>
);

const bgStyle: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,.6)",
};

export default HeroSection;
