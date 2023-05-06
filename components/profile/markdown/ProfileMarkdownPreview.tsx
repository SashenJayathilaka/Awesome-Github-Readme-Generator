"use client";

import ProfileMdPreview from "../process/ProfileMdPreview";

type Props = {};

function ProfileMarkdownPreview({}: Props) {
  const {
    Tittle,
    SubTittle,
    Work,
    Connect,
    Languages,
    AddOnFirst,
    AddOn,
    Support,
    Shields,
    Statistics,
    ActiveGraph,
    StartSection,
    EndSection,
  } = ProfileMdPreview();

  return (
    <div className="space-y-4">
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
      <Statistics />
      <ActiveGraph />
      <EndSection />
    </div>
  );
}

export default ProfileMarkdownPreview;
