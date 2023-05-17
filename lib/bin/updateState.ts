/* import { gitImages } from "@/atom/images";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import languageArr from "./languageArr";

const updateState = () => {
  const [images, setImages] = useRecoilState(gitImages);
  const { languageArray } = languageArr();
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
    for (let index = 0; index < languageArray.flat().length; index++) {
      // @ts-ignore
      const element = technology[languageArray.flat()[index]];

      if (element) {
        updatingLanguageArray.push(element);
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
 */
