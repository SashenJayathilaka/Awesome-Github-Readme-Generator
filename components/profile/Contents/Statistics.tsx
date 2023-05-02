"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import DividerLine from "@/components/DividerLine";
import Heading from "@/components/Heading";
import { useTheme } from "next-themes";
import { BsGraphUp } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import { useRecoilState } from "recoil";

import ActivityGraph from "./card/ActivityGraph";
import MostCommit from "./card/MostCommit";
import ProductiveTime from "./card/ProductiveTime";
import ProfileDetailsCard from "./card/ProfileDetailsCard";
import StartsStreakCard from "./card/StartsStreakCard";
import SummaryCards from "./card/SummaryCards";

type Props = {};

function Statistics({}: Props) {
  const { resolvedTheme } = useTheme();
  const [statisticsData, setStatisticsData] = useRecoilState(profileAtomDetail);

  return (
    <div>
      <div className="py-4">
        <Heading icon={FcStatistics} label="Statistics" />
        <div className="inline-block md:flex justify-start gap-12 py-4">
          <StartsStreakCard
            resolvedTheme={resolvedTheme}
            statisticsData={statisticsData}
            setStatisticsData={setStatisticsData}
          />
          <MostCommit
            resolvedTheme={resolvedTheme}
            statisticsData={statisticsData}
            setStatisticsData={setStatisticsData}
          />
          <SummaryCards
            resolvedTheme={resolvedTheme}
            statisticsData={statisticsData}
            setStatisticsData={setStatisticsData}
          />
        </div>
        <div className="inline-block md:flex justify-start gap-12 py-4">
          <ProductiveTime
            resolvedTheme={resolvedTheme}
            statisticsData={statisticsData}
            setStatisticsData={setStatisticsData}
          />
          <ProfileDetailsCard
            resolvedTheme={resolvedTheme}
            statisticsData={statisticsData}
            setStatisticsData={setStatisticsData}
          />
        </div>
      </div>
      <DividerLine />
      <div className="py-4">
        <Heading icon={BsGraphUp} label="ActivityGraph" />
        <div className="inline-block md:flex justify-start gap-12 py-4">
          <ActivityGraph
            resolvedTheme={resolvedTheme}
            statisticsData={statisticsData}
            setStatisticsData={setStatisticsData}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
