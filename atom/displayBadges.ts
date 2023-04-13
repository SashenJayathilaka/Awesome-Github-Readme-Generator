import { atom } from "recoil";

export type GitBadges = {
  websiteUpDown: string;
  websiteLink: string;
  maintained: string;
  forks: string;
  stars: string;
  issues: string;
  lastCommit: string;
};

const defaultPostState: GitBadges = {
  websiteUpDown: "",
  websiteLink: "",
  maintained: "",
  forks: "",
  stars: "",
  issues: "",
  lastCommit: "",
};

export const gitBadge = atom<GitBadges>({
  key: "GitBadge",
  default: defaultPostState,
});
