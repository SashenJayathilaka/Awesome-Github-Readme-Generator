/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { gitTechStack } from "@/atom/techStack";
import updateCurrentStateValue from "@/hook/updateCurrentStateValue";
import {
  GitBadges,
  GitHubDetail,
  GitHubImages,
  GitHubImagesSize,
  GitHubTechStack,
  ReadmeRow,
} from "@/type";
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

  const [gitHubDetail, setGitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow, setIsReadmeRow] = useRecoilState(readmeRows);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);
  const [images, setImages] = useRecoilState(gitImages);
  const [size, setSize] = useRecoilState(gitImagesSizes);
  const [displayBadges, setDisplayBadges] = useRecoilState(gitBadge);

  const {
    updateFirstElement,
    updateSecondElement,
    updateThirdElement,
    updateFourthElement,
    updateFifthElement,
    updateSixthElement,
  } = updateCurrentStateValue();

  const [firstElement, setFirstElement] =
    useState<GitHubTechStack>(gitHubTechStack);
  const [secondElement, setSecondElement] =
    useState<GitHubDetail>(gitHubDetail);
  const [thirdElement, setThirdElement] = useState<ReadmeRow>(readmeRow);
  const [fourthElement, setFourthElement] = useState<GitHubImages>(images);
  const [fifthElement, setFifthElement] = useState<GitHubImagesSize>(size);
  const [sixthElement, setSixthElement] = useState<GitBadges>(displayBadges);

  const KeepCacheUpdated = (
    firstStore: GitHubTechStack,
    secondStore: GitHubDetail,
    thirdStore: ReadmeRow,
    fourthStore: GitHubImages,
    fifthStore: GitHubImagesSize,
    sixthStore: GitBadges
  ) => {
    localStorage.setItem(
      "repoCache",
      JSON.stringify({
        firstStore,
        secondStore,
        thirdStore,
        fourthStore,
        fifthStore,
        sixthStore,
      })
    );

    updateCurrentValue();
  };

  const updateCurrentValue = async () => {
    const cache = JSON.parse(localStorage.getItem("repoCache")!);

    if (!cache) {
      return;
    }

    setFirstElement(
      cache.firstStore
        ? { ...gitHubTechStack, ...cache.firstStore }
        : gitHubTechStack
    );
    setSecondElement(
      cache.secondStore
        ? { ...gitHubTechStack, ...cache.secondStore }
        : gitHubTechStack
    );
    setThirdElement(
      cache.thirdStore
        ? { ...gitHubTechStack, ...cache.thirdStore }
        : gitHubTechStack
    );
    setFourthElement(
      cache.fourthStore
        ? { ...gitHubTechStack, ...cache.fourthStore }
        : gitHubTechStack
    );
    setFifthElement(
      cache.fifthStore
        ? { ...gitHubTechStack, ...cache.fifthStore }
        : gitHubTechStack
    );
    setSixthElement(
      cache.sixthStore
        ? { ...gitHubTechStack, ...cache.sixthStore }
        : gitHubTechStack
    );
  };

  const OnChangeAction = () => {
    KeepCacheUpdated(
      gitHubTechStack,
      gitHubDetail,
      readmeRow,
      images,
      size,
      displayBadges
    );

    setAction(true);

    setTimeout(() => {
      setIsShow(false);
      setAction(false);
      toast.success("Generate Successfully");
    }, 3000);
  };

  const updateAtom = () => {
    updateFirstElement(firstElement, setGitHubTechStack);
    updateSecondElement(secondElement, setGitHubDetail);
    updateThirdElement(thirdElement, setIsReadmeRow);
    updateFourthElement(fourthElement, setImages);
    updateFifthElement(fifthElement, setSize);
    updateSixthElement(sixthElement, setDisplayBadges);
  };

  useEffect(() => {
    updateAtom();
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
                    className="flex justify-center gap-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-auto rounded-xl text-2xl text-gray-900 font-bold font-mono px-6 py-6 animate-pulse focus:outline-none focus:shadow-outline shadow-2xl items-center italic"
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
              gitHubDetail={gitHubDetail}
              readmeRow={readmeRow}
              gitHubTechStack={gitHubTechStack}
              images={images}
              size={size}
              displayBadges={displayBadges}
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
