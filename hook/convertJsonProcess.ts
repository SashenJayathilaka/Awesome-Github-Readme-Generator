/* eslint-disable react-hooks/rules-of-hooks */

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import { ProfileAtomDetails } from "@/type";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface ElementType {
  label: string;
  image: string;
}

function convertJsonProcess() {
  const [skillLabel, setSkillLabel] = useState<string[]>([]);
  const [currentState] = useRecoilState(profileAtomDetail);
  const [currentPostState, setCurrentPostState] =
    useState<ProfileAtomDetails>(currentState);

  const processJsonDownloaded = useCallback(() => {
    const labelArr: string[] = [];

    for (let index = 0; index < currentState.skills.length; index++) {
      const element: ElementType | any = currentState.skills[index];
      labelArr.push(element.label);
    }

    setSkillLabel(labelArr);
  }, [currentState.skills]);

  useEffect(() => {
    if (!skillLabel) return;

    setCurrentPostState((prev) => ({
      ...prev,
      skills: skillLabel,
    }));
  }, [skillLabel]);

  return {
    skillLabel,
    currentPostState,
    processJsonDownloaded,
  };
}

export default convertJsonProcess;
