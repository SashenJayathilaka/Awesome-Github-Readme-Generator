"use client";

import { AiFillGithub } from "react-icons/ai";

type Props = {};

function Bot({}: Props) {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <a href="https://github.com/SashenJayathilaka/Awesome-Github-Readme-Generator.git">
        <AiFillGithub size={30} />
      </a>
    </div>
  );
}

export default Bot;
