import { gitImages } from "@/atom/images";
import { gitTechnologies } from "@/atom/technology";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import languageArr from "./languageArr";

const updateState = () => {
  const [technology] = useRecoilState(gitTechnologies);
  const [images, setImages] = useRecoilState(gitImages);
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
    const currentValue = images.updatedStateTechnology;

    for (let index = 0; index < languageArr.length; index++) {
      // @ts-ignore
      const element = technology[languageArr[index]];

      if (element) {
        updatingLanguageArray.push(...currentValue, element);
      }
    }

    if (updatingLanguageArray) {
      unique = updatingLanguageArray.filter(onlyUnique).flat();
      updatedLanguageArray.push(unique);

      setImages((prev: string | any) => ({
        ...prev,
        updatedStateTechnology: unique,
      }));

      // console.log(unique);
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

export default updateState;
