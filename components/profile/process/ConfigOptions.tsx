"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import readJson from "@/hook/readJson";
import updateProfileValue from "@/hook/updateProfileValue";
import { ProfileAtomDetails } from "@/type";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import Options from "./components/Options";

type Props = {};

function ConfigOptions({}: Props) {
  const [files, setFiles] = useState<ProfileAtomDetails | null>(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updateCurrentState, setUpdateCurrentState] =
    useRecoilState(profileAtomDetail);

  const { updateStateValue, currentValue } = readJson(files!);
  const { updateProfileStore } = updateProfileValue();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const handleProcess = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!files) return;

      setIsLoading(true);

      if (files.skills.length > 0) {
        updateStateValue();
      } else {
        updateProfileStore(files, setUpdateCurrentState);
      }

      setTimeout(() => {
        setIsLoading(false);
        toast.success("JSON Text Restore Successfully");
      }, 1000);
    },
    [files]
  );

  useEffect(() => {
    if (!currentValue) return;
    updateProfileStore(currentValue, setUpdateCurrentState);
  }, [currentValue]);

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
