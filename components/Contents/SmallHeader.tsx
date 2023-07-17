"use client";

import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";

type Props = {};

function SmallHeader({}: Props) {
  return (
    <div className="flex justify-center items-center px-4 py-2.5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-36"
            src="https://dl.dropboxusercontent.com/scl/fi/n38m6skphjqktvxruhed7/5b85ea21472c504d5e2b8257fae9.png?rlkey=05tm180nt0qfxk35hxk9fisp2&dl=0"
            alt=""
          />
          <p className="text-xl font-medium">
            Awesome Github Repository README.md Generator
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
