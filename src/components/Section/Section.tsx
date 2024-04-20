import React from "react";

import parseMarkdown from "../../utility/parseMarkdown";

import { SectionProps } from "../../types/types";

const bodyClass = 'font-body-lg text-light';

const Section: React.FC<SectionProps> = ({
  heading,
  content,
  actionLabel,
  actionLink,
  children,
}) => (
  <section className="usa-section">
    <div className="grid-container">
      {heading && <h2 className="font-heading-xl margin-y-0">{heading}</h2>}
      {content &&
        (typeof content === "string" ? (
          <p className={bodyClass}>{parseMarkdown(content)}</p>
        ) : (
          content.map((item, index) => <p className={bodyClass} key={index}>{parseMarkdown(item)}</p>)
        ))}
      {actionLabel && actionLink && (
        <a className="usa-button usa-button--big margin-top-3" href={actionLink}>
          {actionLabel}
        </a>
      )}
      {children}
    </div>
  </section>
);

export default Section;
