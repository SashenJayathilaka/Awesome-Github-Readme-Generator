import { atom } from "recoil";

export type ReadmeRow = {
  firstRow: string;
  secondRow: string;
};

const defaultPostState: ReadmeRow = {
  firstRow: "",
  secondRow: "",
};

export const readmeRows = atom<ReadmeRow>({
  key: "ReadmeRows",
  default: defaultPostState,
});
