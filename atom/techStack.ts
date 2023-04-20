import { atom } from "recoil";

export type gitHubTechStack = {
  client: string[];
  server: string[];
  database: string[];
  devOps: string[];
  features: string[];
  environmentVariables: string[];
  prerequisites: string[];
  installation: string[];
  runningTests: string[];
  runLocally: string[];
  deployment: string[];
  roadMap: string[];
  faqSection: string[];
  acknowledgements: string[];
};

const defaultPostState: gitHubTechStack = {
  client: [],
  server: [],
  database: [],
  devOps: [],
  features: [],
  environmentVariables: [],
  prerequisites: [],
  installation: [],
  runningTests: [],
  runLocally: [],
  deployment: [],
  roadMap: [],
  faqSection: [],
  acknowledgements: [],
};

export const gitTechStack = atom<gitHubTechStack>({
  key: "GitTechStack",
  default: defaultPostState,
});
