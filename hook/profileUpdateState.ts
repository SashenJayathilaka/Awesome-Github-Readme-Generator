import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import { gitTechnologies } from "@/atom/technology";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import languageArr from "./languageArr";

const profileUpdateState = () => {
  const [technology] = useRecoilState(gitTechnologies);
  const [images, setImages] = useRecoilState(profileAtomDetail);
  const updatedLanguageArray: string[] = [];
  const updatingLanguageArray: string[] = [];
  var unique: string | any;

  function onlyUnique(
    value: string | number,
    index: string | number,
    array: any
  ) {
    return array.indexOf(value) === index;
  }

  const filterOneByOne = () => {
    for (let index = 0; index < languageArr.length; index++) {
      // @ts-ignore
      const element = technology[languageArr[index]];

      if (element) {
        updatingLanguageArray.push(element);
      }
    }

    if (updatingLanguageArray) {
      unique = updatingLanguageArray.filter(onlyUnique).flat();
      updatedLanguageArray.push(unique);

      setImages((prev) => ({
        ...prev,
        skills: unique,
      }));
    }
  };

  useEffect(() => {
    filterOneByOne();
  }, [technology]);

  return {
    updatedLanguageArray,
    unique,
    images,
  };
};

export default profileUpdateState;
