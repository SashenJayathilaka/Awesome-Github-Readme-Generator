"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import { useRecoilState } from "recoil";

const ProfileMdPreview = () => {
  const [profileDetails] = useRecoilState(profileAtomDetail);

  const Tittle = () => {
    const tittle = profileDetails.profileTitle;
    const name = profileDetails.profileName;

    if (tittle && name) {
      return (
        <>
          <h1 className="text-center">
            {tittle} {name}
          </h1>
          <br />
        </>
      );
    }

    return null;
  };

  const SubTittle = () => {
    const subTittle = profileDetails.profileSubTitle;

    if (subTittle) {
      return (
        <>
          <h3 className="text-center">{subTittle}</h3>
          <br />
        </>
      );
    }

    return null;
  };

  const Work = () => {
    const working = profileDetails.working;
    const workingName = profileDetails.workingName;
    const collaborate = profileDetails.collaborate;
    const collaborateName = profileDetails.collaborateName;
    const help = profileDetails.help;
    const helpName = profileDetails.helpName;
    const learning = profileDetails.learning;
    const learningName = profileDetails.learningName;
    const about = profileDetails.about;
    const aboutName = profileDetails.aboutName;
    const reach = profileDetails.reach;
    const reachName = profileDetails.reachName;
    const project = profileDetails.myProjects;
    const projectName = profileDetails.myProjectsName;
    const articles = profileDetails.articles;
    const articlesName = profileDetails.articlesName;
    const experiences = profileDetails.experiences;
    const experiencesName = profileDetails.experiencesName;
    const fact = profileDetails.fact;
    const factName = profileDetails.factName;

    return (
      <>
        <>
          {working && workingName && (
            <>
              <p>
                {working} {workingName}
              </p>
            </>
          )}
        </>
        <>
          {collaborate && collaborateName && (
            <>
              <p>
                {collaborate} {collaborateName}
              </p>
            </>
          )}
        </>
        <>
          {help && helpName && (
            <>
              <p>
                {help} {helpName}
              </p>
            </>
          )}
        </>
        <>
          {learning && learningName && (
            <>
              <p>
                {learning} {learningName}
              </p>
            </>
          )}
        </>
        <>
          {about && aboutName && (
            <>
              <p>
                {about} {aboutName}
              </p>
            </>
          )}
        </>
        <>
          {reach && reachName && (
            <>
              <p>
                {reach} {reachName}
              </p>
            </>
          )}
        </>
        <>
          {project && projectName && (
            <>
              <p>
                {project} {projectName}
              </p>
            </>
          )}
        </>
        <>
          {articles && articlesName && (
            <>
              <p>
                {articles} {articlesName}
              </p>
            </>
          )}
        </>
        <>
          {experiences && experiencesName && (
            <>
              <p>
                {experiences} {experiencesName}
              </p>
            </>
          )}
        </>
        <>
          {fact && factName && (
            <>
              <p>
                {fact} {factName}
              </p>
            </>
          )}
        </>
      </>
    );
  };

  const Languages = () => {
    const languages = profileDetails.skills;

    if (languages.length > 0) {
      return (
        <>
          <h3 className="text-left">Languages and Tools:</h3>
          <br />
          <p className="text-left">
            {languages.map((data: any, index) => (
              <div key={index}>
                <img src={data} alt="language&tool" width="40" height="40" />
              </div>
            ))}
          </p>
        </>
      );
    }

    return null;
  };

  return { Tittle, SubTittle, Work, Languages };
};

export default ProfileMdPreview;
