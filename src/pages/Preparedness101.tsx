import React from "react";

import Page from "../components/Page/Page";
import HeroSection from "../components/Section/HeroSection";
import Section from "../components/Section/Section";
import PageTitle from "../components/Typography/PageTitle";
import SummaryBox from "../components/List/SummaryBox";
import PageContent from "../components/Typography/PageContent";
import ScrollableTable from "../components/Table/ScrollableTable";
import IconList from "../components/List/IconList";
import Collection from "../components/List/Collection";
import ProcessList from "../components/List/ProcessList";

import pageData from "./Preparedness101Data";

import {
  HeroSectionProps,
  PageInfoProps,
  SummaryBoxProps,
  ContentSectionProps,
  ScrollableTableProps,
  IconListProps,
  ProcessListProps,
  CollectionProps,
  ButtonGroupProps
} from "../types/types";
import ButtonGroup from "../components/Button/ButtonGroup";

const Homepage: React.FC = () => {
  return (
    <Page>
      <HeroSection {...(pageData.pageInfo as HeroSectionProps)} />
      <Section>
        <PageTitle {...(pageData.pageInfo as PageInfoProps)} />
        <SummaryBox {...(pageData.pageSummaryBox as SummaryBoxProps)} />
        <PageContent {...(pageData.firstSection as ContentSectionProps)} />
        <ScrollableTable
          {...(pageData.firstScrollingTable as ScrollableTableProps)}
        />
      </Section>
      <Section>
        <PageContent {...(pageData.secondSection as ContentSectionProps)} />
        <ScrollableTable
          {...(pageData.secondScrollingTable as ScrollableTableProps)}
        />
        <PageContent {...(pageData.thirdSection as ContentSectionProps)} />
        <IconList {...(pageData.firstIconList as IconListProps)} />
        <PageContent {...(pageData.fourthSection as ContentSectionProps)} />
        <ProcessList {...(pageData.firstProcessList as ProcessListProps)} />
        <IconList {...(pageData.secondIconList as IconListProps)} />
      </Section>
      <Section>
        <PageContent {...(pageData.fifthSection as ContentSectionProps)} />
        <Collection {...(pageData.firstCollection as CollectionProps)} />
        <ButtonGroup {...(pageData.finalButtonGroup as ButtonGroupProps)} />
      </Section>
    </Page>
  );
};

export default Homepage;
