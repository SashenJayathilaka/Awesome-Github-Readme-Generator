import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitTechStack } from "@/atom/techStack";
import { useEffect, useState } from "react";
import { BiRun } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import InputField from "../InputField";
import { toast } from "react-toastify";

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

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const runningValue = runLocallyValues.runningValue;
    const runningCommand = runLocallyValues.runningCommand;

    if (gitHubDetail.gitRepoUrl) {
      if (runningValue || runningCommand) {
        const element = { runningValue, runningCommand };
        setListOfRunLocallyValues((ls) => [...ls, element] as any);
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

    setGitHubTechStack((prev) => ({
      ...prev,
      runLocally: value,
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
          <p className="bg-[#161748] px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
            {gitHubDetail.gitRepoUrl ||
              "git clone https://github.com/Louis3797/awesome-readme-template.git"}
          </p>
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
          <button
            onClick={(e: any) => onAddValue(e)}
            className="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <span>Add</span>
            <IoIosAddCircle size={15} />
          </button>
        </div>
        <div className="inline-block md:flex justify-start gap-36">
          <div className="hidden md:flex flex-col justify-between gap-2 h-auto">
            <div className="flex gap-2">
              <p className="text-lg font-medium">Example</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>Go to the project directory</p>
              <p className="bg-[#161748] px-3 py-2 rounded-md w-[120px] items-center">
                cd my-project
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p>Install dependencies</p>
              <p className="bg-[#161748] px-3 py-2 rounded-md w-[100px] items-center">
                yarn install
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p>Start the server</p>
              <p className="bg-[#161748] px-3 py-2 rounded-md w-[100px] items-center">
                yarn start
              </p>
            </div>
          </div>
          {gitHubTechStack.runLocally.length > 0 && (
            <div className="flex flex-col justify-between gap-2 h-full">
              <div className="flex gap-2">
                <p className="text-lg font-medium">Your Details</p>
              </div>
              {gitHubTechStack.runLocally.map((data: any, index) => (
                <div key={index}>
                  {data.runningValue && (
                    <div className="flex flex-col gap-2 items-start py-1">
                      <p
                        className="flex gap-2 items-center cursor-pointer text-center"
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
                          className="bg-[#161748] px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center"
                          onClick={() =>
                            removeElement(data.runningCommand, "runningCommand")
                          }
                        >
                          {data.runningCommand}
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

export default RunLocally;
