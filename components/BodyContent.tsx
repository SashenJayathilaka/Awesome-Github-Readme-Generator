"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import updateCurrentStateValue from "@/hook/updateCurrentStateValue";
import { GitHubRepoDetails } from "@/type";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import ActionLode from "./ActionLode";
import ButtonActions from "./ButtonActions";
import ConfettiSection from "./ConfettiSection";
import SmallHeader from "./Contents/SmallHeader";
import FeedBackForm from "./FeedBackForm";
import FormContainer from "./FormContainer";
import Markdown from "./markdown/Markdown";
import MarkdownPreview from "./markdown/MarkdownPreview";

type Props = {};

function BodyContent({}: Props) {
  const [isShow, setIsShow] = useState(true);
  const [isMdPreview, setIsMdPreview] = useState(true);
  const [action, setAction] = useState(false);

  const [gitHubDetail, setGitHubDetail] = useRecoilState(gitRepoDetails);

  const [readmeRow, setIsReadmeRow] = useRecoilState(gitRepoDetails);
  const [images, setImages] = useRecoilState(gitRepoDetails);
  const [size, setSize] = useRecoilState(gitRepoDetails);
  const [displayBadges, setDisplayBadges] = useRecoilState(gitRepoDetails);

  const { updateRepoDetailsLocalCash } = updateCurrentStateValue();

  const [allElement, setAllElement] = useState(gitHubDetail);

  const KeepCacheUpdated = (repoDetailsElement: GitHubRepoDetails) => {
    localStorage.setItem(
      "repoCache",
      JSON.stringify({
        repoDetailsElement,
      })
    );

    updateCurrentValue();
  };

  const updateCurrentValue = async () => {
    const cache = JSON.parse(localStorage.getItem("repoCache")!);

    if (!cache) {
      return;
    }

    setAllElement(
      cache.repoDetailsElement
        ? { ...gitHubDetail, ...cache.repoDetailsElement }
        : gitHubDetail
    );
  };

  const OnChangeAction = () => {
    KeepCacheUpdated(gitHubDetail);

    setAction(true);

    setTimeout(() => {
      setIsShow(false);
      setAction(false);
      toast.success("Generate Successfully");
    }, 3000);
  };

  const updateAtom = () => {
    updateRepoDetailsLocalCash(allElement, setGitHubDetail);
  };

  useEffect(() => {
    updateAtom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return (
    <>
      <SmallHeader />
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
                  updateCurrentValue={updateCurrentValue}
                  updateAtom={updateAtom}
                  displayBadges={displayBadges}
                  gitHubDetail={gitHubDetail}
                  readmeRow={readmeRow}
                  images={images}
                  size={size}
                />
                <div className="flex justify-center items-center py-16">
                  <button
                    disabled={action}
                    onClick={OnChangeAction}
                    className="flex justify-center gap-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-auto rounded-xl text-xl font-bold px-6 py-6 animate-bounce"
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
            <ConfettiSection />
            <ButtonActions
              setIsShow={setIsShow}
              setIsMdPreview={setIsMdPreview}
              isMdPreview={isMdPreview}
            />
            {isMdPreview ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="px-12 py-8 bg-gray-200 dark:bg-[#1a2027] mt-8 rounded-xl border-double border-4 dark:border-[#001e3c]"
              >
                <Markdown />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="px-12 py-8 bg-gray-200 dark:bg-[#1a2027] mt-8 rounded-xl border-double border-4 dark:border-[#001e3c]"
              >
                <MarkdownPreview />
              </motion.div>
            )}
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              flexItem
              sx={{
                backgroundColor: "#3795BD",
                marginY: "10px",
              }}
            />
            <FeedBackForm />
          </>
        )}
      </div>
    </>
  );
}

export default BodyContent;
