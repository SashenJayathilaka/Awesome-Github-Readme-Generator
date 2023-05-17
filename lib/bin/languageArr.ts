import request from "@/lib/request";

const languageArr = () => {
  const { skills } = request();
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
      skills.automation,
      skills.backend,
      skills.backendService,
      skills.database,
      skills.devops,
      skills.engines,
      skills.framework,
      skills.frontend,
      skills.languages,
      skills.mL,
      skills.mobile,
      skills.other,
      skills.software,
      skills.static,
      skills.testing,
      skills.visualization
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

  return { languageArray };
};

export default languageArr;
