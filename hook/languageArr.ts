import {
  backendFrameWork,
  developmentEditors,
  frontendDevelopment,
  languages,
  otherFrameWork,
  others,
  styleComponents,
} from "../lib/store";

const languageArray: string[] = [];
const updatingLanguageArray: string[] = [];
const storeArray: any[] = [];
var unique: string | any;

function onlyUnique(
  value: string | number,
  index: string | number,
  array: any
) {
  return array.indexOf(value) === index;
}

const updateArray = () => {
  storeArray.push(
    backendFrameWork,
    developmentEditors,
    frontendDevelopment,
    languages,
    otherFrameWork,
    others,
    styleComponents
  );

  if (storeArray.length > 0) {
    storeArray.flat().map((language) => {
      updatingLanguageArray.push(language.label);
    });

    if (updatingLanguageArray.length > 0) {
      unique = updatingLanguageArray.filter(onlyUnique).flat();
      languageArray.push(unique);
    }
  }
};

updateArray();

export default languageArray.flat();
