import React from "react";

import Attribution from "../Typography/Attribution";
import Anchor from "../Page/Anchor";

import { IconListProps } from "../../types/types";

const checkCircle =
  require("../../assets/uswds/img/material-icons/check_circle.svg").default;
const cancel =
  require("../../assets/uswds/img/material-icons/cancel.svg").default;

const IconList: React.FC<IconListProps> = ({
  title,
  type = "default",
  content,
  sourceAuthor,
  sourceType,
  sourceTitle,
  sourceDate,
  sourceUrl,
  id,
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
              <div className="usa-icon-list__icon minw-4">
                <img
                  className="usa-icon w-full"
                  aria-hidden="true"
                  style={greenImg}
                  src={checkCircle}
                />
              </div>
              <div className="usa-icon-list__content">{item}</div>
            </li>
          ))}
          {content.DoNot.map((item, index) => (
            <li key={`do-not-${index}`} className="usa-icon-list__item">
              <div className="usa-icon-list__icon minw-4">
                <img
                  className="usa-icon w-full"
                  aria-hidden="true"
                  style={redImg}
                  src={cancel}
                />
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
            <img className="usa-icon minw-4" aria-hidden="true" src={checkCircle} />
          </div>
          <div className="usa-icon-list__content">{item}</div>
        </li>
      ));
    }

    return <p>Invalid content type for the list.</p>;
  };

  return (
    <div className="margin-bottom-8">
      {id && <Anchor id={id} />}
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

const greenImg: React.CSSProperties = {
  filter:
    "invert(44%) sepia(10%) saturate(6304%) hue-rotate(47deg) brightness(91%) contrast(101%)",
};

const redImg: React.CSSProperties = {
  filter:
    "invert(29%) sepia(83%) saturate(5131%) hue-rotate(355deg) brightness(87%) contrast(106%)",
};

export default IconList;
