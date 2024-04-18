import React from 'react';

type FooterLink = {
    label: string;
    href: string;
    iconSrc?: string;
};

type FooterProps = {
    returnToTopHref: string;
    primaryLinks: FooterLink[];
    logoImgSrc: string;
    agencyName: string;
    socialLinks: FooterLink[];
    contactCenter: string;
    contactLinks: FooterLink[];
};

const Footer: React.FC<FooterProps> = ({
    returnToTopHref,
    primaryLinks,
    logoImgSrc,
    agencyName,
    socialLinks,
    contactCenter,
    contactLinks
}) => {
    return (
        <footer className="usa-footer">
            <div className="grid-container usa-footer__return-to-top">
                <a href={returnToTopHref}>Return to top</a>
            </div>
            <div className="usa-footer__primary-section">
                <nav className="usa-footer__nav" aria-label="Footer navigation">
                    <ul className="grid-row grid-gap">
                        {primaryLinks.map((link, index) => (
                            <li key={index} className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                                <a className="usa-footer__primary-link" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="usa-footer__secondary-section">
                <div className="grid-container">
                    <div className="grid-row grid-gap">
                        <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                            <div className="mobile-lg:grid-col-auto">
                                <img className="usa-footer__logo-img" src={logoImgSrc} alt={agencyName} />
                            </div>
                            <div className="mobile-lg:grid-col-auto">
                                <p className="usa-footer__logo-heading">{agencyName}</p>
                            </div>
                        </div>
                        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                            <div className="usa-footer__social-links grid-row grid-gap-1">
                                {socialLinks.map((social, index) => (
                                    <div key={index} className="grid-col-auto">
                                        <a className="usa-social-link" href={social.href}>
                                            <img className="usa-social-link__icon" src={social.iconSrc} alt={social.label} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <p className="usa-footer__contact-heading">{contactCenter}</p>
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
        </footer>
    );
};

export default Footer;
