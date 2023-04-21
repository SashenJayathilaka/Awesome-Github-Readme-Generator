"use client";

import { gitTechStack } from "@/atom/techStack";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { useEffect, useState } from "react";
import { DiMagento } from "react-icons/di";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function Acknowledgements({}: Props) {
  const [acknowledgementsValues, setAcknowledgementsValue] = useState({
    acknowledgementsValue: "",
    acknowledgementsUrl: "",
  });
  const [listOfAcknowledgements, setListOfAcknowledgements] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcknowledgementsValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const acknowledgementsValue = acknowledgementsValues.acknowledgementsValue;
    const url = acknowledgementsValues.acknowledgementsUrl;
    const currentValue = gitHubTechStack.acknowledgements;

    if (acknowledgementsValue) {
      if (acknowledgementsValue || url) {
        const element = { acknowledgementsValue, url };

        setListOfAcknowledgements(
          (ls) => [...ls, ...currentValue, element] as any
        );
        setAcknowledgementsValue((prev) => ({
          ...prev,
          acknowledgementsValue: "",
          acknowledgementsUrl: "",
        }));
      }
    } else {
      toast.warn("Your Field Empty");
    }
  };

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setGitHubTechStack((prev) => ({
      ...prev,
      acknowledgements: unique,
    }));
  };

  const removeElement = (value: string, label: string) => {
    if (value) {
      const removeCurrentState = listOfAcknowledgements.filter(
        (element: any) => element[label] !== value
      );

      setListOfAcknowledgements(removeCurrentState);

      const removeItem = gitHubTechStack.acknowledgements.filter(
        (element: any) => element[label] !== value
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        acknowledgements: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateState(listOfAcknowledgements);
  }, [listOfAcknowledgements]);

  return (
    <div className="py-8">
      <Heading label="Acknowledgements" icon={DiMagento} />
      <div className="flex flex-col justify-between gap-4">
        <div className="py-4 flex justify-between gap-4">
          <InputField
            onChange={onChange}
            label="Mention useful resources and libraries"
            type="text"
            name="acknowledgementsValue"
            value={acknowledgementsValues.acknowledgementsValue}
          />
          <InputField
            onChange={onChange}
            label="Mention useful resources and libraries URL?"
            type="text"
            name="acknowledgementsUrl"
            value={acknowledgementsValues.acknowledgementsUrl}
          />
          <button
            onClick={(e: any) => onAddValue(e)}
            className="bg-[#265D97] hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <span>Add</span>
            <IoIosAddCircle size={15} />
          </button>
        </div>
        <div className="flex flex-col">
          {gitHubTechStack.acknowledgements.map((data: any, index) => (
            <div
              key={index}
              onClick={() =>
                removeElement(
                  data.acknowledgementsValue,
                  "acknowledgementsValue"
                )
              }
              className="cursor-pointer"
            >
              <p className="text-sm font-normal text-[#7c8691]">
                {data.acknowledgementsValue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acknowledgements;
