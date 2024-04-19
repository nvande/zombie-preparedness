import React from "react";

import Anchor from "../Page/Anchor";

import { ProcessListProps } from "../../types/types";

const ProcessList: React.FC<ProcessListProps> = ({ title, content, id }) => {
  return (
    <div className="grid-container margin-bottom-5">
      {id && <Anchor id={id}/>}
      <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1 margin-top-0">
        {title}
      </h3>
      <ol className="usa-process-list">
        {content.map((item, index) => (
          <li key={index} className="usa-process-list__item">
            <h4 className="usa-process-list__heading">Step {index + 1}</h4>
            <p className="margin-top-05">{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessList;
