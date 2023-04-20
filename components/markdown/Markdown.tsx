"use client";

import ClientOnly from "../ClientOnly";
import MdContent from "../process/MdContent";

type Props = {};

function Markdown({}: Props) {
  const {
    MainImage,
    MainTopic,
    SubTopic,
    Maintained,
    WebsiteUpDown,
    Forks,
    Stars,
    Issues,
    LastCommit,
    CenterStart,
    CenterEnd,
    Documentation,
    MKLanguages,
    startTable: StartTable,
    endTable: EndTable,
    DemoProjectAssets,
    TechStackClient,
    TechStackServer,
    TechStackDatabase,
    TechStackDevOps,
    Features,
    ColorReference,
    PrimaryColor,
    SecondaryColor,
    AccentColor,
    TextColor,
    EnvironmentVariables,
    GettingStarted,
    Prerequisites,
    Installation,
    RunningTests,
    RunLocally,
    Deployment,
    RoadMap,
    Contributing,
    CodeOfConduct,
    FaqSection,
    License,
    Contact,
    Acknowledgements,
    TableOfContents,
    AboutProject,
  } = MdContent();

  return (
    <ClientOnly>
      <div id="markdown-content">
        <CenterStart />
        <MainImage />
        <MainTopic />
        <SubTopic />
        <Maintained />
        <WebsiteUpDown />
        <Forks />
        <Stars />
        <Issues />
        <LastCommit />
        <Documentation />
        <CenterEnd />
        <TableOfContents />
        <AboutProject />
        <DemoProjectAssets />
        <StartTable />
        <MKLanguages />
        <EndTable />
        <TechStackClient />
        <TechStackServer />
        <TechStackDatabase />
        <TechStackDevOps />
        <Features />
        <ColorReference />
        <PrimaryColor />
        <SecondaryColor />
        <AccentColor />
        <TextColor />
        <EnvironmentVariables />
        <GettingStarted />
        <Prerequisites />
        <Installation />
        <RunningTests />
        <RunLocally />
        <Deployment />
        <RoadMap />
        <Contributing />
        <CodeOfConduct />
        <FaqSection />
        <License />
        <Contact />
        <Acknowledgements />
      </div>
    </ClientOnly>
  );
}

export default Markdown;
