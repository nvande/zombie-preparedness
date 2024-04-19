import React from "react";

import { SummaryBoxProps } from "../../types/types";

const SummaryBox: React.FC<SummaryBoxProps> = ({ heading, items }) => {
  return (
    <div className="margin-bottom-3">
      <div
        className="usa-summary-box"
        role="region"
        aria-labelledby="summary-box-key-information"
      >
        <div className="usa-summary-box__body">
          <h3
            className="usa-summary-box__heading"
            id="summary-box-key-information"
          >
            {heading}
          </h3>
          <div className="usa-summary-box__text">
            <ul className="usa-list">
              {items.map((item, index) => (
                <li key={index}>
                  <span>{item.beforeText}</span>
                  <a className="usa-summary-box__link" href={`#${item.linkId}`}>
                    {item.textLink}
                  </a>
                  <span>{item.afterText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
