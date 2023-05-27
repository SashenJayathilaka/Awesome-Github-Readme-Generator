"use client";

import { profileAtomDetails } from "@/atom/profileDetailsAtom";
import { boxLabel } from "@/lib/boxLabel";
import { activityGraphTheme } from "@/lib/themesStore";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { toast } from "react-toastify";

type Props = {
  resolvedTheme: string | undefined;
  statisticsData: profileAtomDetails;
  setStatisticsData: (value: any) => void;
};

function ActivityGraph({
  resolvedTheme,
  statisticsData,
  setStatisticsData,
}: Props) {
  const [summaryCardTheme, setSummaryCardTheme] = useState(
    statisticsData.activityGraphTheme
  );

  const colorStyles: StylesConfig = {
    option: (styles) => ({
      ...styles,
      color: "#000",
      cursor: "pointer",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#000",
      cursor: "pointer",
    }),
  };

  const onUpdateState = () => {
    if (statisticsData.github) {
      if (statisticsData.activityGraph) {
        setStatisticsData((prev: profileAtomDetails) => ({
          ...prev,
          activityGraph: false,
          activityGraphTheme: "2077",
        }));
      } else {
        setStatisticsData((prev: profileAtomDetails) => ({
          ...prev,
          activityGraph: true,
        }));
      }
    } else {
      toast.info("Please Add Your Github user Name");
    }
  };

  const updateStateValue = () => {
    if (statisticsData.activityGraph) {
      setStatisticsData((prev: profileAtomDetails) => ({
        ...prev,
        activityGraphTheme: summaryCardTheme,
      }));
    }
  };

  useEffect(() => {
    updateStateValue();
  }, [summaryCardTheme]);

  return (
    <div className="flex flex-col justify-center border border-blue-500 items-center px-4 py-4 gap-4 rounded-md">
      <div className="flex justify-center text-center items-center gap-2">
        <p className="text-xl font-medium text-center">
          Top languages in commits card
        </p>
        <div onClick={onUpdateState}>
          <Checkbox
            {...boxLabel}
            sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
            color="default"
            checked={statisticsData.activityGraph}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <p>{activityGraphTheme.length} themes are available</p>
        <Select
          className="w-44"
          options={activityGraphTheme}
          defaultValue={activityGraphTheme[0]}
          placeholder={summaryCardTheme}
          isSearchable
          menuPosition="fixed"
          styles={colorStyles}
          onChange={(e: any) => setSummaryCardTheme(e.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-2 items-center border border-gray-800 px-2.5 py-2.5 rounded-md cursor-pointer">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${
              statisticsData.github ? statisticsData.github : "sindresorhus"
            }&theme=${statisticsData.activityGraphTheme}`}
            alt="visitors"
            className="w-[700px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityGraph;
// ActivityGraph
