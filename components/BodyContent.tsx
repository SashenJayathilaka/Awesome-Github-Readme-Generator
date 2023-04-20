"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import ActionLode from "./ActionLode";
import ButtonActions from "./ButtonActions";
import FormContainer from "./FormContainer";
import Markdown from "./markdown/Markdown";
import MarkdownPreview from "./markdown/MarkdownPreview";

type Props = {};

function BodyContent({}: Props) {
  const [isShow, setIsShow] = useState(true);
  const [action, setAction] = useState(false);
  const [gitHubDetail, setGitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow, setIsReadmeRow] = useRecoilState(readmeRows);
  const [images, setImages] = useRecoilState(gitImages);
  const [size, setSize] = useRecoilState(gitImagesSizes);
  const [displayBadges, setDisplayBadges] = useRecoilState(gitBadge);

  const OnChangeAction = () => {
    setAction(true);

    setTimeout(() => {
      setIsShow(false);
      setAction(false);
      toast.success("Generate Successfully");
    }, 3000);
  };

  return (
    <div className="px-12 py-12 items-center">
      {isShow ? (
        <>
          {action ? (
            <div>
              <ActionLode />
            </div>
          ) : (
            <>
              <FormContainer
                setIsReadmeRow={setIsReadmeRow}
                setImages={setImages}
                setSize={setSize}
                setGitHubDetails={setGitHubDetail}
                setDisplayBadges={setDisplayBadges}
                displayBadges={displayBadges}
              />
              <div className="flex justify-center items-center py-16">
                <button
                  disabled={action}
                  onClick={OnChangeAction}
                  className="flex justify-center gap-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-auto rounded-xl text-xl font-bold px-6 py-6"
                >
                  Generate File
                  <AiOutlineDownload size={25} />
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <ButtonActions setIsShow={setIsShow} />
          <div className="px-12 py-8 bg-[#1f2937] mt-8 rounded-xl border-double border-4 border-[#001e3c]">
            <button onClick={() => setIsShow(true)}>back</button>
            <Markdown />
          </div>
          <div className="px-12 py-8 bg-[#1a2027] mt-8 rounded-xl border-double border-4 border-[#001e3c]">
            <MarkdownPreview />
          </div>
        </>
      )}
    </div>
  );
}

export default BodyContent;
