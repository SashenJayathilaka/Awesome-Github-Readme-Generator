"use client";

import { gitTechStack } from "@/atom/techStack";
import { useEffect, useState } from "react";
import { FaKey } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useRecoilState } from "recoil";

import Heading from "./Heading";
import InputField from "./InputField";

type Props = {};

function EnvironmentVariables({}: Props) {
  const [envVariables, setEnvVariables] = useState("");
  const [listOfEnvVariables, setListOfEnvVariables] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChangeEnvVariables = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnvVariables(event.target.value);
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (envVariables) {
      const element = { envVariables };
      setListOfEnvVariables((ls) => [...ls, element] as any);
      setEnvVariables("");
    }
  };

  const updateCurrentState = (value: string[]) => {
    if (value) {
      setGitHubTechStack((prev) => ({
        ...prev,
        environmentVariables: value,
      }));
    }
  };

  const removeElement = (label: any) => {
    if (gitHubTechStack.environmentVariables.length > 0) {
      const removeCurrentState = listOfEnvVariables.filter(
        (element: any) => element.envVariables !== label.envVariables
      );
      setListOfEnvVariables(removeCurrentState);

      const removeItem = gitHubTechStack.environmentVariables.filter(
        (element: any) => element.envVariables !== label.envVariables
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        environmentVariables: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateCurrentState(listOfEnvVariables);
  }, [listOfEnvVariables]);

  return (
    <div className="py-8">
      <Heading icon={FaKey} label="Environment Variables" />
      <div className="flex justify-between py-4">
        <div className="flex justify-start gap-2 items-center">
          <InputField
            label="Environment Variables"
            type="text"
            name="envVariables"
            onChange={onChangeEnvVariables}
            value={envVariables}
          />
          <button
            onClick={(e: any) => onAddValue(e)}
            className="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <span>Add</span>
            <IoIosAddCircle size={15} />
          </button>
        </div>
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {gitHubTechStack.environmentVariables.map((envData: any, index) => (
            <div
              key={index}
              onClick={() => removeElement(envData)}
              className="border border-[#0F2557] px-2.5 py-2 items-center text-center cursor-pointer rounded-full m-auto"
            >
              <p>{envData.envVariables}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EnvironmentVariables;
