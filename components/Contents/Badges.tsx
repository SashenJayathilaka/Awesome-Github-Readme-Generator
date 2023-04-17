"use client";

import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { SlBadge } from "react-icons/sl";

import Heading from "../Heading";

type Props = {
  onChangeGitHubBadges: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

function Badges({ onChangeGitHubBadges }: Props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="py-8">
      <Heading icon={SlBadge} label="GitHub Badges" />
      <div className="flex justify-start gap-8">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="w-[150px]">Website up or down?</p>
            <Checkbox
              {...label}
              color="success"
              value="websiteUpDown"
              name="websiteUpDown"
              onChange={onChangeGitHubBadges}
              sx={{ color: "#fff" }}
            />
            <div className="w-24">
              <img src="https://img.shields.io/website-up-down-green-red/http/monip.org.svg" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[150px]">Maintained?</p>
            <Checkbox
              {...label}
              color="success"
              value="maintained"
              name="maintained"
              onChange={onChangeGitHubBadges}
              sx={{ color: "#fff" }}
            />
            <div className="w-24">
              <img src="https://img.shields.io/badge/Maintained-Yes-indigo" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-[150px]">Forks</p>
            <Checkbox
              {...label}
              color="success"
              value="forks"
              name="forks"
              onChange={onChangeGitHubBadges}
              sx={{ color: "#fff" }}
            />
            <div className="w-24">
              <img src="https://img.shields.io/github/forks/SashenJayathilaka/Airbnb-Build.svg" />
            </div>
          </div>
        </div>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          sx={{
            backgroundColor: "#3795BD",
          }}
        />
        <div className="flex flex-col">
          <div className="flex justify-start gap-6 items-center">
            <p className="w-[70px]">Stars</p>
            <Checkbox
              {...label}
              color="success"
              value="stars"
              name="stars"
              onChange={onChangeGitHubBadges}
              sx={{ color: "#fff" }}
            />
            <div className="w-24">
              <img src="https://img.shields.io/github/stars/SashenJayathilaka/Airbnb-Build.svg" />
            </div>
          </div>
          <div className="flex justify-start gap-6 items-center">
            <p className="w-[70px]">Issues</p>
            <Checkbox
              {...label}
              color="success"
              value="issues"
              name="issues"
              onChange={onChangeGitHubBadges}
              sx={{ color: "#fff" }}
            />
            <div className="w-24">
              <img src="https://img.shields.io/github/issues/SashenJayathilaka/Airbnb-Build" />
            </div>
          </div>
          <div className="flex justify-start gap-6 items-center">
            <p className="w-[70px]">LastCommit</p>
            <Checkbox
              {...label}
              color="success"
              value="lastCommit"
              name="lastCommit"
              onChange={onChangeGitHubBadges}
              sx={{ color: "#fff" }}
            />
            <div className="w-24">
              <img src="https://img.shields.io/github/last-commit/SashenJayathilaka/Airbnb-Build" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badges;
