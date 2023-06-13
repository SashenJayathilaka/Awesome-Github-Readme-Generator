"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { FaKey } from "react-icons/fa";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function EnvironmentVariables({}: Props) {
  const [envVariables, setEnvVariables] = useState("");
  const [listOfEnvVariables, setListOfEnvVariables] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitRepoDetails);

  const onChangeEnvVariables = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnvVariables(event.target.value);
  };

  const onAddValue = (event: FormEvent) => {
    event.preventDefault();

    const currentValue = gitHubTechStack.environmentVariables;

    if (envVariables) {
      const element = { envVariables };
      setListOfEnvVariables((ls) => [...ls, ...currentValue, element] as any);
      setEnvVariables("");
    }
  };

  const updateCurrentState = useCallback(
    (value: string[]) => {
      if (value) {
        const unique = value.filter(onlyUnique).flat();

        setGitHubTechStack((prev) => ({
          ...prev,
          environmentVariables: unique,
        }));
      }
    },
    [setGitHubTechStack]
  );

  const removeElement = useCallback(
    (label: any) => {
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
    },
    [
      gitHubTechStack.environmentVariables,
      listOfEnvVariables,
      setGitHubTechStack,
    ]
  );

  useEffect(() => {
    updateCurrentState(listOfEnvVariables);
  }, [listOfEnvVariables, updateCurrentState]);

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
