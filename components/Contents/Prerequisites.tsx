"use client";

import { gitTechStack } from "@/atom/techStack";
import { useEffect, useState } from "react";
import { FaBowlingBall } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdImportantDevices } from "react-icons/md";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function Prerequisites({}: Props) {
  const [prerequisitesValues, setPrerequisitesValue] = useState({
    prerequisitesValue: "",
    prerequisitesUrl: "",
    codeLine: "",
  });
  const [listOfPrerequisites, setListOfPrerequisites] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChangePrerequisites = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrerequisitesValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const prerequisitesValue = prerequisitesValues.prerequisitesValue;
    const url = prerequisitesValues.prerequisitesUrl;
    const code = prerequisitesValues.codeLine;

    if (prerequisitesValue || code) {
      if (prerequisitesValue || url || code) {
        const element = { prerequisitesValue, url, code };
        setListOfPrerequisites((ls) => [...ls, element] as any);
        setPrerequisitesValue((prev) => ({
          ...prev,
          prerequisitesValue: "",
          prerequisitesUrl: "",
          codeLine: "",
        }));
      }
    } else {
      toast.warn("You can't input url value only");
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    setGitHubTechStack((prev) => ({
      ...prev,
      prerequisites: value,
    }));
  };

  const removeElement = (value: string, label: string) => {
    if (value) {
      const removeCurrentState = listOfPrerequisites.filter(
        (element: any) => element[label] !== value
      );

      setListOfPrerequisites(removeCurrentState);

      const removeItem = gitHubTechStack.prerequisites.filter(
        (element: any) => element[label] !== value
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        prerequisites: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateState(listOfPrerequisites);
  }, [listOfPrerequisites]);

  return (
    <div className="py-6 h-full mb-12">
      <Heading label="Prerequisites" icon={MdImportantDevices} />
      <div className="flex flex-col justify-between gap-4">
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChangePrerequisites}
            label="If you have any prerequisites?"
            type="text"
            name="prerequisitesValue"
            value={prerequisitesValues.prerequisitesValue}
          />
          <InputField
            onChange={onChangePrerequisites}
            label="If you have prerequisites URL?"
            type="text"
            name="prerequisitesUrl"
            value={prerequisitesValues.prerequisitesUrl}
          />
          <InputField
            onChange={onChangePrerequisites}
            label="If you have code line?"
            type="text"
            name="codeLine"
            value={prerequisitesValues.codeLine}
          />
          <button
            onClick={(e: any) => onAddValue(e)}
            className="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <span>Add</span>
            <IoIosAddCircle size={15} />
          </button>
        </div>
        <div className="inline-block md:flex justify-start gap-36">
          <div className="hidden md:flex flex-col justify-between gap-2 max-h-36">
            <div className="flex gap-2">
              <p className="text-lg font-medium">Example</p>
            </div>
            <p className="flex gap-2 items-center">
              <FaBowlingBall size={8} />
              Install Node JS in your computer
              <a
                href="https://nodejs.org/en/"
                className="font-medium text-blue-800"
              >
                {" "}
                HERE
              </a>
            </p>
            <p className="flex gap-2 items-center">
              <FaBowlingBall size={8} />
              Sign up for a Google Cloud Platform
              <a
                href="https://console.cloud.google.com/"
                className="font-medium text-blue-800"
              >
                {" "}
                HERE
              </a>
            </p>
            <div className="flex flex-col gap-1 py-5">
              <p>This project uses Yarn as package manager</p>
              <p className="bg-[#161748] px-2.5 py-2 rounded-md w-[200px] items-center">
                npm install --global yarn
              </p>
            </div>
          </div>
          {gitHubTechStack.prerequisites.length > 0 && (
            <div className="flex flex-col justify-between gap-2 h-full">
              <div className="flex gap-2">
                <p className="text-lg font-medium">Your Prerequisites</p>
              </div>
              {gitHubTechStack.prerequisites.map((data: any, index) => (
                <div key={index}>
                  {data.prerequisitesValue && (
                    <div className="flex flex-col gap-2 items-start">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center"
                        onClick={() =>
                          removeElement(
                            data.prerequisitesValue,
                            "prerequisitesValue"
                          )
                        }
                      >
                        <FaBowlingBall size={8} />
                        {data.prerequisitesValue}
                        {data.url && (
                          <a
                            className="font-medium text-blue-800"
                            href={`${data.url}`}
                          >
                            {" "}
                            Here
                          </a>
                        )}
                      </p>
                    </div>
                  )}
                  {data.code && (
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex justify-start gap-2 items-center">
                        {!data.prerequisitesValue && <FaBowlingBall size={8} />}
                        <p
                          className="bg-[#161748] px-2.5 py-2 rounded-md w-[200px] items-center cursor-pointer text-center"
                          onClick={() => removeElement(data.code, "code")}
                        >
                          {data.code}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Prerequisites;
