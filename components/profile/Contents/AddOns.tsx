"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import { boxLabel } from "@/lib/boxLabel";
import { Checkbox } from "@mui/material";
import { AiFillFileAdd } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

type Props = {};

function AddOns({}: Props) {
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
              sx={{ color: "#fff" }}
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
        <div className="inline-block py-4 md:flex justify-between gap-4">
          <div className="flex justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
            <Checkbox
              {...boxLabel}
              sx={{ color: "#fff" }}
              color="default"
              onClick={() => onClick("trophy")}
              checked={addOnes.trophy}
            />
            <p className="text-lg font-medium">Display Github Trophy</p>
            <img
              src="https://github-profile-trophy.vercel.app/?username=sashenjayathilaka"
              alt="visitors"
              className="hidden md:flex w-[400px]"
            />
          </div>
          <div className="flex justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
            <Checkbox
              {...boxLabel}
              sx={{ color: "#fff" }}
              color="default"
              onClick={() => onClick("stats")}
              checked={addOnes.stats}
            />
            <p className="text-lg font-medium">
              Display Github Profile Stats Card
            </p>
            <img
              src="https://github-readme-stats.vercel.app/api?username=sashenjayathilaka&show_icons=true&locale=en"
              alt="visitors"
              className="hidden md:flex w-[300px]"
            />
          </div>
        </div>
        <div className="inline-block py-4 md:flex justify-start gap-4">
          <div className="flex justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
            <Checkbox
              {...boxLabel}
              sx={{ color: "#fff" }}
              color="default"
              onClick={() => onClick("skillsCard")}
              checked={addOnes.skillsCard}
            />
            <p className="text-lg font-medium">Display Top Skills</p>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=sashenjayathilaka&show_icons=true&locale=en&layout=compact"
              alt="visitors"
              className="hidden md:flex h-[130px]"
            />
          </div>
          <div className="flex justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
            <Checkbox
              {...boxLabel}
              sx={{ color: "#fff" }}
              color="default"
              onClick={() => onClick("streak")}
              checked={addOnes.streak}
            />
            <p className="text-lg font-medium">Display Github Streak Stats</p>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=sashenjayathilaka&"
              alt="visitors"
              className="hidden md:flex w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOns;
