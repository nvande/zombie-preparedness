import React from "react";
import parseMarkdown from "../../utility/parseMarkdown";

type PageContentProps = {
  heading?: string;
  content?: string | string[];
  actionLabel?: string;
  actionLink?: string;
};

const PageContent: React.FC<PageContentProps> = ({
  heading,
  content,
  actionLabel,
  actionLink,
}) => (
  <article className="margin-bottom-6">
    {heading && <h2 className="font-heading-xl margin-y-0">{heading}</h2>}
    {content &&
      (typeof content === "string" ? (
        <p>{parseMarkdown(content)}</p>
      ) : (
        content.map((item, index) => <p key={index}>{parseMarkdown(item)}</p>)
      ))}
    {actionLabel && actionLink && (
      <a className="usa-button usa-button--big" href={actionLink}>
        {actionLabel}
      </a>
    )}
  </article>
);

export default PageContent;
