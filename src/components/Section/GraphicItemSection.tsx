import React from "react";

type GraphicItemProps = {
  title: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
};

const GraphicItemSection: React.FC<{ items: GraphicItemProps[] }> = ({ items }) => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      {items.reduce<GraphicItemProps[][]>((result, value, index, array) => {
        if (index % 2 === 0) {  // Check if the index is even
          result.push(array.slice(index, index + 2));  // Push an array of two items
        }
        return result;
      }, []).map((pair, index) => (
        <div key={index} className="grid-row">
          {pair.map((item, idx) => (
            <div key={idx} className="usa-media-block tablet:grid-col margin-bottom-205">
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
