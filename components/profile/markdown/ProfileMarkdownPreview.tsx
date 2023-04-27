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
  } = ProfileMdPreview();

  return (
    <div className="space-y-4">
      <Tittle />
      <SubTittle />
      <AddOnFirst />
      <Work />
      <Shields />
      <Languages />
      <Connect />
      <Support />
      <AddOn />
    </div>
  );
}

export default ProfileMarkdownPreview;
