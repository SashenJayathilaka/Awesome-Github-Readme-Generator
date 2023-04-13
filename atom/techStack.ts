import { atom } from "recoil";

export type gitHubTechStack = {
  client: string[];
  server: string[];
  database: string[];
  devOps: string[];
};

const defaultPostState: gitHubTechStack = {
  client: [],
  server: [],
  database: [],
  devOps: [],
};

export const gitTechStack = atom<gitHubTechStack>({
  key: "GitTechStack",
  default: defaultPostState,
});
