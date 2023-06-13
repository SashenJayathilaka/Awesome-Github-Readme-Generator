/* eslint-disable @next/next/no-img-element */
"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import { motion } from "framer-motion";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { useRecoilState } from "recoil";

import FloatingActionButton from "../FloatingActionButton";
import Heading from "../Heading";
import InputField from "../InputField";

type Props = {};

function AboutProject({}: Props) {
  const [demoImageLink, setDemoImageLink] = useState("");
  const [listOfDemoImages, setListOfDemoImage] = useState([]);
  const [images, setImages] = useRecoilState(gitRepoDetails);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDemoImageLink(event.target.value);
  };

  const onAddValue = (event: FormEvent) => {
    event.preventDefault();

    const currentStateValue = images.demoImage;

    if (demoImageLink) {
      const element = { demoImageLink };
      setListOfDemoImage((ls) => [...ls, ...currentStateValue, element] as any);
      setDemoImageLink("");
    }
  };

  const updateCurrentState = useCallback(
    (value: string[]) => {
      if (!value) return;

      const unique = value.filter(onlyUnique).flat();

      setImages((prev) => ({
        ...prev,
        demoImage: unique,
      }));
    },
    [setImages]
  );

  const removeElement = useCallback(
    (label: any) => {
      if (images.demoImage.length > 0) {
        const removeCurrentState = listOfDemoImages.filter(
          (element: any) => element.demoImageLink !== label.demoImageLink
        );

        setListOfDemoImage(removeCurrentState);

        const removeItem = images.demoImage.filter(
          (element: any) => element.demoImageLink !== label.demoImageLink
        );

        setImages((prev) => ({
          ...prev,
          demoImage: removeItem,
        }));
      }
    },
    [images.demoImage, listOfDemoImages, setImages]
  );

  useEffect(() => {
    updateCurrentState(listOfDemoImages);
  }, [listOfDemoImages, updateCurrentState]);

  return (
    <div className="mb-15 py-8">
      <div className="flex justify-start gap-6 py-4 items-center">
        <AiFillStar size={25} />
        <p className="text-2xl">About the Project</p>
      </div>
      <Heading label="Screenshots" icon={HiPhotograph} />
      <div className="flex justify-start gap-2">
        <InputField
          label="Demo Images Link"
          type="text"
          name="envVariables"
          onChange={onChange}
          value={demoImageLink}
        />
        <FloatingActionButton onAddValue={onAddValue} />
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-12">
        {images.demoImage.map((img: any, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={index}
            onClick={() => removeElement(img)}
            className="cursor-pointer"
          >
            <img
              src={img.demoImageLink}
              alt="demoImg"
              className="rounded-md w-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutProject;
