"use client";

import { gitTechStack } from "@/atom/techStack";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiTestTube } from "react-icons/bi";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";
import InstallCodeLine from "./InstallCodeLine";

type Props = {};

function RunningTests({}: Props) {
  const [runningTestsValues, setRunningTestsValue] = useState({
    runningTestsValue: "",
    runningTestsCommand: "",
  });
  const [listOfRunningTests, setListOfRunningTests] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRunningTestsValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const runningTestsValue = runningTestsValues.runningTestsValue;
    const runningTestsCommand = runningTestsValues.runningTestsCommand;
    const currentValue = gitHubTechStack.runningTests;

    if (runningTestsValue || runningTestsCommand) {
      const element = { runningTestsValue, runningTestsCommand };
      setListOfRunningTests((ls) => [...ls, ...currentValue, element] as any);
      setRunningTestsValue((prev) => ({
        ...prev,
        runningTestsValue: "",
        runningTestsCommand: "",
      }));
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setGitHubTechStack((prev) => ({
      ...prev,
      runningTests: unique,
    }));
  };

  const removeElement = (value: string, label: string) => {
    if (value) {
      const removeCurrentState = listOfRunningTests.filter(
        (element: any) => element[label] !== value
      );

      setListOfRunningTests(removeCurrentState);

      const removeItem = gitHubTechStack.runningTests.filter(
        (element: any) => element[label] !== value
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        runningTests: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateState(listOfRunningTests);
  }, [listOfRunningTests]);

  return (
    <div className="py-8">
      <Heading label="Running Tests" icon={BiTestTube} />
      <div className="flex flex-col justify-between gap-4">
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChange}
            label="Topic"
            type="text"
            name="runningTestsValue"
            value={runningTestsValues.runningTestsValue}
          />
          <InputField
            onChange={onChange}
            label="Running Tests command"
            type="text"
            name="runningTestsCommand"
            value={runningTestsValues.runningTestsCommand}
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
                To run tests, run the following command
              </p>
              <InstallCodeLine label="yarn test test" />
            </div>
          </div>
          {gitHubTechStack.runningTests.length > 0 && (
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
              {gitHubTechStack.runningTests.map((data: any, index) => (
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
                  {data.runningTestsValue && (
                    <div className="flex flex-col gap-2 items-start py-1">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center text-sm font-normal text-gray-500 dark:text-[#7c8691]"
                        onClick={() =>
                          removeElement(
                            data.runningTestsValue,
                            "runningTestsValue"
                          )
                        }
                      >
                        {data.runningTestsValue}
                      </p>
                    </div>
                  )}
                  {data.runningTestsCommand && (
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex justify-start gap-2 items-center">
                        <p
                          className="dark:bg-slate-800 bg-slate-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center text-sm font-normal text-gray-700 dark:text-[#7c8691]"
                          onClick={() =>
                            removeElement(
                              data.runningTestsCommand,
                              "runningTestsCommand"
                            )
                          }
                        >
                          {data.runningTestsCommand}
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

export default RunningTests;
