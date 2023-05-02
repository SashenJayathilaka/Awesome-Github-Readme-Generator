"use client";

import ProfileMdPreview from "../process/ProfileMdPreview";

type Props = {};

function ProfileMarkdownPreview({}: Props) {
  const {
    Tittle,
    SubTittle,
    Work,
    Connect,
    Languages,
    AddOnFirst,
    AddOn,
    Support,
    Shields,
    Statistics,
    ActiveGraph,
  } = ProfileMdPreview();

  return (
    <div className="space-y-4">
      <img
        src="https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dbe6aca3f5b7f3/assets/Bottom_up.svg"
        className="w-full"
      />
      <Tittle />
      <SubTittle />
      <AddOnFirst />
      <Work />
      <Shields />
      <Languages />
      <Connect />
      <Support />
      <AddOn />
      <hr />
      <Statistics />
      <hr />
      <ActiveGraph />
      <img
        src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg"
        className="w-full"
      />
    </div>
  );
}

export default ProfileMarkdownPreview;
