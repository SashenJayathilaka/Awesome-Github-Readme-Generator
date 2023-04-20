"use client";

import { readmeRows } from "@/atom/readmeRow";
import { boxLabel } from "@/lib/boxLabel";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { useRecoilState } from "recoil";
import Heading from "../Heading";

type Props = {};

function License({}: Props) {
  const [license, setLicense] = useState("undo");
  const [stateValue, setStateValue] = useRecoilState(readmeRows);

  const updateState = () => {
    if (license) {
      setStateValue((prev) => ({
        ...prev,
        licenseValue: license,
      }));
    }
  };

  useEffect(() => {
    updateState();
  }, [license]);

  return (
    <div className="py-8">
      <Heading label="License" icon={AiOutlineWarning} />
      <div className="flex justify-start gap-20 items-center">
        <div>
          <p className="text-lg font-medium text-gray-300">
            If you want add License section
          </p>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <div className="flex justify-between items-center text-center ml-[25px]">
            <Checkbox
              {...boxLabel}
              onChange={(e) => setLicense(e.target.value)}
              sx={{ color: "#fff" }}
              color="default"
              checked={license === "do"}
              value="do"
              name="firstValue"
            />
            <p>Yse</p>
          </div>
          <div className="flex justify-between items-center text-center ml-[25px]">
            <Checkbox
              {...boxLabel}
              onChange={(e) => setLicense(e.target.value)}
              sx={{ color: "#fff" }}
              color="default"
              checked={license === "undo"}
              value="undo"
              name="firstValue"
            />
            <p>No</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default License;
