import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

import siteData from '../../SiteData.json';

interface Props {
  children: ReactNode;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div style={style}>
      <Header projectTitle="US Department of Supernatural Defense" sections={[]} />
      <main id="main-content">
        {children}
      </main>
      <Footer
        returnToTopHref={""}
        primaryLinks={[]}
        logoImgSrc={""}
        agencyName={"Zombie Protection Agency"}
        socialLinks={siteData.socialLinks}
        contactCenter={""}
        contactLinks={[]}
      />
    </div>
  );
};

const style: React.CSSProperties = {
  fontFamily:
    "system, -apple-system, BlinkMacSystemFont, Helvetica Neue, Lucida Grande",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

export default Page;
