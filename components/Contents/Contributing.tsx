"use client";

import { gitHubDetails } from "@/atom/gitHubDetails";
import { readmeRows } from "@/atom/readmeRow";
import { boxLabel } from "@/lib/boxLabel";
import { Checkbox } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { MdWavingHand } from "react-icons/md";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import Heading from "../Heading";

type Props = {};

function Contributing({}: Props) {
  const { resolvedTheme } = useTheme();
  const [contributingValue, seContributingValue] = useState({
    firstValue: "undo",
    secondValue: "undo",
  });
  const [currentUpdateState, setCurrentUpdateState] =
    useRecoilState(readmeRows);
  const [gitHubDetail] = useRecoilState(gitHubDetails);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (gitHubDetail.gitRepoUrl) {
      seContributingValue((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    } else {
      toast.warn("Please fill your gitHub repository details first");
    }
  };

  const updateState = () => {
    if (contributingValue.firstValue && contributingValue.secondValue) {
      setCurrentUpdateState((prev) => ({
        ...prev,
        contributing: contributingValue.firstValue,
        codeOfConduct: contributingValue.secondValue,
      }));
    }
  };

  useEffect(() => {
    updateState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contributingValue]);

  return (
    <div className="py-8">
      <div className="flex flex-col gap-4">
        <div>
          <Heading label="Contributing" icon={MdWavingHand} />
          <div className="flex justify-start gap-20 items-center">
            <div>
              <p className="text-lg font-medium dark:text-gray-300 text-gray-600">
                If you want add Contributions section
              </p>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <div className="flex justify-between items-center text-center ml-[25px]">
                <Checkbox
                  {...boxLabel}
                  onChange={onChange}
                  sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
                  color="default"
                  checked={currentUpdateState.contributing === "do"}
                  value="do"
                  name="firstValue"
                />
                <p>Yse</p>
              </div>
              <div className="flex justify-between items-center text-center">
                <Checkbox
                  {...boxLabel}
                  onChange={onChange}
                  sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
                  color="default"
                  checked={currentUpdateState.contributing === "undo"}
                  value="undo"
                  name="firstValue"
                />
                <p>No</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Heading label="Code of Conduct" icon={HiClipboardDocumentList} />
          <div className="flex justify-start gap-20 items-center">
            <div>
              <p className="text-lg font-medium dark:text-gray-300 text-gray-600">
                If you want add Code of Conduct section
              </p>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <div className="flex justify-between items-center text-center">
                <Checkbox
                  {...boxLabel}
                  onChange={onChange}
                  sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
                  color="default"
                  checked={currentUpdateState.codeOfConduct === "do"}
                  value="do"
                  name="secondValue"
                />
                <p>Yse</p>
              </div>
              <div className="flex justify-between items-center text-center">
                <Checkbox
                  {...boxLabel}
                  onChange={onChange}
                  sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
                  color="default"
                  checked={currentUpdateState.codeOfConduct === "undo"}
                  value="undo"
                  name="secondValue"
                />
                <p>No</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contributing;
