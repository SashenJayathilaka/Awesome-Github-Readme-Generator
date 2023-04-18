"use client";

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
  } = MdContent();

  return (
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
    </div>
  );
}

export default Markdown;
