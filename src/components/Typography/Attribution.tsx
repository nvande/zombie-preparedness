import React from "react";

type AttributionProps = {
  author?: string;
  date?: string;
  title?: string;
  source?: string;
  type?: string;
  copyright?: string;
};

const Attribution: React.FC<AttributionProps> = ({
  author,
  date,
  title,
  source,
  type,
  copyright,
}) => {
  return (
    <div className="usa-prose float-right maxw-full font-serif-3xs">
      <p className="citation">
        {author && <span>{author}</span>}
        {date && (
          <>
            {" "}
            <span>{date}</span>
          </>
        )}
        {title && (
          <>
            {". "}
            <em>{title}</em>
          </>
        )}
        {source && `. Retrieved from `}
        {source && (
          <a href={source} style={{ wordWrap: "break-word" }}>
            {source}
          </a>
        )}
        {source && type && (
          <>
            <span>{` [${type}]`}</span>
          </>
        )}
        {copyright && (
          <>
            <strong>Copyright:</strong> <span>{copyright}</span>
          </>
        )}
      </p>
    </div>
  );
};

export default Attribution;
