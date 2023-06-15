"use client";

import {
  GitBadges,
  GitHubDetail,
  GitHubImages,
  GitHubImagesSize,
  ReadmeRow,
} from "@/type";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";
import { MdRestore } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

import AboutProject from "./Contents/AboutProject";
import Badges from "./Contents/Badges";
import ColorReference from "./Contents/ColorReference";
import EnvironmentVariables from "./Contents/EnvironmentVariables";
import Features from "./Contents/Features";
import GettingStarted from "./Contents/GettingStarted";
import TechStack from "./Contents/TechStack";
import DividerLine from "./DividerLine";
import Heading from "./Heading";
import InputField from "./InputField";

type Props = {
  setIsReadmeRow: (value: any) => void;
  setImages: (value: any) => void;
  setSize: (value: any) => void;
  setGitHubDetails: (value: any) => void;
  setDisplayBadges: (value: any) => void;
  updateCurrentValue: () => void;
  updateAtom: () => void;
  displayBadges: GitBadges;
  gitHubDetail: GitHubDetail;
  readmeRow: ReadmeRow;
  images: GitHubImages;
  size: GitHubImagesSize;
};

function FormContainer({
  setImages,
  setIsReadmeRow,
  setSize,
  setGitHubDetails,
  setDisplayBadges,
  updateCurrentValue,
  updateAtom,
  displayBadges,
  gitHubDetail,
  readmeRow,
  images,
  size,
}: Props) {
  const [isStore, setIsStore] = useState(false);

  const onChangeReadmeRow = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsReadmeRow((prev: string | any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangeImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImages((prev: string | any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize((prev: string | any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangeGitHubDetails = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGitHubDetails((prev: string | any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangeGitHubBadges = (event: any) => {
    const name = event.target.name.toString();

    // @ts-ignore
    if (displayBadges[name]) {
      setDisplayBadges((prev: string | any) => ({
        ...prev,
        [event.target.name]: "",
      }));
    } else {
      setDisplayBadges((prev: string | any) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  useEffect(() => {
    updateCurrentValue();
    updateAtom();
  }, [isStore]);

  return (
    <div>
      <div className="flex justify-start gap-4 py-6">
        <button
          onClick={() => setIsStore(true)}
          className="bg-gray-700 text-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
        >
          <MdRestore size={20} />
          Restore Previous values
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-gray-700 text-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
        >
          <AiOutlineReload size={20} />
          Clear Form
        </button>
      </div>
      <div className="px-14 py-14 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-r dark:from-[#191a47] dark:via-[#0d0d37] dark:to-[#06375f] shadow-2xl rounded-md">
        <form>
          <div>
            <Heading
              icon={FaGithubAlt}
              label="Your GitHub & GitHub Repository Details"
            />
            <div className="flex justify-between gap-12 py-2">
              <InputField
                onChange={onChangeGitHubDetails}
                label="GitHub UserName"
                type="text"
                name="gitUserName"
                value={gitHubDetail.gitUserName}
              />
              <InputField
                onChange={onChangeGitHubDetails}
                label="GitHub Repository Name"
                type="text"
                name="gitRepoName"
                value={gitHubDetail.gitRepoName}
              />
              <InputField
                onChange={onChangeGitHubDetails}
                label="GitHub Repository Url"
                type="text"
                name="gitRepoUrl"
                value={gitHubDetail.gitRepoUrl}
              />
            </div>
            <DividerLine />
            <div className="flex justify-between gap-12 py-2">
              <InputField
                onChange={onChangeReadmeRow}
                label="Main Topic"
                type="text"
                name="firstRow"
                value={readmeRow.firstRow}
              />
              <InputField
                onChange={onChangeReadmeRow}
                label="Description"
                type="text"
                name="secondRow"
                value={readmeRow.secondRow}
              />
            </div>
            <div className="flex justify-between gap-12 py-2">
              <InputField
                onChange={onChangeImages}
                label="Main Image Link"
                type="text"
                name="mainImage"
                value={images.mainImage}
              />
              <div className="w-full flex justify-between gap-6">
                <InputField
                  onChange={onChangeSize}
                  label="Main Image Width"
                  type="number"
                  name="mainImageWidth"
                  value={size.mainImageWidth}
                />
                <InputField
                  onChange={onChangeSize}
                  label="Main Image Height"
                  type="number"
                  name="mainImageHeight"
                  value={size.mainImageHeight}
                />
              </div>
            </div>
            <DividerLine />
            <Heading icon={TbWorldWww} label="Live Demo" />
            <InputField
              onChange={onChangeGitHubBadges}
              label="Live Demo"
              type="text"
              name="websiteLink"
              value={displayBadges.websiteLink}
            />
            <DividerLine />
            <Badges onChangeGitHubBadges={onChangeGitHubBadges} />
          </div>
          <DividerLine />
          <AboutProject />
          <DividerLine />
          {/*  Tech Stack */}
          <TechStack />
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: "#3795BD",
              marginY: "10px",
            }}
          />
          {/*  Tech Stack */}
          {/*  Features */}
          <Features />
          <DividerLine />
          {/*  Features */}
          {/* ColorReference */}
          <ColorReference />
          <DividerLine />
          {/* ColorReference */}
          {/* EnvironmentVariables */}
          <EnvironmentVariables />
          <DividerLine />
          {/* EnvironmentVariables */}
          {/* GettingStarted */}
          <GettingStarted />
          <DividerLine />
          {/* GettingStarted */}s{/*  Technologies */}
          {/*  <TechnologiesContent />
          <DividerLine /> */}
        </form>
      </div>
    </div>
  );
}

export default FormContainer;
