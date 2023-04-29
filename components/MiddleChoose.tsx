"use client";

import { firstLine, secondLine } from "@/lib/choose";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Loader from "./Loader";

type Props = {};

function MiddleChoose({}: Props) {
  const router = useRouter();
  const [firstImageArr, setFirstImageArr] = useState<string | null>(null);
  const [secondImageArr, setSecondImageArr] = useState<string | null>(null);

  useEffect(() => {
    setFirstImageArr(firstLine[Math.floor(Math.random() * firstLine.length)]);
    setSecondImageArr(
      secondLine[Math.floor(Math.random() * secondLine.length)]
    );
  }, [firstLine, secondLine]);

  return (
    <div>
      {firstImageArr && secondImageArr ? (
        <section className="px-6 xl:px-0">
          <div className="mt-20 mx-auto container">
            <div className="flex flex-col lg:items-center justify-center w-full">
              <h1 className="font-semibold text-gray-700 dark:text-gray-300 text-3xl md:text-4xl">
                Chose Github Readme Template
              </h1>
              <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl text-gray-500">
                We have several plans to showcase your Business. Get everything
                you need
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="pt-14">
                <div className="container mx-auto">
                  <div className="flex flex-wrap mb-12 justify-between sm:justify-center w-full -mx-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 mb-4 px-6"
                    >
                      <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                        <h4 className="text-2xl text-indigo-700 font-semibold pb-8 text-center">
                          Github Profile Readme.Md Generator
                        </h4>
                        <div className="flex justify-center items-center">
                          <img
                            src={firstImageArr!}
                            className="w-[200px]"
                            alt=""
                          />
                        </div>
                        <p className="text-gray-500 text-center px-2">
                          You can Github Profile Readme.Md Generator
                        </p>
                        <button
                          onClick={() => router.push("/profile")}
                          className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold"
                        >
                          Choose
                        </button>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 mb-4 px-6"
                    >
                      <div className="py-5 px-4 bg-indigo-700 border border-gray-200 shadow rounded-lg text-left">
                        <h4 className="text-2xl text-white font-semibold pb-8 text-center">
                          Github Repository Readme.Md Generator
                        </h4>

                        <div className="flex justify-center items-center">
                          <img
                            src={secondImageArr!}
                            className="w-[200px]"
                            alt=""
                          />
                        </div>
                        <p className="text-gray-100 text-center px-2">
                          You can Github Profile Readme.Md Generator
                        </p>
                        <button
                          onClick={() =>
                            toast.info("This feature will be coming soon")
                          }
                          className="mt-5 w-full text-indigo-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold3"
                        >
                          Choose
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MiddleChoose;
