import React from "react";

import { GraphicItem, GraphicItemSectionProps } from "../../types/types";

const GraphicItemSection: React.FC<GraphicItemSectionProps> = ({
  items,
}) => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      {items
        .reduce<GraphicItem[][]>((result, _value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
          }
          return result;
        }, [])
        .map((pair, index) => (
          <div key={index} className="grid-row grid-gap">
            {pair.map((item, idx) => (
              <div
                key={idx}
                className="usa-media-block tablet:grid-col margin-bottom-205"
              >
                <img
                  className="usa-media-block__img height-10 width-10"
                  src={item.imageUrl}
                  alt={item.imageAlt}
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  </section>
);

export default GraphicItemSection;
