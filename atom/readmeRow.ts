import { atom } from "recoil";

export type ReadmeRow = {
  firstRow: string;
  secondRow: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  contributing: string;
  codeOfConduct: string;
  licenseValue: string;
};

const defaultPostState: ReadmeRow = {
  firstRow: "",
  secondRow: "",
  primaryColor: "",
  secondaryColor: "",
  accentColor: "",
  textColor: "",
  contributing: "",
  codeOfConduct: "",
  licenseValue: "",
};

export const readmeRows = atom<ReadmeRow>({
  key: "ReadmeRows",
  default: defaultPostState,
});
