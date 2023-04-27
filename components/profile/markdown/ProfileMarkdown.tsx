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
  } = ProfileMdContent();

  return (
    <div id="markdown-profile">
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

export default ProfileMarkdown;
