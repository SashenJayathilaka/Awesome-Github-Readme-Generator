"use client";

import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { Switch } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

type Props = {};

function ControlSwitch({}: Props) {
  const [controllers, setControllers] = useRecoilState(gitHubDetails);
  const [images] = useRecoilState(gitImages);

  const handleChange = () => {
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
  };

  useEffect(() => {
    setControllers((prev: string | any) => ({
      ...prev,
      isTable: "put a table",
    }));
  }, []);

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
