"use client";

import ProfileMdContent from "../process/ProfileMdContent";

type Props = {};

function ProfileMarkdown({}: Props) {
  const {
    Tittle,
    SubTittle,
    Work,
    Languages,
    Connect,
    AddOnFirst,
    AddOn,
    Support,
    Shields,
    Divider,
    Statistics,
    ActiveGraph,
    StartSection,
    EndSection,
  } = ProfileMdContent();

  return (
    <div id="markdown-profile">
      <StartSection />
      <Tittle />
      <SubTittle />
      <AddOnFirst />
      <Work />
      <Shields />
      <Connect />
      <Languages />
      <Support />
      <AddOn />
      {Statistics !== null && <Divider />}
      <Statistics />
      {ActiveGraph !== null && <Divider />}
      <ActiveGraph />
      <EndSection />
    </div>
  );
}

export default ProfileMarkdown;
