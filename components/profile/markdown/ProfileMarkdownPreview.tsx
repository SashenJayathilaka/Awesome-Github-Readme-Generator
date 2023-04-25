"use client";

import ProfileMdPreview from "../process/ProfileMdPreview";

type Props = {};

function ProfileMarkdownPreview({}: Props) {
  const { Tittle, SubTittle, Work } = ProfileMdPreview();

  return (
    <div className="space-y-4">
      <Tittle />
      <SubTittle />
      <Work />
    </div>
  );
}

export default ProfileMarkdownPreview;
