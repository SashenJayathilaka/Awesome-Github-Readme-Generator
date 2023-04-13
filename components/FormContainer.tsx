"use client";

import { GitBadges } from "@/atom/displayBadges";
import { Divider } from "@mui/material";
import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import AboutProject from "./AboutProject";
import Badges from "./Badges";
import Heading from "./Heading";
import InputField from "./InputField";
import TechStack from "./TechStack";
import TechnologiesContent from "./TechnologiesContent";

type Props = {
  setIsReadmeRow: (value: any) => void;
  setImages: (value: any) => void;
  setSize: (value: any) => void;
  setGitHubDetails: (value: any) => void;
  setDisplayBadges: (value: any) => void;
  displayBadges: GitBadges;
};

function FormContainer({
  setImages,
  setIsReadmeRow,
  setSize,
  setGitHubDetails,
  setDisplayBadges,
  displayBadges,
}: Props) {
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

  const handleCopyToClipboard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const range = document.createRange();
    range.selectNode(document.getElementById("markdown-content") as any);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    document.execCommand("copy");
    window.getSelection()?.removeAllRanges();
  };

  const handleDownloadMarkdown = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const markdownContent: any = document.getElementById("markdown-content");
    const tempElement = document.createElement("a");
    tempElement.setAttribute(
      "href",
      `data:text/markdown;charset=utf-8,${encodeURIComponent(
        markdownContent.innerText
      )}`
    );
    tempElement.setAttribute("download", "README.md");
    tempElement.style.display = "none";
    document.body.appendChild(tempElement);
    tempElement.click();
    document.body.removeChild(tempElement);
  };

  return (
    <div className="px-14 py-14 bg-[#051622] rounded-md">
      <form className="">
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
            />
            <InputField
              onChange={onChangeGitHubDetails}
              label="GitHub Repository Name"
              type="text"
              name="gitRepoName"
            />
            <InputField
              onChange={onChangeGitHubDetails}
              label="GitHub Repository Url"
              type="text"
              name="gitRepoUrl"
            />
          </div>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: "#3795BD",
              marginY: "10px",
            }}
          />
          <div className="flex justify-between gap-12 py-2">
            <InputField
              onChange={onChangeReadmeRow}
              label="Main Topic"
              type="text"
              name="firstRow"
            />
            <InputField
              onChange={onChangeReadmeRow}
              label="Description"
              type="text"
              name="secondRow"
            />
          </div>
          <div className="flex justify-between gap-12 py-2">
            <InputField
              onChange={onChangeImages}
              label="Main Image Link"
              type="text"
              name="mainImage"
            />
            <div className="w-full flex justify-between gap-6">
              <InputField
                onChange={onChangeSize}
                label="Main Image Width"
                type="number"
                name="mainImageWidth"
              />
              <InputField
                onChange={onChangeSize}
                label="Main Image Height"
                type="number"
                name="mainImageHeight"
              />
            </div>
          </div>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: "#3795BD",
              marginY: "10px",
            }}
          />
          <Heading icon={TbWorldWww} label="Live Demo" />
          <InputField
            onChange={onChangeGitHubBadges}
            label="Live Demo"
            type="text"
            name="websiteLink"
          />
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: "#3795BD",
              marginY: "10px",
            }}
          />
          <Badges onChangeGitHubBadges={onChangeGitHubBadges} />
        </div>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            backgroundColor: "#3795BD",
            marginY: "10px",
          }}
        />
        <AboutProject />
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
        <TechnologiesContent />
      </form>
    </div>
  );
}

export default FormContainer;
