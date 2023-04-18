"use client";

import MdPreview from "../process/MdPreview";

type Props = {};

function MarkdownPreview({}: Props) {
  const {
    PMainImage,
    PMainTopic,
    PSubTopic,
    PMaintained,
    PWebsiteUpDown,
    PForks,
    PStars,
    PIssues,
    PLastCommit,
    PDocumentation,
    PLanguages,
    PDemoProjectAssets,
    MdTechStackClient,
    MdTechStackServer,
    MdTechStackDatabase,
    MdTechStackDevOps,
    MdFeatures,
    ColorReference,
    EnvironmentVariables,
    GettingStarted,
    Prerequisites,
    Installation,
    RunningTests,
    RunLocally,
    Deployment,
    RoadMap,
  } = MdPreview();
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-center text-center">
        <PMainImage />
        <PMainTopic />
        <PSubTopic />
        <div className="flex">
          <PMaintained />
          <PWebsiteUpDown />
          <PForks />
          <PStars />
          <PIssues />
          <PLastCommit />
        </div>
        <PDocumentation />
      </div>
      <PDemoProjectAssets />
      <div className="py-2 gap-1">
        <MdTechStackClient />
        <MdTechStackServer />
        <MdTechStackDatabase />
        <MdTechStackDevOps />
      </div>
      <div className="py-2">
        <MdFeatures />
      </div>
      <div className="py-2">
        <ColorReference />
      </div>
      <div className="py-2">
        <EnvironmentVariables />
      </div>
      <div className="py-2">
        <GettingStarted />
        <div className="py-2">
          <Prerequisites />
          <div className="py-2">
            <Installation />
          </div>
          <div className="py-2">
            <RunningTests />
          </div>
          <div className="py-2">
            <RunLocally />
          </div>
          <div className="py-2">
            <Deployment />
          </div>
          <div className="py-2">
            <RoadMap />
          </div>
        </div>
      </div>
      <div
        className="py-2"
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        <PLanguages />
      </div>
    </>
  );
}

export default MarkdownPreview;

// grid-cols-5 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 2xl:grid-cols-12
