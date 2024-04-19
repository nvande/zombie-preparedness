import React from "react";

import Attribution from "../Typography/Attribution";
import Anchor from "../Page/Anchor";

import { IconListProps } from "../../types/types";

const IconList: React.FC<IconListProps> = ({
  title,
  type = "default",
  content,
  sourceAuthor,
  sourceType,
  sourceTitle,
  sourceDate,
  sourceUrl,
  id
}) => {
  const renderItems = () => {
    if (
      type === "do-donot" &&
      typeof content !== "string" &&
      "Do" in content &&
      "DoNot" in content
    ) {
      return (
        <>
          {content.Do.map((item, index) => (
            <li key={`do-${index}`} className="usa-icon-list__item">
              <div className="usa-icon-list__icon text-green">
                <svg className="usa-icon" aria-hidden="true" role="img">
                  <use xlinkHref="/assets/uswds/img/sprite.svg#check_circle"></use>
                </svg>
              </div>
              <div className="usa-icon-list__content">{item}</div>
            </li>
          ))}
          {content.DoNot.map((item, index) => (
            <li key={`do-not-${index}`} className="usa-icon-list__item">
              <div className="usa-icon-list__icon text-red">
                <svg className="usa-icon" aria-hidden="true" role="img">
                  <use xlinkHref="/assets/uswds/img/sprite.svg#cancel"></use>
                </svg>
              </div>
              <div className="usa-icon-list__content">{item}</div>
            </li>
          ))}
        </>
      );
    }

    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <li key={index} className="usa-icon-list__item">
          <div className="usa-icon-list__icon">
            <svg className="usa-icon" aria-hidden="true" role="img">
              <use xlinkHref="/assets/uswds/img/sprite.svg#check_circle"></use>
            </svg>
          </div>
          <div className="usa-icon-list__content">{item}</div>
        </li>
      ));
    }

    return <p>Invalid content type for the list.</p>;
  };

  return (
    <div className="grid-container margin-bottom-8">
      {id && <Anchor id={id}/>}
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col">
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1 margin-top-0">
            {title}
          </h3>
          <ul className="usa-icon-list">{renderItems()}</ul>
        </div>
      </div>
      <Attribution
        author={sourceAuthor}
        title={sourceTitle}
        type={sourceType}
        date={sourceDate}
        source={sourceUrl}
      />
    </div>
  );
};

export default IconList;
