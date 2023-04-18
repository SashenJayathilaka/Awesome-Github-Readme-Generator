import { Divider } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";

import Deployment from "./Deployment";
import Installation from "./Installation";
import Prerequisites from "./Prerequisites";
import RunLocally from "./RunLocally";
import RunningTests from "./RunningTests";
import Roadmap from "./Roadmap";

type Props = {};

function GettingStarted({}: Props) {
  return (
    <div className="py-8">
      <div className="flex justify-start gap-6 py-4 items-center">
        <BsFillBagCheckFill size={25} />
        <p className="text-2xl">Getting Started</p>
      </div>
      {/*     <Prerequisites />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      /> */}
      {/*       <Installation />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      /> */}
      {/*       <RunningTests />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      /> */}
      {/*       <RunLocally />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      /> */}
      {/*       <Deployment />
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          backgroundColor: "#3795BD",
          marginY: "10px",
        }}
      /> */}
      <Roadmap />
    </div>
  );
}

export default GettingStarted;
