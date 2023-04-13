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
<div className="px-12 py-8 bg-gray-600 mt-8">
<Markdown />
</div>
<div className="px-12 py-8 bg-[#DCDCDC] text-black mt-8">
<MarkdownPreview />
</div>
</div>
);
}

export default BodyContent;

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

      {isShow && (
        <div>
          <div className="Code px-12 py-12">
            <pre className="scrollbar-thin scrollbar-thumb-red-600">
              <code className="language-markup">{MainImage.prototype}{MainImage.prototype}</code>
            </pre>
          </div>
          <div
            style={outputStyle}
            dangerouslySetInnerHTML={{
              __html: marked(content),
            }}
          ></div>
        </div>
      )}
