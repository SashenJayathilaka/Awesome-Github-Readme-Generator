import { atom } from "recoil";

export type gitHubTechStack = {
  client: string[]; // done
  server: string[]; // done
  database: string[]; // done
  devOps: string[]; // done
  features: string[]; // done
  environmentVariables: string[]; //done
  prerequisites: string[]; // done
  installation: string[]; // done
  runningTests: string[]; // done
  runLocally: string[]; // done
  deployment: string[]; // done
  roadMap: string[]; // done
  faqSection: string[]; //done
  acknowledgements: string[]; // done
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
