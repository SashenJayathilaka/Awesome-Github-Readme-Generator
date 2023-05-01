/* const updateOriginalState = (values: any) => {
  const dataArray: string[] = [
    "screenShortOne",
    "screenShortTwo",
    "screenShortThree",
    "screenShortFour",
    "screenShortFive",
    "screenShortSix",
  ];
  const updatedArray: string[] = [];
  var unique: string[];
  const currentValue = images.demoImage;

  function onlyUnique(
    value: string | number,
    index: string | number,
    array: any
  ) {
    return array.indexOf(value) === index;
  }

  for (let index = 0; index < dataArray.length; index++) {
    const element = values[dataArray[index]];
    updatedArray.push(...currentValue, element);
  }

  if (updatedArray.length > 0) {
    unique = updatedArray.filter(onlyUnique).flat();

    unique = unique.filter(function (element) {
      return element !== undefined;
    });

    setImages((prev) => ({
      ...prev,
      demoImage: unique.flat(),
    }));
  }
};

useEffect(() => {
  if (updateState) {
    updateOriginalState(updateState);
  } else return;
}, [updateState]);
 */
