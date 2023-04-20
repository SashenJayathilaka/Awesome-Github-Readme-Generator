"use client";

import { Divider } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";

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
      {/*       <Prerequisites />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      />
      <Installation />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      />
      <RunningTests />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      />
      <RunLocally />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      />
      <Deployment />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      />
      <Roadmap />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      /> */}
      {/*  <Contributing /> */}
      {/* <FaqSection /> */}
      {/* <License /> */}
      {/* <Contact /> */}
      <Acknowledgements />
    </div>
  );
}

export default GettingStarted;
