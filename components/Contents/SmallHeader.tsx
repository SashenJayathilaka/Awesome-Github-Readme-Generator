"use client";

import { secondLine } from "@/lib/choose";
import { useEffect, useState } from "react";

type Props = {};

function SmallHeader({}: Props) {
  const [firstImageArr, setFirstImageArr] = useState<string | null>(null);

  useEffect(() => {
    setFirstImageArr(secondLine[Math.floor(Math.random() * secondLine.length)]);
  }, [secondLine]);
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex justify-between gap-4 items-center">
        <img className="w-36" src={firstImageArr!} alt="" />
        <p className="text-xl font-medium">
          Github Repository Readme.Md Generator
        </p>
        <img className="w-36" src={firstImageArr!} alt="" />
      </div>
    </div>
  );
}

export default SmallHeader;
