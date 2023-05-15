"use client";

import { gitTechStack } from "@/atom/techStack";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";
import InstallCodeLine from "./InstallCodeLine";

type Props = {};

function Installation({}: Props) {
  const [installationValues, setInstallationValue] = useState({
    installationValue: "",
    installationCommand: "",
  });
  const [listOfInstallation, setListOfInstallation] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChangeInstallation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstallationValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const installationValue = installationValues.installationValue;
    const installationCommand = installationValues.installationCommand;
    const currentValue = gitHubTechStack.installation;

    if (installationValue || installationCommand) {
      const element = { installationValue, installationCommand };
      setListOfInstallation((ls) => [...ls, ...currentValue, element] as any);
      setInstallationValue((prev) => ({
        ...prev,
        installationValue: "",
        installationCommand: "",
      }));
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setGitHubTechStack((prev) => ({
      ...prev,
      installation: unique,
    }));
  };

  const removeElement = (value: string, label: string) => {
    if (value) {
      const removeCurrentState = listOfInstallation.filter(
        (element: any) => element[label] !== value
      );

      setListOfInstallation(removeCurrentState);

      const removeItem = gitHubTechStack.installation.filter(
        (element: any) => element[label] !== value
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        installation: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateState(listOfInstallation);
  }, [listOfInstallation]);

  return (
    <div className="py-8">
      <Heading label="Installation" icon={AiFillSetting} />
      <div className="flex flex-col justify-between gap-4">
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChangeInstallation}
            label="Topic"
            type="text"
            name="installationValue"
            value={installationValues.installationValue}
          />
          <InputField
            onChange={onChangeInstallation}
            label="installation command"
            type="text"
            name="installationCommand"
            value={installationValues.installationCommand}
          />
          <FloatingActionButton onAddValue={onAddValue} />
        </div>
        <div className="inline-block md:flex justify-start gap-36">
          <div className="hidden md:flex flex-col justify-between gap-2 max-h-36">
            <div className="flex gap-2">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Example
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-gray-500 dark:text-[#7c8691]">
                This project uses Yarn as package manager
              </p>
              <InstallCodeLine label="npm install --global yarn" />
            </div>
          </div>
          {gitHubTechStack.installation.length > 0 && (
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
                  Your Installation
                </p>
              </div>
              {gitHubTechStack.installation.map((data: any, index) => (
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
                  {data.installationValue && (
                    <div className="flex flex-col gap-2 items-start">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center text-sm font-normal text-gray-500 dark:text-[#7c8691]"
                        onClick={() =>
                          removeElement(
                            data.installationValue,
                            "installationValue"
                          )
                        }
                      >
                        {data.installationValue}
                      </p>
                    </div>
                  )}
                  {data.installationCommand && (
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex justify-start gap-2 items-center">
                        <p
                          className="dark:bg-slate-800 bg-slate-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center text-sm font-normal text-gray-700 dark:text-[#7c8691]"
                          onClick={() =>
                            removeElement(
                              data.installationCommand,
                              "installationCommand"
                            )
                          }
                        >
                          {data.installationCommand}
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

export default Installation;
