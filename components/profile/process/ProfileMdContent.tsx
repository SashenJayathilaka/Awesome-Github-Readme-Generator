"use client";

import { profileAtomDetail } from "@/atom/profileDetailsAtom";
import { useRecoilState } from "recoil";

const ProfileMdContent = () => {
  const [profileDetails] = useRecoilState(profileAtomDetail);

  const Tittle = () => {
    const tittle = profileDetails.profileTitle;
    const name = profileDetails.profileName;

    if (tittle && name) {
      return (
        <>
          {`<h1 align="center">${tittle} ${name}</h1>`}
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
          {`<h3 align="center">${subTittle}</h3>`}
          <br />
        </>
      );
    }

    return null;
  };

  const Work = () => {
    const working = profileDetails.working;
    const workingLink = profileDetails.workingLink;
    const workingName = profileDetails.workingName;
    const collaborate = profileDetails.collaborate;
    const collaborateName = profileDetails.collaborateName;
    const collaborateLink = profileDetails.collaborateLink;
    const help = profileDetails.help;
    const helpLink = profileDetails.helpLink;
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

    if (
      workingName ||
      collaborateName ||
      helpName ||
      learningName ||
      aboutName ||
      reachName ||
      projectName ||
      articlesName ||
      experiencesName ||
      factName
    ) {
      return (
        <>
          <>
            {working && workingName && workingLink ? (
              <>
                {`- ${working} [${workingName}](${workingLink})`}
                <br />
              </>
            ) : (
              working &&
              workingName && (
                <>
                  {`- ${working} **${workingName}**`}
                  <br />
                </>
              )
            )}
          </>
          <>
            {collaborate && collaborateName && collaborateLink ? (
              <>
                {`- ${collaborate} [${collaborateName}](${collaborateLink})`}
                <br />
              </>
            ) : (
              collaborate &&
              collaborateName && (
                <>
                  {`- ${collaborate} **${collaborateName}**`}
                  <br />
                </>
              )
            )}
          </>
          <>
            {help && helpName && helpLink ? (
              <>
                {`- ${help} [${helpName}](${helpLink})`}
                <br />
              </>
            ) : (
              help &&
              helpName && (
                <>
                  {`- ${help} **${helpName}**`}
                  <br />
                </>
              )
            )}
          </>
          <>
            {learning && learningName && (
              <>
                {`- ${learning} **${learningName}**`}
                <br />
              </>
            )}
          </>
          <>
            {about && aboutName && <>{`- ${about} **${aboutName}**`}</>}
            <br />
          </>
          <>
            {reach && reachName && <>{`- ${reach} **${reachName}**`}</>}
            <br />
          </>
          <>
            {project && projectName && (
              <>
                {`- ${project} **${projectName}**`}
                <br />
              </>
            )}
          </>
          <>
            {articles && articlesName && (
              <>
                {`- ${articles} **${articlesName}**`}
                <br />
              </>
            )}
          </>
          <>
            {experiences && experiencesName && (
              <>
                {`- ${experiences} **${experiencesName}**`}
                <br />
              </>
            )}
          </>
          <>
            {fact && factName && (
              <>
                {`- ${fact} **${factName}**`}
                <br />
              </>
            )}
          </>
          <br />
        </>
      );
    }

    return null;
  };

  const Languages = () => {
    const languages = profileDetails.skills;

    if (languages.length > 0) {
      return (
        <>
          {`<h3 align="left">Languages and Tools:</h3>`}
          <br />
          {`<p align="left">`}
          {languages.map((data: any, index) => (
            <div
              key={index}
            >{`<img src="${data}" alt="language&tool" width="40" height="40"/>`}</div>
          ))}
          {`</p>`}
          <br />
          <br />
        </>
      );
    }

    return null;
  };

  const Connect = () => {
    const codeSandbox = profileDetails.codeSandbox;
    const twitter = profileDetails.twitter;
    const linkedin = profileDetails.linkedin;
    const facebook = profileDetails.facebook;
    const dribbble = profileDetails.dribbble;
    const hashnode = profileDetails.hashnode;
    const hackerrank = profileDetails.hackerrank;
    const leetCode = profileDetails.leetCode;
    const hackerEarth = profileDetails.hackerearth;
    const discord = profileDetails.discord;
    const codePen = profileDetails.codePen;
    const stackoverflow = profileDetails.stackoverflow;
    const kaggle = profileDetails.kaggle;
    const instagram = profileDetails.instagram;
    const behance = profileDetails.behance;
    const medium = profileDetails.medium;
    const codeChef = profileDetails.codeChef;
    const codeForces = profileDetails.codeforces;
    const topCoder = profileDetails.topCoder;
    const gfg = profileDetails.GFG;
    const dev = profileDetails.dev;
    const rss = profileDetails.RSS;

    if (
      codeSandbox ||
      twitter ||
      linkedin ||
      facebook ||
      dribbble ||
      hashnode ||
      hackerrank ||
      leetCode ||
      hackerEarth ||
      discord ||
      codePen ||
      stackoverflow ||
      kaggle ||
      instagram ||
      behance ||
      medium ||
      codeChef ||
      codeForces ||
      topCoder ||
      gfg ||
      dev ||
      rss
    ) {
      return (
        <>
          {`<h3 align="left">Connect with me:</h3>`}
          <br />
          {`<p align="left">`}
          <br />
          <>
            {codeSandbox && (
              <>{`<a href="https://codesandbox.com/${codeSandbox}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codesandbox.svg" alt="${codeSandbox}" height="30" width="40" /></a>`}</>
            )}
          </>
          <>
            {twitter && (
              <>{`<a href="https://twitter.com/${twitter}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${twitter}" height="30" width="40" /></a>`}</>
            )}
          </>
          <>
            {linkedin && (
              <>{`<a href="https://linkedin.com/in/${linkedin}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${linkedin}" height="30" width="40" /></a>`}</>
            )}
          </>
          <>
            {linkedin && (
              <>{`<a href="https://linkedin.com/in/${linkedin}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="${linkedin}" height="30" width="40" /></a>`}</>
            )}
          </>
          {`</p>`}
        </>
      );
    }

    return null;
  };

  return { Tittle, SubTittle, Work, Languages, Connect };
};

export default ProfileMdContent;
