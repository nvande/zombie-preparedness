import React from "react";

type PageTitleProps = {
  showTitle?: boolean;
  heading?: string;
  subheading?: string;
  author?: string;
  attribution?: string;
  copyright?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({
  showTitle = true,
  heading,
  subheading,
  author,
  attribution,
  copyright,
}) => {
  const attributionLine = `${attribution || ""}${
    author ? ", author " + author : ""
  }`;

  return (
    <div className="margin-bottom-4">
      <div className="usa-prose">
        {showTitle && heading && <h2>{heading}</h2>}
        {showTitle && subheading && <h3 className="usa-intro">{subheading}</h3>}
        {attribution && <div><em>{heading}{` - `}</em>{attributionLine}</div>}
        {copyright && (
          <div>
            <strong>Copyright:</strong> {copyright}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
