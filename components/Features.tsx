import { gitTechStack } from "@/atom/techStack";
import { useEffect, useState } from "react";
import { GiDart } from "react-icons/gi";
import { IoIosAddCircle } from "react-icons/io";
import { useRecoilState } from "recoil";

import Heading from "./Heading";
import InputField from "./InputField";

type Props = {};

function Features({}: Props) {
  const [featuresValue, setFeaturesValue] = useState("");
  const [listOfFeatures, setListOfFeatures] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitTechStack);

  const onChangeFeaturesValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFeaturesValue(event.target.value);
  };

  const onAddValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (featuresValue) {
      const element = { featuresValue };
      setListOfFeatures((ls) => [...ls, element] as any);
      setFeaturesValue("");
    }
  };

  const updateCurrentState = (value: string[]) => {
    if (value) {
      setGitHubTechStack((prev) => ({
        ...prev,
        features: value,
      }));
    }
  };

  const removeElement = (label: any) => {
    if (gitHubTechStack.features.length > 0) {
      const removeCurrentState = listOfFeatures.filter(
        (element: any) => element.featuresValue !== label.featuresValue
      );
      setListOfFeatures(removeCurrentState);

      const removeItem = gitHubTechStack.features.filter(
        (element: any) => element.featuresValue !== label.featuresValue
      );

      setGitHubTechStack((prev) => ({
        ...prev,
        features: removeItem,
      }));
    }
  };

  useEffect(() => {
    updateCurrentState(listOfFeatures);
  }, [listOfFeatures]);

  return (
    <div className="py-8">
      <Heading icon={GiDart} label="Features" />
      <div className="flex justify-between py-4">
        <div className="flex justify-start gap-2 items-center">
          <InputField
            label="Features"
            type="text"
            name="featuresValue"
            onChange={onChangeFeaturesValue}
            value={featuresValue}
          />
          <button
            onClick={(e: any) => onAddValue(e)}
            className="bg-gray-800 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <span>Add</span>
            <IoIosAddCircle size={15} />
          </button>
        </div>
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {gitHubTechStack.features.map((feature: any, index) => (
            <div
              key={index}
              onClick={() => removeElement(feature)}
              className="border border-[#0F2557] px-2.5 py-2 items-center text-center cursor-pointer rounded-full m-auto"
            >
              <p>{feature.featuresValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
