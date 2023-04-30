"use client";

import { boxLabel } from "@/lib/boxLabel";
import { trophyTheme } from "@/lib/themesStore";
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

function ProfileTrophy({ addOnes, setAddOnes, resolvedTheme }: Props) {
  const [trophy, setTrophy] = useState<string | null>(addOnes.trophyTheme);

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
      if (addOnes.trophy) {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          trophy: false,
          trophyTheme: "",
        }));
      } else {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          trophy: true,
        }));
      }
    } else {
      toast.info("Please Add Your Github user Name");
    }
  };

  const updateStateValue = () => {
    if (addOnes.trophy) {
      setAddOnes((prev: ProfileAtomDetails) => ({
        ...prev,
        trophyTheme: trophy,
      }));
    }
  };

  useEffect(() => {
    updateStateValue();
  }, [trophy]);

  return (
    <div className="flex flex-col justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
      <div className="flex justify-center text-center items-center gap-2">
        <p className="text-xl font-medium text-center">Display Github Trophy</p>
        <div onClick={onUpdateState}>
          <Checkbox
            {...boxLabel}
            sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
            color="default"
            checked={addOnes.trophy}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <p>{trophyTheme.length} themes are available</p>
        <Select
          className="w-44 cursor-pointer"
          options={trophyTheme}
          defaultValue={trophyTheme[0]}
          placeholder={trophy}
          isSearchable
          menuPosition="fixed"
          /*     classNames={{
            control: (state) => "bg-[#fff] border-[#434654] cursor-pointer",
            option: (state) =>
              "bg-white text-black hover:bg-gray-900 hover:text-gray-100 cursor-pointer",
          }} */
          styles={colorStyles}
          onChange={(e: any) => setTrophy(e.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-2 items-center border border-gray-800 px-2.5 py-2.5 rounded-md cursor-pointer">
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${
              addOnes.github ? addOnes.github : "sindresorhus"
            }&theme=${addOnes.trophyTheme}`}
            alt="visitors"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileTrophy;
