"use client";

import MdContent from "../content/MdContent";

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
    </div>
  );
}

export default Markdown;
