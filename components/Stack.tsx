"use client";

import React from "react";
import { IconType } from "react-icons";
import InputField from "./InputField";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
  stackValue: string;
  label: string;
  secondLabel: string;
  type: string;
  name: string;
  secondName: string;
  value?: string;
  urlValue?: string;
  gitHubTechStack?: string[];
  strandedLabel: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  icon: IconType;
  onAddValue: (
    event: React.FormEvent<HTMLFormElement>,
    strandedLabel: string
  ) => void;
  removeElement?: any;
};

function Stack({
  label,
  stackValue,
  secondLabel,
  secondName,
  type,
  name,
  value,
  urlValue,
  gitHubTechStack,
  removeElement,
  strandedLabel,
  onChange,
  icon: Icon,
  onAddValue,
}: Props) {
  return (
    <div className="flex flex-col space-y-2 py-4">
      <div className="flex justify-start gap-2 items-center">
        <Icon size={25} />
        <p className="text-sm font-medium">{stackValue}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-2">
          <InputField
            onChange={onChange}
            label={label}
            type={type}
            name={name}
            value={value}
          />
          <InputField
            onChange={onChange}
            label={secondLabel}
            type={type}
            name={secondName}
            value={urlValue}
          />
          <button
            onClick={(e: any) => onAddValue(e, strandedLabel)}
            className="bg-gray-800 dark:bg-[#265D97] hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <span>Add</span>
            <IoIosAddCircle size={15} />
          </button>
        </div>
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {gitHubTechStack?.map((teach: any, index) => (
            <div
              key={index}
              onClick={() => removeElement(teach, strandedLabel)}
              className="border border-[#0F2557] px-2.5 py-2 items-center text-center cursor-pointer rounded-full"
            >
              <p>{teach[name]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
