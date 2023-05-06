"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import { boxLabel } from "@/lib/boxLabel";
import { Checkbox } from "@mui/material";
import { useTheme } from "next-themes";
import { SiWelcometothejungle } from "react-icons/si";
import { useRecoilState } from "recoil";

type Props = {};

function StartAndEnd({}: Props) {
  const { resolvedTheme } = useTheme();
  const [startAndEnd, setStartAndEnd] = useRecoilState(profileAtomDetail);

  const onChangeStart = () => {
    if (startAndEnd.startWelcomeSection) {
      setStartAndEnd((prev) => ({
        ...prev,
        startWelcomeSection: false,
      }));
    } else {
      setStartAndEnd((prev) => ({
        ...prev,
        startWelcomeSection: true,
      }));
    }
  };

  const onChangeEnd = () => {
    if (startAndEnd.endWelcomeSection) {
      setStartAndEnd((prev) => ({
        ...prev,
        endWelcomeSection: false,
      }));
    } else {
      setStartAndEnd((prev) => ({
        ...prev,
        endWelcomeSection: true,
      }));
    }
  };

  return (
    <div className="py-6">
      <Heading label="Profile Header" icon={SiWelcometothejungle} />
      <div className="flex flex-col justify-start gap-4 py-4">
        <div className="flex justify-start gap-4 items-center">
          <div onClick={() => onChangeStart()}>
            <Checkbox
              {...boxLabel}
              sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
              color="default"
              checked={startAndEnd.startWelcomeSection}
            />
          </div>
          <p className="text-lg font-semibold">
            {`Display "Welcome To My Profile!" Section`}
          </p>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <div onClick={() => onChangeEnd()}>
            <Checkbox
              {...boxLabel}
              sx={{ color: resolvedTheme === "dark" ? "#fff" : "#000" }}
              color="default"
              checked={startAndEnd.endWelcomeSection}
            />
          </div>
          <p className="text-lg font-semibold">
            {`Display "Ending My Profile Section" Section`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartAndEnd;
