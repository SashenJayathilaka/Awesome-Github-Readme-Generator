"use client";

import { gitImages } from "@/atom/images";
import { publicStateUpdate } from "@/atom/publicState";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { useRecoilState } from "recoil";

import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function AboutProject({}: Props) {
  const [images, setImages] = useRecoilState(gitImages);
  const [updateState, setUpdateState] = useRecoilState(publicStateUpdate);

  const onChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const updateOriginalState = (values: any) => {
    const dataArray: string[] = [
      "screenShortOne",
      "screenShortTwo",
      "screenShortThree",
      "screenShortFour",
      "screenShortFive",
      "screenShortSix",
    ];
    const updatedArray: string[] = [];
    var unique: string[];
    const currentValue = images.demoImage;

    function onlyUnique(
      value: string | number,
      index: string | number,
      array: any
    ) {
      return array.indexOf(value) === index;
    }

    for (let index = 0; index < dataArray.length; index++) {
      const element = values[dataArray[index]];
      updatedArray.push(...currentValue, element);
    }

    if (updatedArray.length > 0) {
      unique = updatedArray.filter(onlyUnique).flat();

      unique = unique.filter(function (element) {
        return element !== undefined;
      });

      setImages((prev) => ({
        ...prev,
        demoImage: unique.flat(),
      }));
    }
  };

  useEffect(() => {
    if (updateState) {
      updateOriginalState(updateState);
    } else return;
  }, [updateState]);

  return (
    <div className="mb-15 py-8">
      <div className="flex justify-start gap-6 py-4 items-center">
        <AiFillStar size={25} />
        <p className="text-2xl">About the Project</p>
      </div>
      <Heading label="Screenshots" icon={HiPhotograph} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        <InputField
          onChange={onChangeSize}
          label="Your Screenshot URL here"
          type="text"
          name="screenShortOne"
        />
        <InputField
          onChange={onChangeSize}
          label="Your Screenshot URL here"
          type="text"
          name="screenShortTwo"
        />
        <InputField
          onChange={onChangeSize}
          label="Your Screenshot URL here"
          type="text"
          name="screenShortThree"
        />
        <InputField
          onChange={onChangeSize}
          label="Your Screenshot URL here"
          type="text"
          name="screenShortFour"
        />
        <InputField
          onChange={onChangeSize}
          label="Your Screenshot URL here"
          type="text"
          name="screenShortFive"
        />
        <InputField
          onChange={onChangeSize}
          label="Your Screenshot URL here"
          type="text"
          name="screenShortSix"
        />
      </div>
    </div>
  );
}

export default AboutProject;
