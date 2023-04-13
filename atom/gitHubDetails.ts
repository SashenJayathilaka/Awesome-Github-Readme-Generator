import { atom } from "recoil";

export type gitHubDetail = {
  gitUserName: string;
  gitRepoName: string;
  gitRepoUrl: string;
};

const defaultPostState: gitHubDetail = {
  gitRepoName: "",
  gitRepoUrl: "",
  gitUserName: "",
};

export const gitHubDetails = atom<gitHubDetail>({
  key: "GitHubDetails",
  default: defaultPostState,
});
