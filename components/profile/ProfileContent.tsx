"use client";

import ProfileFormContainer from "./ProfileFormContainer";
import ProfileMarkdown from "./markdown/ProfileMarkdown";
import ProfileMarkdownPreview from "./markdown/ProfileMarkdownPreview";

type Props = {};

function ProfileContent({}: Props) {
  return (
    <div className="px-12 py-12 items-center">
      <ProfileFormContainer />
      <div className="px-12 py-8 bg-[#1f2937] mt-8 rounded-xl border-double border-4 border-[#001e3c] shadow-2xl">
        <ProfileMarkdown />
      </div>
      <div className="px-12 py-8 bg-[#1f2937] mt-8 rounded-xl border-double border-4 border-[#001e3c] shadow-2xl">
        <ProfileMarkdownPreview />
      </div>
    </div>
  );
}

export default ProfileContent;
