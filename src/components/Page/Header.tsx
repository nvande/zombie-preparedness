import React from "react";

import siteData from "../../SiteData.json";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

type HeaderProps = {
  projectTitle: string;
  currentSection?: NavItem;
  sections: NavItem[];
  logoImgSrc?: string;
  searchIconSrc?: string;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
  onSearchSubmit?: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({
  projectTitle,
  currentSection,
  sections,
  logoImgSrc = "../../assets/uswds/img/usa-icons/close.svg",
  searchIconSrc = "../../assets/uswds/img/usa-icons-bg/search--white.svg",
  onMenuClick,
  onCloseClick,
  onSearchSubmit,
}) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchValue);
    }
  };

  return (
    <div>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
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
                  src={siteData.siteLogo}
                  className="usa-logo__img width-8 margin-right-1"
                  alt="Logo"
                />
                {projectTitle}
              </a>
            </div>
            <button
              type="button"
              className="usa-menu-btn"
              onClick={onMenuClick}
            >
              Menu
            </button>
          </div>
          <nav aria-label="Primary navigation" className="usa-nav">
            <button
              type="button"
              className="usa-nav__close"
              onClick={onCloseClick}
            >
              <img src={logoImgSrc} role="img" alt="Close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              {sections.map((section, index) => (
                <li key={index} className="usa-nav__primary-item">
                  {section.children ? (
                    <React.Fragment>
                      <button
                        type="button"
                        className={`usa-accordion__button usa-nav__link ${
                          currentSection?.label === section.label
                            ? "usa-current"
                            : ""
                        }`}
                        aria-expanded="false"
                        aria-controls={`basic-nav-section-${index}`}
                      >
                        <span>{section.label}</span>
                      </button>
                      <ul
                        id={`basic-nav-section-${index}`}
                        className="usa-nav__submenu"
                      >
                        {section.children.map((item, childIndex) => (
                          <li
                            key={childIndex}
                            className="usa-nav__submenu-item"
                          >
                            <a href={item.link}>
                              <span>{item.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ) : (
                    <a href={section.link} className="usa-nav-link">
                      <span>{section.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <section aria-label="Search component">
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
            </section>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
