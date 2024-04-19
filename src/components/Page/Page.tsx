import React, { ReactNode } from "react";

import Alert from "../Alert/Alert";
import Header from "./Header";
import Footer from "./Footer";

import siteData from "../../SiteData";
interface Props {
  children: ReactNode;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className="page">
      <div className="usa-overlay"></div>
      <Alert
        heading={siteData.alert.heading}
        content={siteData.alert.content}
      />
      <Header
        projectTitle={siteData.title}
        logoImg={siteData.logo}
        sections={siteData.sections}
      />
      <main id="main-content">{children}</main>
      <Footer
        primaryLinks={siteData["primaryLinks:"]}
        logoImgSrc={siteData.logo}
        agencyName={siteData.title}
        socialLinks={siteData.socialLinks}
        contactCenter={siteData.contactData.title}
        contactLinks={siteData.contactData.contactLinks}
        attributions={siteData.attributions}
        disclaimer={siteData.disclaimer}
      />
    </div>
  );
};

export default Page;
