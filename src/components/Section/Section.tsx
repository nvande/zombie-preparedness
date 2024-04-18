import React from 'react';

type SectionProps = {
  heading: string;
  content: string;
  actionLabel: string;
  actionLink: string;
};

const Section: React.FC<SectionProps> = ({ heading, content, actionLabel, actionLink }) => (
  <section className="usa-section">
    <div className="grid-container">
      <h2 className="font-heading-xl margin-y-0">{heading}</h2>
      <p className="usa-intro">{content}</p>
      <a className="usa-button usa-button--big" href={actionLink}>{actionLabel}</a>
    </div>
  </section>
);

export default Section;
