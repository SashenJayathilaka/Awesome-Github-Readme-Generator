import { atom } from "recoil";

export type gitHubTechStack = {
  client: string[];
  server: string[];
  database: string[];
  devOps: string[];
  features: string[];
  environmentVariables: string[];
  prerequisites: string[];
};

const defaultPostState: gitHubTechStack = {
  client: [],
  server: [],
  database: [],
  devOps: [],
  features: [],
  environmentVariables: [],
  prerequisites: [],
};

export const gitTechStack = atom<gitHubTechStack>({
  key: "GitTechStack",
  default: defaultPostState,
});
