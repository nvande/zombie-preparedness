import React from "react";

import Page from "../components/Page/Page";
import HeroSection from "../components/Section/HeroSection";
import PageTitle from "../components/Typography/PageTitle";
import Section from "../components/Section/Section";
import Signup from "../components/Signup/Signup";

import pageData from "./SignuppageData";

import { HeroSectionProps } from "../types/types";

const Homepage: React.FC = () => {
  return (
    <Page>
      <HeroSection {...(pageData.pageInfo as HeroSectionProps)} />
      <Section>
        <PageTitle heading={pageData.pageInfo.heading} />
        <Signup formConfig={pageData.form} sidebarConfig={pageData.sidebar} id={pageData.form.id}/>
      </Section>
    </Page>
  );
};

export default Homepage;
