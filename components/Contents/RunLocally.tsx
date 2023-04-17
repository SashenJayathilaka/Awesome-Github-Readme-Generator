import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitTechStack } from "@/atom/techStack";
import { useEffect, useState } from "react";
import { BiRun } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function RunLocally({}: Props) {
  const [runningTestsValues, setRunningTestsValue] = useState({
    runningTestsValue: "",
    runningTestsCommand: "",
  });
  const [listOfRunningTests, setListOfRunningTests] = useState([]);
  const [gitHubDetail] = useRecoilState(gitHubDetails);
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

    if (runningTestsValue || runningTestsCommand) {
      const element = { runningTestsValue, runningTestsCommand };
      setListOfRunningTests((ls) => [...ls, element] as any);
      setRunningTestsValue((prev) => ({
        ...prev,
        runningTestsValue: "",
        runningTestsCommand: "",
      }));
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    setGitHubTechStack((prev) => ({
      ...prev,
      runningTests: value,
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
              <p>Clone the project</p>
              <p className="bg-[#161748] px-3 py-2 rounded-md w-auto items-center">
                {gitHubDetail.gitRepoUrl ||
                  "git clone https://github.com/Louis3797/awesome-readme-template.git"}
              </p>
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
        </div>
      </div>
    </div>
  );
}

export default RunLocally;
