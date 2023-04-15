import { atom } from "recoil";

export type ReadmeRow = {
  firstRow: string;
  secondRow: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
};

const defaultPostState: ReadmeRow = {
  firstRow: "",
  secondRow: "",
  primaryColor: "",
  secondaryColor: "",
  accentColor: "",
  textColor: "",
};

export const readmeRows = atom<ReadmeRow>({
  key: "ReadmeRows",
  default: defaultPostState,
});
