"use client";

import {
  backendFrameWork,
  developmentEditors,
  frontendDevelopment,
  languages,
  otherFrameWork,
  others,
  styleComponents,
} from "@/lib/store";
import { FaCss3Alt, FaJava, FaLinux, FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { SiGtk } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import Heading from "./Heading";
import Languages from "./Languages";
import ControlSwitch from "./Switch";

type Props = {};

function TechnologiesContent({}: Props) {
  return (
    <div>
      <div className="flex justify-start gap-6 py-4 mt-8">
        <p className="text-2xl">Technologies</p>
        <ControlSwitch />
      </div>
      <Heading label="Programming Languages" icon={FaJava} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {languages.map((language, index) => (
          <Languages
            key={index}
            label={language.label}
            image={language.image}
            index={index}
          />
        ))}
      </div>
      <Heading label="Style Components" icon={FaCss3Alt} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {styleComponents.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            index={index}
          />
        ))}
      </div>
      <Heading label="Frontend Development FrameWork" icon={FaReact} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {frontendDevelopment.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            index={index}
          />
        ))}
      </div>
      <Heading label="Backend Development" icon={GrNode} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {backendFrameWork.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            index={index}
          />
        ))}
      </div>
      <Heading label="Other Development FrameWork" icon={SiGtk} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {otherFrameWork.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            index={index}
          />
        ))}
      </div>
      <Heading label="Development Editors / IDE" icon={TbBrandVscode} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {developmentEditors.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            index={index}
          />
        ))}
      </div>
      <Heading label="Other" icon={FaLinux} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-12 mb-8">
        {others.map((technology, index) => (
          <Languages
            key={index}
            label={technology.label}
            image={technology.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TechnologiesContent;
