"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import {
  AiFillBehanceCircle,
  AiFillCodeSandboxCircle,
  AiFillCodepenCircle,
  AiFillDribbbleCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsDiscord, BsFillRssFill, BsStackOverflow } from "react-icons/bs";
import { FaHackerrank, FaKaggle } from "react-icons/fa";
import { MdLogoDev } from "react-icons/md";
import {
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiHackerearth,
  SiHashnode,
  SiLeetcode,
  SiTopcoder,
} from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";
import { useRecoilState } from "recoil";
import SocialInput from "./SocialInput";

type Props = {};

function Social({}: Props) {
  const [profileDetails, setProfileDetails] = useRecoilState(profileAtomDetail);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="py-6">
      <Heading icon={SlSocialGithub} label="Social" />
      <div className="flex flex-col justify-start gap-6 py-2 w-full">
        <SocialInput
          onChange={onChange}
          value={profileDetails.github}
          label="github username"
          name="github"
          secondValue={profileDetails.twitter}
          secondLabel="twitter username"
          secondName="twitter"
          icon={AiFillGithub}
          secondIcon={AiFillTwitterCircle}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.dev}
          label="dev.to username"
          name="dev"
          secondValue={profileDetails.codeSandbox}
          secondLabel="codesandbox username"
          secondName="codeSandbox"
          icon={MdLogoDev}
          secondIcon={AiFillCodeSandboxCircle}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.linkedin}
          label="linkedin username"
          name="linkedin"
          secondValue={profileDetails.facebook}
          secondLabel="facebook username"
          secondName=""
          icon={AiFillLinkedin}
          secondIcon={AiFillFacebook}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.dribbble}
          label="dribbble username"
          name="dribbble"
          secondValue={profileDetails.hashnode}
          secondLabel="hashnode username (with @)"
          secondName="hashnode"
          icon={AiFillDribbbleCircle}
          secondIcon={SiHashnode}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.youtube}
          label="youtube channel name"
          name="youtube"
          secondValue={profileDetails.hackerrank}
          secondLabel="hackerrank username"
          secondName="hackerrank"
          icon={AiFillYoutube}
          secondIcon={FaHackerrank}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.leetCode}
          label="leetcode username"
          name="leetCode"
          secondValue={profileDetails.hackerearth}
          secondLabel="hackerearth user (with @)"
          secondName="hackerearth"
          icon={SiLeetcode}
          secondIcon={SiHackerearth}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.discord}
          label="discord invite (only code)"
          name="discord"
          secondValue={profileDetails.codePen}
          secondLabel="codepen username"
          secondName="codePen"
          icon={BsDiscord}
          secondIcon={AiFillCodepenCircle}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.stackoverflow}
          label="stackoverflow user ID"
          name="stackoverflow"
          secondValue={profileDetails.kaggle}
          secondLabel="kaggle username"
          secondName="kaggle"
          icon={BsStackOverflow}
          secondIcon={FaKaggle}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.instagram}
          label="instagram username"
          name="instagram"
          secondValue={profileDetails.behance}
          secondLabel="behance username"
          secondName="behance"
          icon={AiFillInstagram}
          secondIcon={AiFillBehanceCircle}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.medium}
          label="medium username (with @)"
          name="medium"
          secondValue={profileDetails.codeChef}
          secondLabel="codechef username"
          secondName="codeChef"
          icon={AiFillMediumCircle}
          secondIcon={SiCodechef}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.codeforces}
          label="codeforces username"
          name="codeforces"
          secondValue={profileDetails.topCoder}
          secondLabel="topcoder username"
          secondName="topCoder"
          icon={SiCodeforces}
          secondIcon={SiTopcoder}
        />
        <SocialInput
          onChange={onChange}
          value={profileDetails.GFG}
          label="GFG (<username>/profile)"
          name="GFG"
          secondValue={profileDetails.RSS}
          secondLabel="RSS feed URL"
          secondName="RSS"
          icon={SiGeeksforgeeks}
          secondIcon={BsFillRssFill}
        />
      </div>
    </div>
  );
}

export default Social;
