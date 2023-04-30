"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import { boxLabel } from "@/lib/boxLabel";
import { Checkbox } from "@mui/material";
import { useTheme } from "next-themes";
import { AiFillFileAdd } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import ProfileTrophy from "./card/ProfileTrophy";
import StatsCard from "./card/StatsCard";
import StreakStatsCard from "./card/StreakStatsCard";
import SkillCard from "./card/TopSkills";

type Props = {};

function AddOns({}: Props) {
  const { resolvedTheme } = useTheme();
  const [addOnes, setAddOnes] = useRecoilState(profileAtomDetail);

  const onClick = (value: string | any) => {
    if (addOnes.github) {
      if (addOnes[value]) {
        setAddOnes((prev) => ({
          ...prev,
          [value]: false,
        }));
      } else {
        setAddOnes((prev) => ({
          ...prev,
          [value]: true,
        }));
      }
    } else {
      toast.info("Please Add Your Github user Name");
    }
  };

  return (
    <div className="py-6">
      <Heading icon={AiFillFileAdd} label="Add-ons" />
      <div className="flex flex-col gap-4 py-2">
        <div className="flex justify-start gap-4">
          <div className="flex justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
            <Checkbox
              {...boxLabel}
              sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
              color="default"
              onClick={() => onClick("visitors")}
              checked={addOnes.visitors}
            />
            <p className="text-lg font-medium">Display Visitors Count Badge</p>
            <img
              src="https://komarev.com/ghpvc/?username=sashenjayathilaka&label=Profile%20views&color=0e75b6&style=flat"
              alt="visitors"
              className="hidden md:flex"
            />
          </div>
        </div>
        <div className="flex justify-between gap-12 py-4">
          <ProfileTrophy
            addOnes={addOnes}
            setAddOnes={setAddOnes}
            resolvedTheme={resolvedTheme}
          />
        </div>
        <div className="inline-block md:flex justify-start gap-12 py-4">
          <StatsCard
            addOnes={addOnes}
            setAddOnes={setAddOnes}
            resolvedTheme={resolvedTheme}
          />
          <StreakStatsCard
            addOnes={addOnes}
            setAddOnes={setAddOnes}
            resolvedTheme={resolvedTheme}
          />
        </div>
        <div className="flex justify-start gap-12 py-4">
          <SkillCard
            addOnes={addOnes}
            setAddOnes={setAddOnes}
            resolvedTheme={resolvedTheme}
          />
        </div>
      </div>
    </div>
  );
}

export default AddOns;
