"use client";

import { secondLine } from "@/lib/choose";
import { useEffect, useState } from "react";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";

type Props = {};

function SmallHeader({}: Props) {
  const [firstImageArr, setFirstImageArr] = useState<string | null>(null);

  useEffect(() => {
    setFirstImageArr(secondLine[Math.floor(Math.random() * secondLine.length)]);
  }, [secondLine]);
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between gap-4 items-center">
          <img className="w-36" src={firstImageArr!} alt="" />
          <p className="text-xl font-medium">
            Github Repository Readme.Md Generator
          </p>
          <img className="w-36" src={firstImageArr!} alt="" />
        </div>
        <div className="flex justify-center gap-4">
          <button className="flex justify-center px-4 py-2.5 border border-gray-500 rounded-md hover: bg-gray-800 bg-transparent text-white items-center">
            <AiOutlineStar size={20} className="animate-spin mr-2" />
            Star This Repository
          </button>
          <button className="flex justify-center px-4 py-2.5 border border-gray-500 rounded-md hover: bg-gray-800 bg-transparent text-white items-center">
            <AiOutlineFork size={20} className="animate-bounce mr-2" />
            Fork This Repository
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallHeader;
