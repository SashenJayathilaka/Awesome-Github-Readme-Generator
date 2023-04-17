import { Divider } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import Installation from "./Installation";
import Prerequisites from "./Prerequisites";
import RunningTests from "./RunningTests";
import RunLocally from "./RunLocally";

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
      <RunLocally />
    </div>
  );
}

export default GettingStarted;
