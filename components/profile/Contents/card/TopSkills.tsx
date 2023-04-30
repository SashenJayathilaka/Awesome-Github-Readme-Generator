"use client";

import { boxLabel } from "@/lib/boxLabel";
import { skillCardTemplate, supportedThemes } from "@/lib/themesStore";
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

function SkillCard({ addOnes, setAddOnes, resolvedTheme }: Props) {
  const [gitSkillCard, setGitSkillCard] = useState<string | null>(
    addOnes.skillCardTheme
  );
  const [skills, setSkills] = useState(addOnes.skillCardLayout);

  const SkillCardFilter = () => {
    if (addOnes.skillCardLayout === "showMore") {
      return (
        <>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
              addOnes.github ? addOnes.github : "sashenjayathilaka"
            }&langs_count=8&theme=${addOnes.skillCardTheme}`}
            alt="visitors"
            className=""
          />
        </>
      );
    } else if (addOnes.skillCardLayout === "compact") {
      return (
        <>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
              addOnes.github ? addOnes.github : "sashenjayathilaka"
            }&layout=compact&theme=${addOnes.skillCardTheme}`}
            alt="visitors"
            className="h-[180px]"
          />
        </>
      );
    } else if (addOnes.skillCardLayout === "hide") {
      return (
        <>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
              addOnes.github ? addOnes.github : "sashenjayathilaka"
            }&hide_progress=true&theme=${addOnes.skillCardTheme}`}
            alt="visitors"
            className="h-[180px]"
          />
        </>
      );
    }

    return null;
  };

  const onUpdateState = () => {
    if (addOnes.github) {
      if (addOnes.skillsCard) {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          skillsCard: false,
          skillCardTheme: "",
          skillCardLayout: "compact",
        }));
      } else {
        setAddOnes((prev: ProfileAtomDetails) => ({
          ...prev,
          skillsCard: true,
        }));
      }
    } else {
      toast.info("Please Add Your Github user Name");
    }
  };

  const updateStateValue = () => {
    if (addOnes.skillsCard) {
      setAddOnes((prev: ProfileAtomDetails) => ({
        ...prev,
        skillCardTheme: gitSkillCard,
        skillCardLayout: skills,
      }));
    }
  };

  useEffect(() => {
    updateStateValue();
  }, [gitSkillCard, skills]);

  return (
    <div className="flex flex-col justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
      <div className="flex justify-center text-center items-center gap-2">
        <div onClick={onUpdateState}>
          <Checkbox
            {...boxLabel}
            sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
            color="default"
            checked={addOnes.skillsCard}
          />
        </div>
        <p className="text-xl font-medium text-center">Display Top Skills</p>
      </div>
      <div className="flex justify-start gap-8 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-4 items-center">
            <p>{supportedThemes.length} themes are available</p>
            <Select
              className="w-48"
              options={supportedThemes}
              defaultValue={supportedThemes[0]}
              placeholder={gitSkillCard}
              isSearchable
              menuPosition="fixed"
              /* classNames={{
                control: (state) => "bg-[#fff] border-[#434654] cursor-pointer",
                option: (state) =>
                  "bg-white text-black hover:bg-gray-900 hover:text-gray-100 cursor-pointer",
              }} */
              onChange={(e: any) => setGitSkillCard(e.value)}
            />
          </div>
          <div className="flex justify-center gap-4 items-center">
            <p>{skillCardTemplate.length} Templates are available</p>
            <Select
              className="w-48"
              options={skillCardTemplate}
              defaultValue={skillCardTemplate[1]}
              placeholder={skills}
              isSearchable
              menuPosition="fixed"
              classNames={{
                control: (state) => "bg-[#fff] border-[#434654] cursor-pointer",
                option: (state) =>
                  "bg-white text-black hover:bg-gray-900 hover:text-gray-100 cursor-pointer",
              }}
              onChange={(e: any) => setSkills(e.value)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center gap-2 items-center border border-gray-800 px-2.5 py-2.5 rounded-md cursor-pointer">
            <SkillCardFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
