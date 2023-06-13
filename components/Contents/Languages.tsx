/* eslint-disable @next/next/no-img-element */
"use client";

import { boxLabel } from "@/lib/boxLabel";
import { Checkbox, Tooltip } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  image: string;
  stateTechnologies: string[];
  listOfTechnologies: string[];
  setListOfTechnologies: (value: any) => void;
  setStateTechnologies: (value: any) => void;
};

function Languages({
  label,
  image,
  stateTechnologies,
  listOfTechnologies,
  setListOfTechnologies,
  setStateTechnologies,
}: Props) {
  const { resolvedTheme } = useTheme();
  const [isAtomValueExits, setIsAtomValueExits] = useState(false);

  const onChangeTechnology = () => {
    if (isAtomValueExits) {
      const removeCurrentState = listOfTechnologies.filter(
        (element: any) => element.label !== label
      );
      setListOfTechnologies(removeCurrentState);

      const removeItem = stateTechnologies.filter(
        (element: any) => element.label !== label
      );
      setStateTechnologies((prev: any) => ({
        ...prev,
        skills: removeItem,
      }));
    } else {
      const element = { label, image };
      setListOfTechnologies((ls: any) => [
        ...ls,
        ...stateTechnologies,
        element,
      ]);
    }
  };

  useEffect(() => {
    const isExits = stateTechnologies.some(function (el: any) {
      return el.label === label;
    });
    setIsAtomValueExits(isExits);
  }, [label, stateTechnologies]);

  return (
    <div>
      <Tooltip title={label}>
        <div
          className={`flex justify-between items-center border border-gray-300 dark:border-[#0F2557] hover:bg-slate-200 w-full overflow-hidden rounded-xl px-4 py-4 space-y-2 dark:hover:bg-[#161748] hover-shadow-xl hover:text-black cursor-pointer ${
            isAtomValueExits && "bg-slate-200 dark:bg-[#04082b]"
          }`}
          onClick={onChangeTechnology}
        >
          <Checkbox
            {...boxLabel}
            value={label}
            name={label}
            sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
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

export default Languages;
