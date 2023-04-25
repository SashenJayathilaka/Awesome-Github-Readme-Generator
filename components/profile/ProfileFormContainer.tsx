"use client";

import { AiOutlineReload } from "react-icons/ai";
import { MdRestore } from "react-icons/md";
import Skills from "./Contents/Skills";
import Social from "./Contents/Social";
import Subtitle from "./Contents/Subtitle";
import Title from "./Contents/Title";
import Work from "./Contents/Work";

type Props = {};

function ProfileFormContainer({}: Props) {
  return (
    <div>
      <div className="flex justify-start gap-4 py-6">
        <button
          // onClick={() => setIsStore(true)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
        >
          <MdRestore size={20} />
          Restore Previous values
        </button>
        <button
          // onClick={() => window.location.reload()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
        >
          <AiOutlineReload size={20} />
          Clear Form
        </button>
      </div>
      <div className="px-14 py-14 bg-gradient-to-r from-[#191a47] via-[#0d0d37] to-[#06375f] shadow-2xl rounded-md">
        <Title />
        <Subtitle />
        <Work />
        <Skills />
        <Social />
      </div>
    </div>
  );
}

export default ProfileFormContainer;
