import React from "react";

import { FooterProps } from "../../types/types";

import parseMarkdown from "../../utility/parseMarkdown";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer: React.FC<FooterProps> = ({
  primaryLinks,
  logoImgSrc,
  agencyName,
  socialLinks,
  contactCenter,
  contactLinks,
  attributions,
  disclaimer,
}) => {
  return (
    <footer className="usa-footer">
      <div className="grid-container usa-footer__return-to-top">
        <button
          className="usa-link border-0"
          onClick={() => scrollToTop()}
          style={{ cursor: "pointer", background: "transparent" }}
        >
          Return to top
        </button>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 grid-gap flex-row flex-align-center">
              <div className="grid-col-3 mobile-lg:grid-col-4 tablet:grid-col-3">
                <img
                  className="usa-footer__logo-img maxw-full"
                  src={logoImgSrc}
                  alt={agencyName}
                />
              </div>
              <div className="mobile-lg:grid-col-8 padding-right-5 mobile-lg:padding-0">
                <p className="usa-footer__logo-heading">{agencyName}</p>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                {socialLinks.map((social, index) => (
                  <div key={index} className="grid-col-auto">
                    <a className="usa-social-link" href={social.href} data-testid={`social-${social.label}`}>
                      <img
                        className="usa-social-link__icon"
                        src={social.icon}
                        alt={social.label}
                      />
                    </a>
                  </div>
                ))}
              </div>
              <p className="usa-footer__contact-heading margin-y-2">
                {contactCenter}
              </p>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  {contactLinks.map((contact, index) => (
                    <div key={index} className="grid-col-auto">
                      <a href={contact.href}>{contact.label}</a>
                    </div>
                  ))}
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="usa-footer__primary-section bg-base-darkest">
        <nav className="usa-footer__nav" aria-label="Footer navigation">
          <ul className="grid-row grid-gap">
            {primaryLinks.map((link, index) => (
              <li
                key={index}
                className="mobile-lg:grid-col-auto usa-footer__primary-content"
              >
                <a
                  className="text-center usa-footer__primary-link text-white padding-y-3 padding-x-1 font-sans-3xs text-thin"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-primary-light padding-3">
        {attributions &&
          attributions.map((attribution, index) => (
            <div
              key={index}
              className="grid-col-auto text-center font-serif-3xs"
            >
              {parseMarkdown(attribution)}
            </div>
          ))}
        <div className="grid-col-auto text-center font-serif-xs margin-top-2">
          {disclaimer}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
