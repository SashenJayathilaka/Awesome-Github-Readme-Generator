"use client";

import { gitTechStack } from "@/atom/techStack";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function Deployment({}: Props) {
  const [deploymentValues, setDeploymentValue] = useState({
    deploymentValue: "",
    deploymentCommand: "",
  });
  const [listOfDeployment, setListOfDeployment] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeploymentValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const deploymentValue = deploymentValues.deploymentValue;
    const deploymentCommand = deploymentValues.deploymentCommand;
    const currentValue = gitHubTechStack.deployment;

    if (deploymentValue || deploymentCommand) {
      const element = { deploymentValue, deploymentCommand };
      setListOfDeployment((ls) => [...ls, ...currentValue, element] as any);
      setDeploymentValue((prev) => ({
        ...prev,
        deploymentValue: "",
        deploymentCommand: "",
      }));
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setGitHubTechStack((prev) => ({
      ...prev,
      deployment: unique,
    }));
  };

  const removeElement = (value: string, label: string) => {
    if (value) {
      const removeCurrentState = listOfDeployment.filter(
        (element: any) => element[label] !== value
      );

      setListOfDeployment(removeCurrentState);

      const removeItem = gitHubTechStack.deployment.filter(
        (element: any) => element[label] !== value
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        deployment: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateState(listOfDeployment);
  }, [listOfDeployment]);

  return (
    <div className="py-8">
      <Heading label="Deployment" icon={BsFillFlagFill} />
      <div className="flex flex-col justify-between gap-4">
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChange}
            label="Topic"
            type="text"
            name="deploymentValue"
            value={deploymentValues.deploymentValue}
          />
          <InputField
            onChange={onChange}
            label="Deployment command"
            type="text"
            name="deploymentCommand"
            value={deploymentValues.deploymentCommand}
          />
          <FloatingActionButton onAddValue={onAddValue} />
        </div>
        <div className="inline-block md:flex justify-start gap-52">
          <div className="hidden md:flex flex-col justify-between gap-2 max-h-36">
            <div className="flex gap-2">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Example
              </p>
            </div>
            <div className="text-sm font-normal text-gray-500 dark:text-[#7c8691]">
              <p>To deploy this project run</p>
              <p className="bg-slate-800 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center text-sm font-normal text-[#7c8691]">
                yarn deploy
              </p>
            </div>
          </div>
          {gitHubTechStack.deployment.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex flex-col justify-between gap-2 h-full"
            >
              <div className="flex gap-2">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Your Details
                </p>
              </div>
              {gitHubTechStack.deployment.map((data: any, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  key={index}
                >
                  {data.deploymentValue && (
                    <div className="flex flex-col gap-2 items-start">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center text-sm font-normal text-gray-500 dark:text-[#7c8691]"
                        onClick={() =>
                          removeElement(data.deploymentValue, "deploymentValue")
                        }
                      >
                        {data.deploymentValue}
                      </p>
                    </div>
                  )}
                  {data.deploymentCommand && (
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex justify-start gap-2 items-center">
                        <p
                          className="bg-slate-800 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center text-sm font-normal text-[#7c8691]"
                          onClick={() =>
                            removeElement(
                              data.deploymentCommand,
                              "deploymentCommand"
                            )
                          }
                        >
                          {data.deploymentCommand}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Deployment;
