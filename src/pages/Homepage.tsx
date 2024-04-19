import React from "react";
import Page from "../components/Page/Page";
import Section from "../components/Section/Section";
import HeroSection from "../components/Section/HeroSection";
import GraphicItemSection from "../components/Section/GraphicItemSection";

import pageData from "./HomepageData";

import {
  HeroSectionProps,
  ContentSectionProps,
  GraphicItemSectionProps
} from "../types/types";

const Homepage: React.FC = () => {
  return (
    <Page>
      <HeroSection
        {...pageData.heroSection as HeroSectionProps}
      />
      <GraphicItemSection 
        {...pageData.graphicItemSection as GraphicItemSectionProps}
      />
      <Section
        {...pageData.finalSection as ContentSectionProps}
      />
    </Page>
  );
};

export default Homepage;
