import { atom } from "recoil";

export type gitTechnology = {
  JavaScript: string;
  TypeScript: string;
  GoLang: string;
};

const defaultPostState: gitTechnology = {
  TypeScript: "",
  JavaScript: "",
  GoLang: "",
};

export const gitTechnologies = atom<gitTechnology>({
  key: "GitTechnologies",
  default: defaultPostState,
});
