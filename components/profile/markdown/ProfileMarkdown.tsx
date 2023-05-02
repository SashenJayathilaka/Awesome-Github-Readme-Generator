"use client";

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
  } = ProfileMdContent();

  return (
    <div id="markdown-profile">
      {` <img  src="https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dbe6aca3f5b7f3/assets/Bottom_up.svg" width="100%" />`}
      <br />
      <Tittle />
      <SubTittle />
      <AddOnFirst />
      <Work />
      <Shields />
      <Languages />
      <Connect />
      <Support />
      <AddOn />
      <Divider />
      <Statistics />
      <Divider />
      <ActiveGraph />
      <br />
      {` <img  src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg" />`}
    </div>
  );
}

export default ProfileMarkdown;
