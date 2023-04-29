"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
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

import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  const { skills } = request();
  const [listOfSkills, setListOfSkills] = useState([]);
  const [stateSkill, setStateSkill] = useRecoilState(profileAtomDetail);

  const updateState = (value: string[]) => {
    if (!value) return;

    const unique = value.filter(onlyUnique).flat();

    setStateSkill((prev) => ({
      ...prev,
      skills: unique,
    }));
  };

  useEffect(() => {
    updateState(listOfSkills);
  }, [listOfSkills]);

  return (
    <div>
      <div className="flex justify-start gap-6 py-4 mt-8">
        <p className="text-2xl font-semibold">Skills</p>
      </div>
      <Heading label="Programming Languages" icon={FaJava} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.languages.map((language, index) => (
          <Skill
            key={index}
            label={language.label}
            image={language.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Frontend" icon={FaReact} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.frontend.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Backend" icon={GrNode} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.backend.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Database" icon={SiMysql} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.database.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Backend Service" icon={SiFirebase} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.backendService.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Devops" icon={FaDocker} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.devops.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Mobile" icon={AiFillAndroid} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.mobile.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Static" icon={TbBrandNextjs} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.static.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Framework" icon={SiDjango} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.framework.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Software" icon={DiPhotoshop} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.software.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Visualization" icon={SiKibana} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.visualization.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Testing" icon={BiTestTube} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.testing.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="ML" icon={SiTensorflow} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.mL.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Engines" icon={FaUnity} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.engines.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Automation" icon={SiZapier} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.automation.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
      <Heading label="Other" icon={FaLinux} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-12 mb-8">
        {skills.other.map((technology, index) => (
          <Skill
            key={index}
            label={technology.label}
            image={technology.image}
            stateSkill={stateSkill.skills}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
            setStateSkill={setStateSkill}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
