import { atom } from "recoil";

export type gitHubImages = {
  mainImage: string;
  demoImage: string[]; // done
  updatedStateTechnology: string[]; // done
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
