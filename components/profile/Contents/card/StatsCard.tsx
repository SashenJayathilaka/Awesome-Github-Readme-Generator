"use client";

import { boxLabel } from "@/lib/boxLabel";
import { supportedThemes } from "@/lib/themesStore";
import { ProfileAtomDetails } from "@/type";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

type Props = {
  addOnes: ProfileAtomDetails;
  resolvedTheme: string | undefined;
  setAddOnes: (value: any) => void;
};

function StatsCard({ addOnes, setAddOnes, resolvedTheme }: Props) {
  const [topSkills, setTopSkills] = useState<string | null>(addOnes.starsTheme);

  const onUpdateState = () => {
    if (addOnes.github) {
      if (addOnes.stats) {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          stats: false,
          starsTheme: "",
        }));
      } else {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          stats: true,
        }));
      }
    } else {
      toast.info("Please Add Your Github user Name");
    }
  };

  const updateStateValue = () => {
    if (addOnes.stats) {
      setAddOnes((prev: ProfileAtomDetails) => ({
        ...prev,
        starsTheme: topSkills,
      }));
    }
  };

  useEffect(() => {
    updateStateValue();
  }, [topSkills]);

  return (
    <div className="flex flex-col justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
      <div className="flex justify-center text-center items-center gap-2">
        <p className="text-xl font-medium text-center">
          Display Github Profile Stats Card
        </p>
        <div onClick={onUpdateState}>
          <Checkbox
            {...boxLabel}
            sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
            color="default"
            checked={addOnes.stats}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <p>{supportedThemes.length} themes are available</p>
        <Select
          className="w-44"
          options={supportedThemes}
          defaultValue={supportedThemes[0]}
          placeholder={topSkills}
          isSearchable
          menuPosition="fixed"
          /* classNames={{
            control: (state) => "bg-[#fff] border-[#434654] cursor-pointer",
            option: (state) =>
              "bg-white text-black hover:bg-gray-900 hover:text-gray-100 cursor-pointer",
          }} */
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              text: "orangered",
              primary25: "hotpink",
              primary: "black",
            },
          })}
          onChange={(e: any) => setTopSkills(e.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-2 items-center border border-gray-800 px-2.5 py-2.5 rounded-md cursor-pointer">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${
              addOnes.github ? addOnes.github : "sashenjayathilaka"
            }&show_icons=true&locale=en&theme=${addOnes.starsTheme}`}
            alt="visitors"
          />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
