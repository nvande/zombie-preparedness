import React from "react";

import Anchor from "../Page/Anchor";

import { CollectionProps } from "../../types/types";

const Collection: React.FC<CollectionProps> = ({ title, content, id }) => {
  return (
    <div className="margin-bottom-8">
      {id && <Anchor id={id}/>}
      <h3 className="site-preview-heading margin-top-0">{title}</h3>
      <ul className="usa-collection width-full">
        {content.map((item, index) => (
          <li key={index} className="usa-collection__item">
            <div className="usa-collection__body">
              <h4 className="usa-collection__heading">
                <a className="usa-link" href={item.link}>
                  {item.title}
                </a>
              </h4>
              {item.description && (
                <p className="usa-collection__description">
                  {item.description}
                </p>
              )}
              <ul
                className="usa-collection__meta"
                aria-label="More information"
              >
                {item.authors &&
                  item.authors.map((author, idx) => (
                    <li key={idx} className="usa-collection__meta-item">
                      By <span>{author}</span>
                    </li>
                  ))}
                {item.date && (
                  <li className="usa-collection__meta-item">
                    <time dateTime={new Date(item.date).toISOString()}>
                      {new Date(item.date).toLocaleDateString()}
                    </time>
                  </li>
                )}
              </ul>
              <ul className="usa-collection__meta" aria-label="Topics">
                {item.tags &&
                  item.tags.map((tag, tagIdx) => (
                    <li
                      key={tagIdx}
                      className="usa-collection__meta-item usa-tag"
                    >
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collection;
