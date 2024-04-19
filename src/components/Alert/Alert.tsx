import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { AlertProps } from "../../types/types";
import parseMarkdown from "../../utility/parseMarkdown";
import './Alert.css';

const Alert: React.FC<AlertProps> = ({
  type = "emergency",
  heading,
  content,
  linkText,
  linkHref,
  isSlim = false,
  noIcon = false,
}) => {
  const location = useLocation();
  const lastPath = useRef(location.pathname);
  let alertClasses = `usa-alert usa-alert--${type}`;

  if (isSlim) {
    alertClasses += " usa-alert--slim";
  }
  if (noIcon) {
    alertClasses += " usa-alert--no-icon";
  }

  useEffect(() => {
    if (location.hash && lastPath.current === location.pathname) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 500);
      }
    }
    lastPath.current = location.pathname;
  }, [location]);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className="usa-alert__text">
          {content.map((item, index) => (
            <li key={index}>{parseMarkdown(item, location.pathname)}</li>
          ))}
        </ul>
      );
    }
    return <p className="usa-alert__text">{parseMarkdown(content, location.pathname)}</p>;
  };

  return (
    <div className={`${alertClasses} margin-top-0`} role={type === "error" || type === "emergency" ? "alert" : undefined}>
      <div className="usa-alert__body">
        {heading && <h4 className="usa-alert__heading">{heading}</h4>}
        {renderContent()}
        {linkText && linkHref && (
          <a className="usa-link" href={linkHref}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Alert;
