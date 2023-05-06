"use client";

import { secondLine } from "@/lib/choose";
import { useEffect, useState } from "react";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";

type Props = {};

function SmallHeader({ }: Props) {
  const [firstImageArr, setFirstImageArr] = useState<string | null>(null);

  useEffect(() => {
    setFirstImageArr(secondLine[Math.floor(Math.random() * secondLine.length)]);
  }, [secondLine]);

  return (
    <div className="flex justify-center items-center px-4 py-2.5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between items-center">
          <img className="w-36" src={firstImageArr!} alt="" />
          <p className="text-xl font-medium">
            Github Repository README.md Generator
          </p>
        </div>
        <div className="flex justify-center gap-4 py-2.5">
          <a
            href="https://github.com/SashenJayathilaka/Awesome-Github-Readme-Generator.git"
            className="flex justify-center px-4 py-2.5 border border-gray-500 rounded-md hover: bg-gray-800 bg-transparent text-gray-800 dark:text-white items-center cursor-pointer"
          >
            <AiOutlineStar size={20} className="animate-spin mr-2" />
            Star This Repository
          </a>
          <a
            href="https://github.com/SashenJayathilaka/Awesome-Github-Readme-Generator.git"
            className="flex justify-center px-4 py-2.5 border border-gray-500 rounded-md hover: bg-gray-800 bg-transparent text-gray-800 dark:text-white items-center cursor-pointer"
          >
            <AiOutlineFork size={20} className="animate-bounce mr-2" />
            Fork This Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default SmallHeader;
