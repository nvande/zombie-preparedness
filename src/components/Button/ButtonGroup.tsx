import React from "react";
import { Link } from "react-router-dom";
import Anchor from "../Page/Anchor";

import { ButtonGroupProps, ButtonInfo } from "../../types/types";

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  isSegmented = true,
  customClass = "",
  id,
}) => {
  const buttonClassName = (type: string = "default") => {
    switch (type) {
      case "outline":
        return "usa-button usa-button--outline";
      case "accent-cool":
        return "usa-button usa-button--accent-cool";
      case "accent-warm":
        return "usa-button usa-button--accent-warm";
      case "base":
        return "usa-button usa-button--base";
      case "big":
        return "usa-button usa-button--big";
      case "inverse":
        return "usa-button usa-button--outline usa-button--inverse";
      case "secondary":
        return "usa-button usa-button--secondary";
      default:
        return "usa-button";
    }
  };

  const renderButton = (button: ButtonInfo) => {
    const className = buttonClassName(button.type);

    if (button.url) {
      const isExternal = /^https?:\/\//.test(button.url);
      if (isExternal) {
        return (
          <a href={button.url} className={className}>
            {button.label}
          </a>
        );
      } else {
        return (
          <Link to={button.url} className={className}>
            {button.label}
          </Link>
        );
      }
    } else {
      return (
        <button type="button" className={className} onClick={button.onClick}>
          {button.label}
        </button>
      );
    }
  };

  return (
    <div>
      {id && <Anchor id={id} />}
      <ul
        className={`usa-button-group ${
          isSegmented ? "usa-button-group--segmented" : ""
        } ${customClass}`}
      >
        {buttons.map((button, index) => (
          <li key={index} className="usa-button-group__item">
            {renderButton(button)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
