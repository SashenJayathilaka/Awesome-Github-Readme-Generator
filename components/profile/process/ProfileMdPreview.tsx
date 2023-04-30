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
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            {languages.map((data: any, index) => (
              <img
                key={index}
                src={data.image}
                alt={data.label}
                width="40"
                height="40"
              />
            ))}
          </div>
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
    const youtube = profileDetails.youtube;
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
          <h3 className="text-left">Connect with me:</h3>
          <br />
          <p className="text-left">
            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gap: "10px",
              }}
            >
              <>
                {codeSandbox && (
                  <>
                    <a
                      href={`https://codesandbox.com/${codeSandbox}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/codesandbox.svg"
                        alt={codeSandbox}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {twitter && (
                  <>
                    <a href={`https://twitter.com/${twitter}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/twitter.svg"
                        alt={twitter}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {linkedin && (
                  <>
                    <a
                      href={`https://linkedin.com/in/${linkedin}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/linked-in-alt.svg"
                        alt={linkedin}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {facebook && (
                  <>
                    <a href={`https://fb.com/${facebook}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/facebook.svg"
                        alt={facebook}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {dribbble && (
                  <>
                    <a href={`https://dribbble.com/${dribbble}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/dribbble.svg"
                        alt={dribbble}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {hashnode && (
                  <>
                    <a href={`https://hashnode.com/${hashnode}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/hashnode.svg"
                        alt={hashnode}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {hackerrank && (
                  <>
                    <a
                      href={`https://www.hackerrank.com/${hackerrank}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/hackerrank.svg"
                        alt={hackerrank}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {youtube && (
                  <>
                    <a
                      href={`https://www.youtube.com/c/${youtube}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/youtube.svg"
                        alt={youtube}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {leetCode && (
                  <>
                    <a
                      href={`https://www.leetcode.com/${leetCode}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/leet-code.svg"
                        alt={leetCode}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {hackerEarth && (
                  <>
                    <a
                      href={`https://www.hackerearth.com/${hackerEarth}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/hackerearth.svg"
                        alt={hackerEarth}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {discord && (
                  <>
                    <a href={`https://discord.gg/${discord}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/discord.svg"
                        alt={discord}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {codePen && (
                  <>
                    <a href={`https://codepen.io/${codePen}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/codepen.svg"
                        alt={codePen}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {stackoverflow && (
                  <>
                    <a
                      href={`https://stackoverflow.com/users/${stackoverflow}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/stack-overflow.svg"
                        alt={stackoverflow}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {kaggle && (
                  <>
                    <a href={`https://kaggle.com/${kaggle}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/kaggle.svg"
                        alt={kaggle}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {instagram && (
                  <>
                    <a
                      href={`https://instagram.com/${instagram}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/instagram.svg"
                        alt={instagram}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {behance && (
                  <>
                    <a
                      href={`https://www.behance.net/${behance}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/behance.svg"
                        alt={behance}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {medium && (
                  <>
                    <a href={`https://medium.com/${medium}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/medium.svg"
                        alt={medium}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {codeForces && (
                  <>
                    <a
                      href={`https://codeforces.com/profile/${codeForces}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/codeforces.svg"
                        alt={codeForces}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {gfg && (
                  <>
                    <a
                      href={`https://auth.geeksforgeeks.org/user/${gfg}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/geeks-for-geeks.svg"
                        alt={gfg}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {topCoder && (
                  <>
                    <a
                      href={`https://www.topcoder.com/members/${topCoder}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/topcoder.svg"
                        alt={topCoder}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {rss && (
                  <>
                    <a href={`/${rss}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/rss.svg"
                        alt={rss}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {dev && (
                  <>
                    <a href={`https://dev.to/${dev}`} target="blank">
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/devto.svg"
                        alt={dev}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {codeChef && (
                  <>
                    <a
                      href={`https://www.codechef.com/users/${codeChef}`}
                      target="blank"
                    >
                      <img
                        className="items-center"
                        src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Social/codechef.svg"
                        alt={codeChef}
                        height="30"
                        width="40"
                      />
                    </a>
                  </>
                )}
              </>
            </div>
          </p>
        </>
      );
    }

    return null;
  };

  const AddOnFirst = () => {
    const visitors = profileDetails.visitors;
    const trophy = profileDetails.trophy;
    const trophyTheme = profileDetails.trophyTheme;
    const githubUsername = profileDetails.github;

    if (githubUsername) {
      if (visitors || trophy) {
        return (
          <>
            <p className="text-left">
              <img
                src={`https://komarev.com/ghpvc/?username=${githubUsername}&label=Profile%20views&color=0e75b6&style=flat`}
                alt={githubUsername}
              />
            </p>
            <br />
            <div className="text-left">
              <a href="https://github.com/ryo-ma/github-profile-trophy">
                <img
                  src={`https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=${trophyTheme}`}
                  alt={githubUsername}
                />
              </a>
            </div>
          </>
        );
      }
    }

    return null;
  };

  const AddOn = () => {
    const stats = profileDetails.stats;
    const startTheme = profileDetails.starsTheme;
    const skillsCard = profileDetails.skillsCard;
    const streak = profileDetails.streak;
    const streakCardTheme = profileDetails.streakTheme;
    const githubUsername = profileDetails.github;
    const skills = profileDetails.skillCardLayout;
    const gitSkillCard = profileDetails.skillCardTheme;

    const SkillCardFilter = () => {
      if (skills === "showMore") {
        return (
          <>
            <img
              className="items-start"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=sashenjayathilaka&langs_count=8&theme=${gitSkillCard}`}
              alt={githubUsername}
            />
          </>
        );
      } else if (skills === "compact") {
        return (
          <>
            <img
              className="items-start"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=sashenjayathilaka&layout=compact&theme=${gitSkillCard}`}
              alt={githubUsername}
            />
          </>
        );
      } else if (skills === "hide") {
        return (
          <>
            <img
              className="items-start"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=sashenjayathilaka&hide_progress=true&theme=${gitSkillCard}`}
              alt={githubUsername}
            />
          </>
        );
      }

      return null;
    };

    if (githubUsername) {
      if (stats || skillsCard || streak) {
        return (
          <>
            <>
              {skillsCard && (
                <>
                  <p>
                    <SkillCardFilter />
                  </p>
                </>
              )}
            </>
            <>
              {stats && (
                <>
                  <p>
                    &nbsp;
                    <img
                      className="items-center"
                      src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en&theme=${startTheme}`}
                      alt={githubUsername}
                    />
                  </p>
                </>
              )}
            </>
            <>
              {streak && (
                <>
                  <p>
                    <img
                      className="items-center"
                      src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${streakCardTheme}`}
                      alt={githubUsername}
                    />
                  </p>
                </>
              )}
            </>
          </>
        );
      }
    }

    return null;
  };

  const Support = () => {
    const coffey = profileDetails.buymeacoffee;
    const koFi = profileDetails.koFi;

    if (coffey || koFi) {
      return (
        <>
          <h3 className="text-left">Support:</h3>
          <p>
            <div className="flex justify-start gap-2">
              <>
                {coffey && (
                  <>
                    <a href={`https://www.buymeacoffee.com/${coffey}`}>
                      <img
                        className="items-start"
                        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                        height="50"
                        width="210"
                        alt={coffey}
                      />
                    </a>
                  </>
                )}
              </>
              <>
                {koFi && (
                  <>
                    <a href={`https://ko-fi.com/${koFi}`}>
                      <img
                        className="items-start"
                        src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
                        height="50"
                        width="210"
                        alt={coffey}
                      />
                    </a>
                  </>
                )}
              </>
            </div>
          </p>
        </>
      );
    }

    return null;
  };

  const Shields = () => {
    const twitter = profileDetails.twitter;
    const linkedin = profileDetails.linkedin;
    const githubUsername = profileDetails.github;
    const instagram = profileDetails.instagram;
    const reachName = profileDetails.reachName;

    if (twitter || linkedin || githubUsername || instagram || reachName) {
      return (
        <div className="flex justify-start gap-1">
          <>
            {twitter && (
              <>
                {
                  <a href={`https://twitter.com/{twitter}`} target="_blank">
                    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
                  </a>
                }
              </>
            )}
          </>
          <>
            {linkedin && (
              <>
                {
                  <a
                    href={`https://www.linkedin.com/in/${linkedin}`}
                    target="_blank"
                  >
                    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
                  </a>
                }
              </>
            )}
          </>
          <>
            {githubUsername && (
              <>
                {
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                  >
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
                  </a>
                }
              </>
            )}
          </>
          <>
            {instagram && (
              <>
                {
                  <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                  >
                    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
                  </a>
                }
              </>
            )}
          </>
          <>
            {reachName && (
              <>
                {
                  <a href={`mailto:${reachName}`}>
                    <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" />
                  </a>
                }
              </>
            )}
          </>
        </div>
      );
    }

    return null;
  };

  return {
    Tittle,
    SubTittle,
    Work,
    Languages,
    Connect,
    AddOnFirst,
    AddOn,
    Support,
    Shields,
  };
};

export default ProfileMdPreview;
