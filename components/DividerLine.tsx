"use client";

import { Divider } from "@mui/material";

type Props = {};

function DividerLine({}: Props) {
  return (
    <Divider
      orientation="horizontal"
      variant="fullWidth"
      flexItem
      sx={{
        backgroundColor: "#3795BD",
        marginY: "10px",
      }}
    />
  );
}

export default DividerLine;
