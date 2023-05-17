import Request from "@/lib/request";
import { topic } from "@/lib/themesStore";
import { ProfileAtomDetails, Technologies } from "@/type";
import { useCallback, useState } from "react";

const readJson = (currentStateValue: ProfileAtomDetails) => {
  const { skills } = Request();
  const [currentValue, setCurrentValue] = useState<ProfileAtomDetails | null>(
    null
  );

  const skillCustomArr: string[] = [];
  const finalData: any[] = [];

  const precessMakDown = () => {
    for (let index = 0; index < topic.length; index++) {
      const element = topic[index];
      // @ts-ignore
      const sortedOneArr = skills[element];
      skillCustomArr.push(sortedOneArr);
    }
  };

  const updateStateValue = useCallback(() => {
    precessMakDown();

    setCurrentValue(currentStateValue);

    const flatArr: Technologies[] | any[] = skillCustomArr.flat();

    if (flatArr.length < 0) return;

    for (let index = 0; index < currentStateValue.skills.length; index++) {
      const elements = currentStateValue.skills[index];

      const filter = flatArr.filter((element) => element.label === elements);
      finalData.push(filter);
    }
    setCurrentValue((prev: any) => ({
      ...prev,
      skills: finalData.flat(),
    }));
  }, [skillCustomArr]);

  return { updateStateValue, currentValue };
};

export default readJson;
