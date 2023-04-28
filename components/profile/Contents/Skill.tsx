"use client";

import { boxLabel } from "@/lib/boxLabel";
import { Checkbox, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  image: string;
  stateSkill: string[];
  listOfSkills: string[];
  setListOfSkills: (value: any) => void;
  setStateSkill: (value: any) => void;
};

function Skill({
  label,
  image,
  stateSkill,
  listOfSkills,
  setListOfSkills,
  setStateSkill,
}: Props) {
  const [isAtomValueExits, setIsAtomValueExits] = useState(false);

  const onChangeTechnology = () => {
    if (isAtomValueExits) {
      const removeCurrentState = listOfSkills.filter(
        (element: any) => element.label !== label
      );
      setListOfSkills(removeCurrentState);

      const removeItem = stateSkill.filter(
        (element: any) => element.label !== label
      );
      setStateSkill((prev: any) => ({
        ...prev,
        skills: removeItem,
      }));
    } else {
      const element = { label, image };
      setListOfSkills((ls: any) => [...ls, ...stateSkill, element]);
    }
  };

  useEffect(() => {
    const isExits = stateSkill.some(function (el: any) {
      return el.label === label;
    });
    setIsAtomValueExits(isExits);
  }, [stateSkill]);

  return (
    <div>
      <Tooltip title={label}>
        <div
          className={`flex justify-between items-center border border-[#0F2557] w-full overflow-hidden rounded-xl px-4 py-4 space-y-2 hover:bg-[#161748] hover-shadow-xl hover:text-black cursor-pointer ${
            isAtomValueExits && "bg-[#04082b]"
          }`}
          onClick={onChangeTechnology}
        >
          <Checkbox
            {...boxLabel}
            value={label}
            name={label}
            sx={{ color: "#fff" }}
            color="default"
            checked={isAtomValueExits}
          />
          {isAtomValueExits ? (
            <img
              src={image}
              alt={label}
              className="object-cover h-10 w-10 group-hover:scale-110 transition animate-bounce"
            />
          ) : (
            <img
              src={image}
              alt={label}
              className="object-cover h-10 w-10 group-hover:scale-110 transition"
            />
          )}
        </div>
      </Tooltip>
    </div>
  );
}

export default Skill;
