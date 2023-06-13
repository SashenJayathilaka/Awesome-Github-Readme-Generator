/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { gitRepoDetails } from "@/atom/repositoryAtom";
import { onlyUnique } from "@/hook/onlyUniqueOne";
import request from "@/lib/request";
import { useEffect, useState } from "react";
import { AiFillAndroid } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { DiPhotoshop } from "react-icons/di";
import { FaDocker, FaJava, FaLinux, FaReact, FaUnity } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import {
  SiDjango,
  SiFirebase,
  SiKibana,
  SiMysql,
  SiTensorflow,
  SiZapier,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useRecoilState } from "recoil";
import Languages from "./Contents/Languages";
import Heading from "./Heading";
import ControlSwitch from "./Switch";

type Props = {};

function TechnologiesContent({}: Props) {
  const { skills } = request();
  const [listOfTechnologies, setListOfTechnologies] = useState([]);
  const [stateTechnologies, setStateTechnologies] =
    useRecoilState(gitRepoDetails);

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setStateTechnologies((prev) => ({
      ...prev,
      updatedStateTechnology: unique,
    }));
  };

  useEffect(() => {
    updateState(listOfTechnologies);
  }, [listOfTechnologies]);

  return (
    <div>
      <div className="flex justify-start gap-6 py-4 mt-8">
        <p className="text-2xl">Technologies</p>
        <ControlSwitch />
      </div>
      <Heading label="Programming Languages" icon={FaJava} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.languages.map((language, index) => (
          <Languages
            key={index}
            label={language.label}
            image={language.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Frontend" icon={FaReact} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.frontend.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Backend" icon={GrNode} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.backend.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Database" icon={SiMysql} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.database.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Backend Service" icon={SiFirebase} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.backendService.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Devops" icon={FaDocker} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.devops.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Mobile" icon={AiFillAndroid} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.mobile.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Static" icon={TbBrandNextjs} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.static.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Framework" icon={SiDjango} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.framework.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Software" icon={DiPhotoshop} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.software.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Visualization" icon={SiKibana} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.visualization.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Testing" icon={BiTestTube} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.testing.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="ML" icon={SiTensorflow} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.mL.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Engines" icon={FaUnity} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.engines.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Automation" icon={SiZapier} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.automation.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
      <Heading label="Other" icon={FaLinux} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.other.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            stateTechnologies={stateTechnologies.updatedStateTechnology}
            listOfTechnologies={listOfTechnologies}
            setListOfTechnologies={setListOfTechnologies}
            setStateTechnologies={setStateTechnologies}
          />
        ))}
      </div>
    </div>
  );
}

export default TechnologiesContent;
