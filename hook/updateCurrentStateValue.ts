"use client";

import {
  GitBadges,
  GitHubDetail,
  GitHubImages,
  GitHubImagesSize,
  GitHubTechStack,
  MiddleController,
  ReadmeRow,
} from "@/type";

function updateCurrentStateValue() {
  const updateFirstElement = (
    firstElement: GitHubTechStack,
    setGitHubTechStack: (value: GitHubTechStack) => void
  ) => {
    if (firstElement) {
      setGitHubTechStack(firstElement);
    }
  };

  const updateSecondElement = (
    secondElement: GitHubDetail,
    setGitHubDetail: (value: GitHubDetail) => void
  ) => {
    if (secondElement) {
      setGitHubDetail(secondElement);
    }
  };

  const updateThirdElement = (
    thirdElement: ReadmeRow,
    setIsReadmeRow: (value: ReadmeRow) => void
  ) => {
    if (thirdElement) {
      setIsReadmeRow(thirdElement);
    }
  };

  const updateFourthElement = (
    fourthElement: GitHubImages,
    setImages: (value: GitHubImages) => void
  ) => {
    if (fourthElement) {
      setImages(fourthElement);
    }
  };

  const updateFifthElement = (
    fifthElement: GitHubImagesSize,
    setSize: (value: GitHubImagesSize) => void
  ) => {
    if (fifthElement) {
      setSize(fifthElement);
    }
  };

  const updateSixthElement = (
    sixthElement: GitBadges,
    setDisplayBadges: (value: GitBadges) => void
  ) => {
    if (sixthElement) {
      setDisplayBadges(sixthElement);
    }
  };

  const updateSeventhElement = (
    seventhElement: MiddleController,
    setControllers: (value: MiddleController) => void
  ) => {
    if (seventhElement) {
      setControllers(seventhElement);
    }
  };

  return {
    updateFirstElement,
    updateSecondElement,
    updateThirdElement,
    updateFourthElement,
    updateFifthElement,
    updateSixthElement,
    updateSeventhElement,
  };
}

export default updateCurrentStateValue;
