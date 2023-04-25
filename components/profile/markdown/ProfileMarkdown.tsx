"use client";

import ProfileMdContent from "../process/ProfileMdContent";

type Props = {};

function ProfileMarkdown({}: Props) {
  const { Tittle, SubTittle, Work, Languages } = ProfileMdContent();

  return (
    <div>
      <Tittle />
      <SubTittle />
      <Work />
      <Languages />
    </div>
  );
}

export default ProfileMarkdown;
