"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import Heading from "@/components/Heading";
import InputField from "@/components/InputField";
import { BiNetworkChart } from "react-icons/bi";
import { useRecoilState } from "recoil";
import ProfileStack from "../ProfileStack";

type Props = {};

function Work({}: Props) {
  const [profileDetails, setProfileDetails] = useRecoilState(profileAtomDetail);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="py-6">
      <Heading icon={BiNetworkChart} label="Title" />
      <div className="flex flex-col justify-start gap-6 py-4">
        <div className="flex justify-start gap-6 py-2">
          <InputField
            onChange={onChange}
            label="Tittle"
            type="text"
            name="working"
            value={profileDetails.working}
          />
          <InputField
            onChange={onChange}
            label="Project Name"
            type="text"
            name="workingName"
            value={profileDetails.workingName}
          />
          <InputField
            onChange={onChange}
            label="Project Link"
            type="text"
            name="workingLink"
            value={profileDetails.workingLink}
          />
        </div>
        <div className="flex justify-start gap-6 py-2">
          <InputField
            onChange={onChange}
            label="Tittle"
            type="text"
            name="collaborate"
            value={profileDetails.collaborate}
          />
          <InputField
            onChange={onChange}
            label="Project Name"
            type="text"
            name="collaborateName"
            value={profileDetails.collaborateName}
          />
          <InputField
            onChange={onChange}
            label="Project Link"
            type="text"
            name="collaborateLink"
            value={profileDetails.collaborateLink}
          />
        </div>
        <div className="flex justify-start gap-6 py-2">
          <InputField
            onChange={onChange}
            label="Tittle"
            type="text"
            name="help"
            value={profileDetails.help}
          />
          <InputField
            onChange={onChange}
            label="Project Name"
            type="text"
            name="helpName"
            value={profileDetails.helpName}
          />
          <InputField
            onChange={onChange}
            label="Project Link"
            type="text"
            name="helpLink"
            value={profileDetails.helpLink}
          />
        </div>
        <ProfileStack
          onChange={onChange}
          value={profileDetails.learning}
          label="Tittle"
          name="learning"
          secondValue={profileDetails.learningName}
          secondLabel="Frameworks, courses etc"
          secondName="learningName"
        />
        <ProfileStack
          onChange={onChange}
          value={profileDetails.about}
          label="Tittle"
          name="about"
          secondValue={profileDetails.aboutName}
          secondLabel="React, vue and gsap"
          secondName="aboutName"
        />
        <ProfileStack
          onChange={onChange}
          value={profileDetails.reach}
          label="Tittle"
          name="reach"
          secondValue={profileDetails.reachName}
          secondLabel="example@gmail.com"
          secondName="reachName"
        />
        <ProfileStack
          onChange={onChange}
          value={profileDetails.myProjects}
          label="Tittle"
          name="myProjects"
          secondValue={profileDetails.myProjectsName}
          secondLabel="portfolio link"
          secondName="myProjectsName"
        />
        <ProfileStack
          onChange={onChange}
          value={profileDetails.articles}
          label="Tittle"
          name="articles"
          secondValue={profileDetails.articlesName}
          secondLabel="blog link"
          secondName="articlesName"
        />
        <ProfileStack
          onChange={onChange}
          value={profileDetails.experiences}
          label="Tittle"
          name="experiences"
          secondValue={profileDetails.experiencesName}
          secondLabel="resume link"
          secondName="experiencesName"
        />
        <ProfileStack
          onChange={onChange}
          value={profileDetails.fact}
          label="Tittle"
          name="fact"
          secondValue={profileDetails.factName}
          secondLabel="I  think I am funny"
          secondName="factName"
        />
      </div>
    </div>
  );
}

export default Work;
