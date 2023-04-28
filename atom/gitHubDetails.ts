import { atom } from "recoil";

export type gitHubDetail = {
  gitUserName: string;
  gitRepoName: string;
  gitRepoUrl: string;
  name: string;
  twitter: string;
  email: string;
  isTable: string;
};

const defaultPostState: gitHubDetail = {
  gitRepoName: "",
  gitRepoUrl: "",
  gitUserName: "",
  name: "",
  twitter: "",
  email: "",
  isTable: "",
};

export const gitHubDetails = atom<gitHubDetail>({
  key: "GitHubDetails",
  default: defaultPostState,
});
