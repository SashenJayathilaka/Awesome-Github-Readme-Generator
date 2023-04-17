"use client";

import { gitTechStack } from "@/atom/techStack";
import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { useRecoilState } from "recoil";
import Heading from "../Heading";
import InputField from "../InputField";

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

    if (installationValue || installationCommand) {
      const element = { installationValue, installationCommand };
      setListOfInstallation((ls) => [...ls, element] as any);
      setInstallationValue((prev) => ({
        ...prev,
        installationValue: "",
        installationCommand: "",
      }));
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    setGitHubTechStack((prev) => ({
      ...prev,
      installation: value,
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
            <div className="flex flex-col gap-1 py-5">
              <p>This project uses Yarn as package manager</p>
              <p className="bg-[#161748] px-2.5 py-2 rounded-md w-[200px] items-center">
                npm install --global yarn
              </p>
            </div>
          </div>
          {gitHubTechStack.installation.length > 0 && (
            <div className="flex flex-col justify-between gap-2 h-full">
              <div className="flex gap-2">
                <p className="text-lg font-medium">Your Prerequisites</p>
              </div>
              {gitHubTechStack.installation.map((data: any, index) => (
                <div key={index}>
                  {data.installationValue && (
                    <div className="flex flex-col gap-2 items-start">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center"
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
                          className="bg-[#161748] px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center"
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Installation;
