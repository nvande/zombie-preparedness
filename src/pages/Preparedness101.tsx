import React from "react";

import Page from "../components/Page/Page";
import Section from "../components/Section/Section";
import HeroSection from "../components/Section/HeroSection";
import GraphicListSection from "../components/Section/GraphicItemSection";

import pageData from './HomepageData.json';

const Homepage: React.FC = () => {
  return (
    <Page>
      <HeroSection
        heading={pageData.heroSection.heading}
        subheading={pageData.heroSection.subheading}
        description={pageData.heroSection.description}
        ctaLabel={pageData.heroSection.ctaLabel}
        ctaLink={pageData.heroSection.ctaLink}
      />
      <GraphicListSection items={pageData.graphicListItems} />
      <Section
        heading={pageData.finalSection.heading}
        content={pageData.finalSection.content}
        actionLabel={pageData.finalSection.actionLabel}
        actionLink={pageData.finalSection.actionLink}
      />
    </Page>
  );
};

export default Homepage;
