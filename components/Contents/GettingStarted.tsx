"use client";

import { BsFillBagCheckFill } from "react-icons/bs";

import DividerLine from "../DividerLine";
import Acknowledgements from "./Acknowledgements";
import Contact from "./Contact";
import Contributing from "./Contributing";
import Deployment from "./Deployment";
import FaqSection from "./Faq";
import Installation from "./Installation";
import License from "./License";
import Prerequisites from "./Prerequisites";
import Roadmap from "./Roadmap";
import RunLocally from "./RunLocally";
import RunningTests from "./RunningTests";

type Props = {};

function GettingStarted({}: Props) {
  return (
    <div className="py-8">
      <div className="flex justify-start gap-6 py-4 items-center">
        <BsFillBagCheckFill size={25} />
        <p className="text-2xl">Getting Started</p>
      </div>
      <Prerequisites />
      <DividerLine />
      <Installation />
      <DividerLine />
      <RunningTests />
      <DividerLine />
      <RunLocally />
      <DividerLine />
      <Deployment />
      <DividerLine />
      <Roadmap />
      <DividerLine />
      <Contributing />
      <DividerLine />
      <FaqSection />
      <DividerLine />
      <License />
      <DividerLine />
      <Contact />
      <DividerLine />
      <Acknowledgements />
    </div>
  );
}

export default GettingStarted;
