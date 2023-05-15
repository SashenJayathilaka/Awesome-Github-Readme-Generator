"use client";

import { useState } from "react";
import ProfileMdContent from "../process/ProfileMdContent";

type Props = {};

function ProfileMarkdown({}: Props) {
  const {
    Tittle,
    SubTittle,
    Work,
    Languages,
    Connect,
    AddOnFirst,
    AddOn,
    Support,
    Shields,
    Divider,
    Statistics,
    ActiveGraph,
    StartSection,
    EndSection,
  } = ProfileMdContent();

  return (
    <div id="markdown-profile">
      <StartSection />
      <Tittle />
      <SubTittle />
      <AddOnFirst />
      <Work />
      <Shields />
      <Connect />
      <Languages />
      <Support />
      <AddOn />
      {Statistics() && <Divider />}
      <Statistics />
      {ActiveGraph() && <Divider />}
      <ActiveGraph />
      <EndSection />
    </div>
  );
}

export default ProfileMarkdown;
