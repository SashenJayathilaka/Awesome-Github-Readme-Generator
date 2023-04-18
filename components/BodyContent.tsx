"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { useRecoilState } from "recoil";

import FormContainer from "./FormContainer";
import Markdown from "./markdown/Markdown";
import MarkdownPreview from "./markdown/MarkdownPreview";

type Props = {};

function BodyContent({}: Props) {
  const [gitHubDetail, setGitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow, setIsReadmeRow] = useRecoilState(readmeRows);
  const [images, setImages] = useRecoilState(gitImages);
  const [size, setSize] = useRecoilState(gitImagesSizes);
  const [displayBadges, setDisplayBadges] = useRecoilState(gitBadge);

  return (
    <div className="px-12 py-12 items-center">
      <FormContainer
        setIsReadmeRow={setIsReadmeRow}
        setImages={setImages}
        setSize={setSize}
        setGitHubDetails={setGitHubDetail}
        setDisplayBadges={setDisplayBadges}
        displayBadges={displayBadges}
      />
      <div className="px-12 py-8 bg-[#1f2937] mt-8 rounded-xl border-double border-4 border-[#001e3c]">
        <Markdown />
      </div>
      <div className="px-12 py-8 bg-[#1a2027] mt-8 rounded-xl border-double border-4 border-[#001e3c]">
        <MarkdownPreview />
      </div>
    </div>
  );
}

export default BodyContent;
