import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { HeaderProps } from "../../types/types";

const searchIconSrc = require("../../assets/uswds/img/usa-icons-bg/search--white.svg").default;
const closeIconSrc = require("../../assets/uswds/img/material-icons/close.svg").default;

const Header: React.FC<HeaderProps> = ({
  projectTitle,
  sections,
  logoImg,
  onSearchSubmit,
}) => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit?.(searchValue);
  };

  const isActive = (path: string) => {
    return path === pathname;
  };

  return (
    <header className="usa-header usa-header--extended bg-primary">
      <div className="usa-navbar border-0">
        <div
          className="usa-logo width-12"
          id="basic-logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <a
            href="/"
            title={projectTitle}
            className="usa-logo__text"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logoImg}
              className="usa-logo__img width-8 margin-right-2 margin-top-4 desktop:margin-top-0"
              alt="Logo"
            />
            <span className="text-white desktop:font-sans-lg">{projectTitle}</span>
          </a>
        </div>
        <button type="button" className="margin-2 bg-primary-darker usa-menu-btn" onClick={() => setIsVisible(!isVisible)}>
          Menu
        </button>
      </div>
      <nav
      aria-label="Primary navigation"
      className={`usa-nav bg-white ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="usa-nav__inner">
          <button
            type="button"
            className="usa-nav__close"
            onClick={() => setIsVisible(false)}
          >
            <img src={closeIconSrc} alt="Close" />
          </button>
          <ul className="usa-nav__primary usa-accordion">
            {sections.map((section, index) => (
              <li
                key={index}
                className={`usa-nav__primary-item ${
                  isActive(section.link) ? "usa-current" : ""
                }`}
              >
                {section.children ? (
                  <React.Fragment>
                    <button
                      type="button"
                      className="usa-accordion__button usa-nav__link"
                      aria-expanded="false"
                      aria-controls={`extended-nav-section-${index}`}
                    >
                      {section.label}
                    </button>
                    <ul
                      id={`extended-nav-section-${index}`}
                      className="usa-nav__submenu"
                    >
                      {section.children.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className={`usa-nav__submenu-item ${
                            isActive(child.link) ? "usa-current" : ""
                          }`}
                        >
                          <a href={child.link}>{child.label}</a>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ) : (
                  <a
                    href={section.link}
                    className={`usa-nav-link ${
                      isActive(section.link) ? "usa-current" : ""
                    }`}
                  >
                    {section.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="usa-nav__secondary">
            <form
              className="usa-search usa-search--small"
              role="search"
              onSubmit={handleSearchSubmit}
            >
              <label className="usa-sr-only" htmlFor="search-field">
                Search
              </label>
              <input
                className="usa-input"
                id="search-field"
                type="search"
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="usa-button" type="submit">
                <img
                  src={searchIconSrc}
                  className="usa-search__submit-icon"
                  alt="Search"
                />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
