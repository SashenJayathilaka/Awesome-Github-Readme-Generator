"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { gitTechStack } from "@/atom/techStack";
import updateCurrentStateValue from "@/hook/updateCurrentStateValue";
import { JsonDataType } from "@/type";
import { FormEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import Options from "./components/Options";

type Props = {};

function ConfigOptions({}: Props) {
  const [files, setFiles] = useState<JsonDataType | null>(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader();

      const fileType = event.target.files && event.target.files[0];

      if (!fileType) return;

      if (fileType.type === "application/json") {
        setFileName(fileType.name);
        fileReader.readAsText(fileType, "UTF-8");
        fileReader.onload = (event) => {
          const jasonData = JSON.parse(event.target?.result as string);
          setFiles(jasonData);
        };
      } else {
        toast.error("This File Type Not Supported");
        setFileName(fileType.name);
      }
    },
    []
  );

  const handleProcess = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!files) return;

      setIsLoading(true);

      updateFirstElement(files.gitHubTechStack, setGitHubTechStack);
      updateSecondElement(files.gitHubDetail, setGitHubDetail);
      updateThirdElement(files.readmeRow, setIsReadmeRow);
      updateFourthElement(files.images, setImages);
      updateFifthElement(files.size, setSize);
      updateSixthElement(files.displayBadges, setDisplayBadges);

      setTimeout(() => {
        setIsLoading(false);
        toast.success("JSON Text Restore Successfully");
      }, 1000);
    },
    [
      files,
      setDisplayBadges,
      setGitHubDetail,
      setGitHubTechStack,
      setImages,
      setIsReadmeRow,
      setSize,
      updateFifthElement,
      updateFirstElement,
      updateFourthElement,
      updateSecondElement,
      updateSixthElement,
      updateThirdElement,
    ]
  );

  return (
    <div className="w-full pt-12">
      <Options
        files={files}
        fileName={fileName}
        isLoading={isLoading}
        setFiles={setFiles}
        setFileName={setFileName}
        handleProcess={handleProcess}
        handleChange={handleChange}
      />
    </div>
  );
}

export default ConfigOptions;
