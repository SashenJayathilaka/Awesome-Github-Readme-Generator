/* eslint-disable @next/next/no-img-element */
"use client";

import { JsonDataType } from "@/type";
import { motion } from "framer-motion";
import { FormEvent } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  files: JsonDataType | null;
  fileName: string;
  isLoading: boolean;
  setFiles: (value: JsonDataType | null) => void;
  setFileName: (value: string) => void;
  handleProcess: (event: FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Options({
  files,
  fileName,
  isLoading,
  setFiles,
  setFileName,
  handleProcess,
  handleChange,
}: Props) {
  return (
    <div className="w-full p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:bg-gradient-to-r dark:from-[#191a47] dark:via-[#0d0d37] dark:to-[#06375f] rounded-xl z-10">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Config options
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Enter the downloaded JSON text to restore
        </p>
      </div>
      <form className="mt-8 space-y-3" action="#" method="POST">
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Json Document
          </label>
          <div className="flex items-center justify-center w-full">
            {files || fileName ? (
              <div className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer overflow-hidden items-center">
                <div
                  onClick={() => {
                    setFiles(null);
                    setFileName("");
                  }}
                >
                  {fileName.includes("json") ? (
                    <motion.img
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src="https://cdn2.iconfinder.com/data/icons/document-file-fill-outline-1/64/File_Document_Doc_Folder_JSON-512.png"
                      alt="img"
                      className="w-36 items-center"
                    />
                  ) : (
                    <motion.img
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src="https://cdn3.iconfinder.com/data/icons/file-management/32/5_forbidden_ban_no_file_document-512.png"
                      alt="img"
                      className="w-36 items-center"
                    />
                  )}
                  <p>{fileName}</p>
                </div>
              </div>
            ) : (
              <label className="flex flex-col rounded-lg border-4 border-dashed dark:border-gray-500 border-gray-300 w-full h-60 p-10 group text-center cursor-pointer">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="h-full w-full text-center flex flex-col justify-center items-center"
                >
                  <div className="flex flex-auto max-h-48 w-2/5 -mt-10 justify-center">
                    <img
                      className="has-mask h-36 object-center"
                      src="https://cosmoindia.in/wp-content/uploads/2020/08/businessgrowth.png"
                      alt="freepik image"
                    />
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or{" "}
                    <span id="" className="text-blue-600 hover:underline">
                      select a file
                    </span>{" "}
                    from your computer
                  </p>
                </motion.div>
                <input type="file" className="hidden" onChange={handleChange} />
              </label>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span>File type: json</span>
        </p>
        <div>
          <button
            onClick={handleProcess}
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 cursor-pointer transition ease-in duration-300"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters size={25} className="animate-spin" />
            ) : (
              "Process"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Options;
