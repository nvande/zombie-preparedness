import React from "react";

import Attribution from "../Typography/Attribution";
import Anchor from "../Page/Anchor";

import { ScrollableTableProps } from "../../types/types";

const ScrollableTable: React.FC<ScrollableTableProps> = ({
  title,
  content,
  attribution,
  sourceUrl,
  sourceDate,
  id,
}) => {
  const headers = content.length > 0 ? Object.keys(content[0]) : [];

  return (
    <div className="margin-bottom-10">
      {id && <Anchor id={id} />}
      {title && <h3 className="font-heading-lg">{title}</h3>}
      <div className="usa-table-container--scrollable" tabIndex={0}>
        <table className="usa-table usa-table--borderless width-full">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} data-sortable scope="col" role="columnheader">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, headerIndex) => (
                  <td
                    key={headerIndex}
                    className="font-mono-sm text-tabular text-right"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {attribution && (
        <Attribution
          author={attribution}
          title={title}
          date={sourceDate}
          source={sourceUrl}
        />
      )}
    </div>
  );
};

export default ScrollableTable;
