import React, { useState } from "react";

import ButtonGroup from "../Button/ButtonGroup";
import Anchor from "../Page/Anchor";

import parseMarkdown from "../../utility/parseMarkdown";

import { SignupProps } from "../../types/types";

const Signup: React.FC<SignupProps> = ({ formConfig, sidebarConfig, id }) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleMultiSelectChange = (
    id: string,
    value: string,
    isChecked: boolean
  ) => {
    const updatedArray = isChecked
      ? [...(formData[id] || []), value]
      : (formData[id] || []).filter((item: string) => item !== value);
    setFormData({ ...formData, [id]: updatedArray });
  };

  return (
    <div className="grid-container border-1px border-base-lighter padding-bottom-4 padding-top-6">
      {id && <Anchor id={id} />}
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-6">
          <form className="usa-form">
            {formConfig.fields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="usa-label">
                  {field.label}
                </label>
                {field.type === "multi-select" && field.options ? (
                  <fieldset className="usa-fieldset">
                    {field.options.map((option) => (
                      <div
                        key={option.value}
                        className="usa-checkbox usa-checkbox--tile"
                      >
                        <input
                          className="usa-checkbox__input usa-checkbox__input--tile width-full"
                          id={`${field.id}-${option.value}`}
                          type="checkbox"
                          name={field.id}
                          value={option.value}
                          checked={formData[field.id]?.includes(option.value)}
                          onChange={(e) =>
                            handleMultiSelectChange(
                              field.id,
                              option.value,
                              e.target.checked
                            )
                          }
                          disabled={option.disabled}
                        />
                        <label
                          className="usa-checkbox__label"
                          htmlFor={`${field.id}-${option.value}`}
                        >
                          {option.label}
                          {option.description && (
                            <span className="usa-checkbox__label-description">
                              {option.description}
                            </span>
                          )}
                        </label>
                      </div>
                    ))}
                  </fieldset>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    className="usa-input"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ""}
                    onChange={(e) =>
                      handleInputChange(field.id, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
          </form>
          <div className="margin-top-5">
            <ButtonGroup buttons={formConfig.buttons} />
          </div>
        </div>
        <div className="tablet:grid-col-6">
          <aside>
            <h3 className="usa-heading">{sidebarConfig.title}</h3>
            {sidebarConfig.content.map((item, index) => (
              <div key={index}>
                {item.title && <h4 className="usa-heading">{item.title}</h4>}
                <p className="margin-y-3">{parseMarkdown(item.text)}</p>
                {item.list && (
                  <ul>
                    {item.list.map((listItem, idx) => (
                      <li key={idx}>{parseMarkdown(listItem)}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Signup;
