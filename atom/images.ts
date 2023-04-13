import { atom } from "recoil";

export type gitHubImages = {
  mainImage: string;
  demoImage: string[];
  updatedStateTechnology: string[];
};

const defaultPostState: gitHubImages = {
  mainImage: "",
  demoImage: [],
  updatedStateTechnology: [],
};

export const gitImages = atom<gitHubImages>({
  key: "GitReadmeImagesAndDemo",
  default: defaultPostState,
});
