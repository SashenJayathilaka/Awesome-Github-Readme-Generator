"use client";

import React, { useState } from "react";
import {
  AiOutlineDownload,
  AiOutlineEye,
  AiOutlineFileDone,
} from "react-icons/ai";
import { BiArrowBack, BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";

type Props = {
  setIsShow: (value: boolean) => void;
  setIsMdPreview: (value: boolean) => void;
  isMdPreview: boolean;
};

function ProfileButtonAction({
  setIsShow,
  setIsMdPreview,
  isMdPreview,
}: Props) {
  const [isCopy, setIsCopy] = useState(false);

  const handleDownloadMarkdown = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMdPreview) {
      const markdownContent: any = document.getElementById("markdown-profile");
      const tempElement = document.createElement("a");
      tempElement.setAttribute(
        "href",
        `data:text/markdown;charset=utf-8,${encodeURIComponent(
          markdownContent.innerText
        )}`
      );
      tempElement.setAttribute("download", "README.md");
      tempElement.style.display = "none";
      document.body.appendChild(tempElement);
      tempElement.click();
      document.body.removeChild(tempElement);
    } else {
      toast.warn("Please Switch Preview Code");
    }
  };

  const handleCopyToClipboard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isMdPreview) {
      setIsCopy(true);

      const range = document.createRange();
      range.selectNode(document.getElementById("markdown-profile") as any);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();

      setTimeout(() => {
        setIsCopy(false);
      }, 1000);
    } else {
      toast.warn("Please Switch Preview Code");
    }
  };

  return (
    <div className="flex justify-between items-center py-2.5">
      <button
        onClick={() => setIsShow(true)}
        className="bg-gray-700 text-gray-300 hover:bg-slate-600 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
      >
        <BiArrowBack size={20} />
        <span>Back To Edit</span>
      </button>
      <button
        onClick={(e: any) => handleCopyToClipboard(e)}
        className="bg-gray-700 text-gray-300 hover:bg-slate-600 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
      >
        {isCopy ? (
          <>
            <AiOutlineFileDone size={20} />
            <span>Copied</span>
          </>
        ) : (
          <>
            <BiCopy size={20} />
            <span>Copy Markdown</span>
          </>
        )}
      </button>
      <button
        onClick={(e: any) => handleDownloadMarkdown(e)}
        className="bg-gray-700 text-gray-300 hover:bg-slate-600 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
      >
        <AiOutlineDownload size={20} />
        <span>Download Markdown</span>
      </button>
      {/*       <button
        onClick={() => toast.info("This feature will be coming soon")}
        className="bg-gray-700 text-gray-300 hover:bg-slate-600 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
      >
        <AiOutlineSave size={20} />
        <span>Save Markdown</span>
      </button> */}
      <button
        onClick={() =>
          isMdPreview ? setIsMdPreview(false) : setIsMdPreview(true)
        }
        className="bg-gray-700 text-gray-300 hover:bg-slate-600 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
      >
        {isMdPreview ? (
          <>
            <AiOutlineEye size={20} />
            <span>Preview Markdown</span>
          </>
        ) : (
          <>
            <AiOutlineEye size={20} />
            <span>Preview Code</span>
          </>
        )}
      </button>
    </div>
  );
}

export default ProfileButtonAction;
