"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { GiDart } from "react-icons/gi";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function Features({}: Props) {
  const [featuresValue, setFeaturesValue] = useState("");
  const [listOfFeatures, setListOfFeatures] = useState([]);
  const [gitHubTechStack, setGitHubTechStack] = useRecoilState(gitRepoDetails);

  const onChangeFeaturesValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFeaturesValue(event.target.value);
  };

  const onAddValue = (event: FormEvent) => {
    event.preventDefault();

    const currentValue = gitHubTechStack.features;

    if (featuresValue) {
      const element = { featuresValue };
      setListOfFeatures((ls) => [...ls, ...currentValue, element] as any);
      setFeaturesValue("");
    }
  };

  const updateCurrentState = useCallback(
    (value: string[]) => {
      if (value) {
        const unique = value.filter(onlyUnique).flat();

        setGitHubTechStack((prev) => ({
          ...prev,
          features: unique,
        }));
      }
    },
    [setGitHubTechStack]
  );

  const removeElement = useCallback(
    (label: any) => {
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
    },
    [gitHubTechStack.features, listOfFeatures, setGitHubTechStack]
  );

  useEffect(() => {
    updateCurrentState(listOfFeatures);
  }, [listOfFeatures, updateCurrentState]);

  return (
    <div className="py-8">
      <Heading icon={GiDart} label="Features" />
      <div className="flex justify-between py-4">
        <div className="flex justify-start gap-2">
          <InputField
            label="Features"
            type="text"
            name="featuresValue"
            onChange={onChangeFeaturesValue}
            value={featuresValue}
          />
          <FloatingActionButton onAddValue={onAddValue} />
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
