"use client";

import { gitTechStack } from "@/atom/techStack";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { useEffect, useState } from "react";
import { FaKey } from "react-icons/fa";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";

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

    const currentValue = gitHubTechStack.environmentVariables;

    if (envVariables) {
      const element = { envVariables };
      setListOfEnvVariables((ls) => [...ls, ...currentValue, element] as any);
      setEnvVariables("");
    }
  };

  const updateCurrentState = (value: string[]) => {
    if (value) {
      const unique = value.filter(onlyUnique).flat();

      setGitHubTechStack((prev) => ({
        ...prev,
        environmentVariables: unique,
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
        <div className="flex justify-start gap-2">
          <InputField
            label="Environment Variables"
            type="text"
            name="envVariables"
            onChange={onChangeEnvVariables}
            value={envVariables}
          />
          <FloatingActionButton onAddValue={onAddValue} />
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
