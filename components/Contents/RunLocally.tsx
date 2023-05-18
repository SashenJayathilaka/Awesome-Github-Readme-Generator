import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitTechStack } from "@/atom/techStack";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { BiRun } from "react-icons/bi";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";
import InstallCodeLine from "./InstallCodeLine";

type Props = {};

function RunLocally({}: Props) {
  const [runLocallyValues, setRunLocallyValues] = useState({
    runningValue: "",
    runningCommand: "",
  });
  const [listOfRunLocallyValues, setListOfRunLocallyValues] = useState([]);
  const [gitHubDetail] = useRecoilState(gitHubDetails);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRunLocallyValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (event: FormEvent) => {
    event.preventDefault();

    const runningValue = runLocallyValues.runningValue;
    const runningCommand = runLocallyValues.runningCommand;
    const currentValue = gitHubTechStack.runLocally;

    if (gitHubDetail.gitRepoUrl) {
      if (runningValue || runningCommand) {
        const element = { runningValue, runningCommand };
        setListOfRunLocallyValues(
          (ls) => [...ls, ...currentValue, element] as any
        );
        setRunLocallyValues((prev) => ({
          ...prev,
          runningValue: "",
          runningCommand: "",
        }));
      }
    } else {
      toast.warn("Please fill your gitHub repository details first");
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setGitHubTechStack((prev) => ({
      ...prev,
      runLocally: unique,
    }));
  };

  const removeElement = (value: string, label: string) => {
    if (value) {
      const removeCurrentState = listOfRunLocallyValues.filter(
        (element: any) => element[label] !== value
      );

      setListOfRunLocallyValues(removeCurrentState);

      const removeItem = gitHubTechStack.runLocally.filter(
        (element: any) => element[label] !== value
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        runLocally: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateState(listOfRunLocallyValues);
  }, [listOfRunLocallyValues]);

  return (
    <div className="py-8">
      <Heading label="Run Locally" icon={BiRun} />
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-1 mt-5 justify-start items-start">
          <p className="text-lg font-medium">Clone the project</p>
          <InstallCodeLine
            label={
              gitHubDetail.gitRepoUrl ||
              "git clone https://github.com/Louis3797/awesome-readme-template.git"
            }
          />
        </div>
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChange}
            label="Topic"
            type="text"
            name="runningValue"
            value={runLocallyValues.runningValue}
          />
          <InputField
            onChange={onChange}
            label="Running Tests command"
            type="text"
            name="runningCommand"
            value={runLocallyValues.runningCommand}
          />
          <FloatingActionButton onAddValue={onAddValue} />
        </div>
        <div className="inline-block md:flex justify-start gap-36">
          <div className="hidden md:flex flex-col justify-between gap-2 h-auto">
            <div className="flex gap-2">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Example
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-gray-500 dark:text-[#7c8691]">
                Go to the project directory
              </p>
              <InstallCodeLine label="cd my-project" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-gray-500 dark:text-[#7c8691]">
                Install dependencies
              </p>
              <InstallCodeLine label="yarn install" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-gray-500 dark:text-[#7c8691]">
                Start the server
              </p>
              <InstallCodeLine label="yarn start" />
            </div>
          </div>
          {gitHubTechStack.runLocally.length > 0 && (
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
              {gitHubTechStack.runLocally.map((data: any, index) => (
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
                  {data.runningValue && (
                    <div className="flex flex-col gap-2 items-start py-1">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center text-sm font-normal text-gray-500 dark:text-[#7c8691]"
                        onClick={() =>
                          removeElement(data.runningValue, "runningValue")
                        }
                      >
                        {data.runningValue}
                      </p>
                    </div>
                  )}
                  {data.runningCommand && (
                    <div className="flex flex-col gap-2 items-start">
                      <div className="flex justify-start gap-2 items-center">
                        <p
                          className="dark:bg-slate-800 bg-slate-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center text-sm font-normal text-gray-700 dark:text-[#7c8691]"
                          onClick={() =>
                            removeElement(data.runningCommand, "runningCommand")
                          }
                        >
                          {data.runningCommand}
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

export default RunLocally;
