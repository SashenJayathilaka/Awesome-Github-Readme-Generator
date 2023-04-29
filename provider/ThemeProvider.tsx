"use client";

import { ThemeProvider as Provider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
  return <Provider attribute="class">{children}</Provider>;
}

export default ThemeProvider;
