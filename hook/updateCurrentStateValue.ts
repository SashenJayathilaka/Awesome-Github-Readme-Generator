"use client";

import { GitHubRepoDetails } from "@/atom/repositoryAtom";

function updateCurrentStateValue() {
  const updateRepoDetailsLocalCash = (
    repoDetailsElement: GitHubRepoDetails,
    setGitHubDetail: (value: GitHubRepoDetails) => void
  ) => {
    if (repoDetailsElement) {
      setGitHubDetail(repoDetailsElement);
    }
  };

  return { updateRepoDetailsLocalCash };
}

export default updateCurrentStateValue;
