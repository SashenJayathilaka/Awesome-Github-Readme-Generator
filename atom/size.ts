import { atom } from "recoil";

export type gitHubImagesSize = {
  mainImageWidth: string;
  mainImageHeight: string;
};

const defaultPostState: gitHubImagesSize = {
  mainImageWidth: "",
  mainImageHeight: "",
};

export const gitImagesSizes = atom<gitHubImagesSize>({
  key: "GitImagesSizes",
  default: defaultPostState,
});
