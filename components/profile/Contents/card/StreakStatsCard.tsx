"use client";

import { boxLabel } from "@/lib/boxLabel";
import { supportedThemes } from "@/lib/themesStore";
import { ProfileAtomDetails } from "@/type";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { toast } from "react-toastify";

type Props = {
  addOnes: ProfileAtomDetails;
  resolvedTheme: string | undefined;
  setAddOnes: (value: any) => void;
};

function StreakStatsCard({ addOnes, setAddOnes, resolvedTheme }: Props) {
  const [streakStats, setStreakStats] = useState<string | null>(
    addOnes.streakTheme
  );

  const colorStyles: StylesConfig = {
    option: (styles) => ({
      ...styles,
      color: "#000",
      cursor: "pointer",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#000",
      cursor: "pointer",
    }),
  };

  const onUpdateState = () => {
    if (addOnes.github) {
      if (addOnes.streak) {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          streak: false,
          streakTheme: "",
        }));
      } else {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          streak: true,
        }));
      }
    } else {
      toast.info("Please Add Your Github user Name");
    }
  };

  const updateStateValue = () => {
    if (addOnes.streak) {
      setAddOnes((prev: ProfileAtomDetails) => ({
        ...prev,
        streakTheme: streakStats,
      }));
    }
  };

  useEffect(() => {
    updateStateValue();
  }, [streakStats]);

  return (
    <div className="flex flex-col justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
      <div className="flex justify-center text-center items-center gap-2">
        <div onClick={onUpdateState}>
          <Checkbox
            {...boxLabel}
            sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
            color="default"
            checked={addOnes.streak}
          />
        </div>
        <p className="text-xl font-medium text-center">
          Display Github Streak Stats
        </p>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <p>{supportedThemes.length} themes are available</p>
        <Select
          className="w-44"
          options={supportedThemes}
          defaultValue={supportedThemes[0]}
          placeholder={streakStats}
          isSearchable
          menuPosition="fixed"
          /*   classNames={{
            control: (state) => "bg-[#fff] border-[#434654] cursor-pointer",
            option: (state) =>
              "bg-white text-black hover:bg-gray-900 hover:text-gray-100 cursor-pointer",
          }} */
          styles={colorStyles}
          onChange={(e: any) => setStreakStats(e.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-2 items-center border border-gray-800 px-2.5 py-2.5 rounded-md cursor-pointer">
          <img
            src={`https://streak-stats.demolab.com/?user=${
              addOnes.github ? addOnes.github : "DenverCoder"
            }&theme=${addOnes.streakTheme}`}
            alt="visitors"
          />
        </div>
      </div>
    </div>
  );
}

export default StreakStatsCard;
