"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AiFillGithub,
  AiOutlineCloseCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  const [show, setshow] = useState(false);

  return (
    <div className="bg-transparent shadow-2xl">
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between ">
          <div className="hidden sm:flex flex-row items-center space-x-6">
            <CiTwitter size={25} />
            <AiFillGithub size={25} />
            <AiOutlineLinkedin size={25} />
            <AiOutlineInstagram size={25} />
          </div>
          <div
            className=" flex space-x-3 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src="https://user-images.githubusercontent.com/99184393/232021800-8e2d8151-7484-451c-a194-ced6ab249b00.png"
              alt=""
              className="w-10"
            />
            <h1 className="font-semibold text-2xl leading-6 text-gray-300">
              Github Readme File Generator
            </h1>
          </div>
          <div className="hidden sm:flex flex-row space-x-4">
            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
              Sign Up
            </button>
            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
              Sign In
            </button>
          </div>
          {/* Burger Icon */}
          <div
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300  justify-center items-center sm:hidden cursor-pointer`}
          >
            {!show ? (
              <AiOutlineMenu size={25} onClick={() => setshow(!show)} />
            ) : (
              <AiOutlineCloseCircle size={25} onClick={() => setshow(!show)} />
            )}
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <CiTwitter size={25} />
            <AiFillGithub size={25} />
            <AiOutlineLinkedin size={25} />
            <AiOutlineInstagram size={25} />
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 hover:duration-150 justify-center items-center">
              Sign Up
            </button>
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
