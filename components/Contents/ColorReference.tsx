"use client";

import { readmeRows } from "@/atom/readmeRow";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { IoMdColorPalette } from "react-icons/io";
import { useRecoilState } from "recoil";

import Heading from "../Heading";

type Props = {};

function ColorReference({}: Props) {
  const [primaryColor, setPrimaryColor] = useState("#222831");
  const [secondaryColor, setSecondaryColor] = useState("#393E46");
  const [accentColor, setAccentColor] = useState("#00ADB5");
  const [textColor, setTextColor] = useState("#EEEEEE");
  const [hexColor, setHexColor] = useState("primaryColor");
  const [readmeRow, setReadmeRow] = useRecoilState(readmeRows);

  const OnChangeHexColor = () => {
    if (hexColor === "primaryColor") {
      return <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />;
    } else if (hexColor === "secondaryColor") {
      return (
        <HexColorPicker color={secondaryColor} onChange={setSecondaryColor} />
      );
    } else if (hexColor === "accentColor") {
      return <HexColorPicker color={accentColor} onChange={setAccentColor} />;
    } else {
      return <HexColorPicker color={textColor} onChange={setTextColor} />;
    }

    return null;
  };

  const updateState = () => {
    if (primaryColor) {
      setReadmeRow((prev) => ({
        ...prev,
        primaryColor: primaryColor,
      }));
    }

    if (secondaryColor) {
      setReadmeRow((prev) => ({
        ...prev,
        secondaryColor: secondaryColor,
      }));
    }

    if (accentColor) {
      setReadmeRow((prev) => ({
        ...prev,
        accentColor: accentColor,
      }));
    }

    if (textColor) {
      setReadmeRow((prev) => ({
        ...prev,
        textColor: textColor,
      }));
    }
  };

  useEffect(() => {
    updateState();
  }, [primaryColor, secondaryColor, accentColor, textColor]);

  return (
    <div className="py-8">
      <Heading icon={IoMdColorPalette} label="Color Reference" />
      <div className="flex justify-center items-center py-4 gap-6">
        <div className="hidden lg:flex">
          <OnChangeHexColor />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-start gap-6 w-full items-center">
            <div className="w-[400px]">
              <input
                type="text"
                className="bg-transparent border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-medium"
                placeholder="Primary Color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                onClick={() => setHexColor("primaryColor")}
              />
            </div>
            <div className={`hidden lg:flex gap-2 w-[400px]`}>
              <p>Primary Color</p>
            </div>
          </div>
          <div className="flex justify-start gap-6 w-full items-center">
            <div className="w-[400px]">
              <input
                type="text"
                className="bg-transparent border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-medium"
                placeholder="Secondary Color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                onClick={() => setHexColor("secondaryColor")}
              />
            </div>
            <div className="hidden lg:flex gap-2 w-[400px]">
              <p>Secondary Color</p>
            </div>
          </div>
          <div className="flex justify-start gap-6 w-full items-center">
            <div className="w-[400px]">
              <input
                type="text"
                className="bg-transparent border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-medium"
                placeholder="Accent Color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                onClick={() => setHexColor("accentColor")}
              />
            </div>
            <div className="hidden lg:flex gap-2 w-[400px]">
              <p>Accent Color</p>
            </div>
          </div>
          <div className="flex justify-start gap-6 w-full items-center">
            <div className="w-[400px]">
              <input
                type="text"
                className="bg-transparent border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-medium"
                placeholder="Text Color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                onClick={() => setHexColor("textColor")}
              />
            </div>
            <div className="hidden lg:flex gap-2 w-[400px]">
              <p>Text Color</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorReference;
