import { atom } from "recoil";

export type GitHubRepoDetails = {
  websiteUpDown: string;
  websiteLink: string;
  maintained: string;
  forks: string;
  stars: string;
  issues: string;
  lastCommit: string;
  gitUserName: string;
  gitRepoName: string;
  gitRepoUrl: string;
  name: string;
  twitter: string;
  email: string;
  isTable: string;
  mainImage: string;
  demoImage: string[]; // done
  updatedStateTechnology: string[]; // done
  firstRow: string;
  secondRow: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  contributing: string;
  codeOfConduct: string;
  licenseValue: string;
  mainImageWidth: string;
  mainImageHeight: string;
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

const defaultPostState: GitHubRepoDetails = {
  websiteUpDown: "",
  websiteLink: "",
  maintained: "",
  forks: "",
  stars: "",
  issues: "",
  lastCommit: "",
  gitRepoName: "",
  gitRepoUrl: "",
  gitUserName: "",
  name: "",
  twitter: "",
  email: "",
  isTable: "",
  mainImage: "",
  demoImage: [],
  updatedStateTechnology: [],
  firstRow: "",
  secondRow: "",
  primaryColor: "",
  secondaryColor: "",
  accentColor: "",
  textColor: "",
  contributing: "",
  codeOfConduct: "",
  licenseValue: "",
  mainImageWidth: "",
  mainImageHeight: "",
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

export const gitRepoDetails = atom<GitHubRepoDetails>({
  key: "GitHubRepoDetails",
  default: defaultPostState,
});
