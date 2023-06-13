"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import { Switch } from "@mui/material";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

type Props = {};

function ControlSwitch({}: Props) {
  const [controllers, setControllers] = useRecoilState(gitRepoDetails);
  const [images] = useRecoilState(gitRepoDetails);

  const handleChange = useCallback(() => {
    const languageLabel = images.updatedStateTechnology;

    if (languageLabel.length <= 10) {
      if (controllers.isTable) {
        setControllers((prev: string | any) => ({
          ...prev,
          isTable: "",
        }));
      } else {
        setControllers((prev: string | any) => ({
          ...prev,
          isTable: "put a table",
        }));
      }
    } else {
      toast.warn("You have reached the table's maximum number of limits");
    }
  }, [controllers.isTable, images.updatedStateTechnology, setControllers]);

  useEffect(() => {
    setControllers((prev: string | any) => ({
      ...prev,
      isTable: "put a table",
    }));
  }, [setControllers]);

  return (
    <div className="flex justify-start gap-4 items-center text-center border border-gray-600 rounded-md px-2.5 py-2">
      <Switch
        color="secondary"
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        value={controllers.isTable}
        name="isTable"
        checked={images.updatedStateTechnology.length <= 10}
      />
      <p className="text-lg font-medium">Table?</p>
    </div>
  );
}

export default ControlSwitch;
