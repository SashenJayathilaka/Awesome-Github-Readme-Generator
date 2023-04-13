"use client";

import React from "react";
import MdPreview from "../content/MdPreview";

type Props = {};

function MarkdownPreview({}: Props) {
  const {
    PMainImage,
    PMainTopic,
    PSubTopic,
    PMaintained,
    PWebsiteUpDown,
    PForks,
    PStars,
    PIssues,
    PLastCommit,
    PDocumentation,
    PLanguages,
    PDemoProjectAssets,
  } = MdPreview();
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-center text-center">
        <PMainImage />
        <PMainTopic />
        <PSubTopic />
        <div className="flex">
          <PMaintained />
          <PWebsiteUpDown />
          <PForks />
          <PStars />
          <PIssues />
          <PLastCommit />
        </div>
        <PDocumentation />
      </div>
      <PDemoProjectAssets />
      <div
        // className="grid gap-1 col-span-full"
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        <PLanguages />
      </div>
    </>
  );
}

export default MarkdownPreview;

// grid-cols-5 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 2xl:grid-cols-12
