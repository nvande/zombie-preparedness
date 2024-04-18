import React from 'react';

type AttributionProps = {
  author?: string;
  year?: string;
  title?: string;
  source?: string;
};

const Attribution: React.FC<AttributionProps> = ({ author, year, title, source }) => {
  return (
    <div className="usa-prose">
      <p className="citation">
        {author && `${author}`}
        {year && ` (${year})`}
        {title && `. <em>${title}</em>`}
        {source && ` Retrieved from `}
        {source && <a href={source}>{source}</a>}
      </p>
    </div>
  );
};

export default Attribution;
