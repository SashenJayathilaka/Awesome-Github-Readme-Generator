"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { gitTechnologies } from "@/atom/technology";
import { useRecoilState } from "recoil";

const MdPreview = () => {
  const [gitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow] = useRecoilState(readmeRows);
  const [images] = useRecoilState(gitImages);
  const [size] = useRecoilState(gitImagesSizes);
  const [displayBadges] = useRecoilState(gitBadge);
  const [technology] = useRecoilState(gitTechnologies);

  const PMainImage = () => {
    const image = images.mainImage;

    if (image) {
      return (
        <>
          <img
            src={image}
            alt="logo"
            width={size.mainImageWidth || ""}
            height={size.mainImageHeight || ""}
          />
        </>
      );
    }
    return null;
  };

  const PMainTopic = () => {
    const mainTopic = readmeRow.firstRow;
    if (mainTopic) {
      return <h1 className="text-xl font-medium">{mainTopic}</h1>;
    }
    return null;
  };

  const PSubTopic = () => {
    const subTopic = readmeRow.secondRow;

    if (subTopic) {
      return (
        <>
          <p>{subTopic}</p>
          <br />
        </>
      );
    }

    return null;
  };

  const PMaintained = () => {
    const maintained = displayBadges.maintained;

    if (maintained) {
      return (
        <>
          <img src="https://img.shields.io/badge/Maintained-Yes-indigo" />
        </>
      );
    }

    return null;
  };

  const PWebsiteUpDown = () => {
    const upDown = displayBadges.websiteUpDown;
    const link = displayBadges.websiteLink;

    if (upDown) {
      return (
        <>
          <a href={link}>
            <img src="https://img.shields.io/website-up-down-green-red/http/monip.org.svg" />
          </a>
        </>
      );
    }
    return null;
  };

  const PForks = () => {
    const isFork = displayBadges.forks;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          <img
            src={`https://img.shields.io/github/forks/${user}/${repoName}.svg`}
          />
        </>
      );
    } else {
      return null;
    }

    return null;
  };

  const PStars = () => {
    const isFork = displayBadges.stars;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          <img
            src={`https://img.shields.io/github/stars/${user}/${repoName}.svg`}
          />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const PIssues = () => {
    const isFork = displayBadges.issues;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          <img
            src={`https://img.shields.io/github/issues/${user}/${repoName}`}
          />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const PLastCommit = () => {
    const isFork = displayBadges.lastCommit;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          <img
            src={`https://img.shields.io/github/last-commit/${user}/${repoName}`}
          />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const PDocumentation = () => {
    const link = displayBadges.websiteLink;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (user && repoName) {
      return (
        <>
          <h4>
            {link && <a href={link}>View Demo</a>}
            <span> · </span>
            <a
              href={`https://github.com/${user}/${repoName}/blob/master/README.md`}
            >
              Documentation
            </a>
            <span> · </span>
            <a href={`https://github.com/${user}/${repoName}/issues`}>
              Report Bug
            </a>
            <span> · </span>
            <a href={`https://github.com/${user}/${repoName}/issues`}>
              Request Feature
            </a>
          </h4>
        </>
      );
    } else {
      return null;
    }
    return null;
  };

  const PLanguages = () => {
    const languageLabel = images.updatedStateTechnology;

    if (languageLabel) {
      return (
        <>
          {languageLabel.map((language, index) => (
            <img key={index} src={language} alt="name" className="w-10 h-10" />
          ))}
        </>
      );
    } else {
      return null;
    }

    return null;
  };

  const PDemoProjectAssets = () => {
    var projectImageLink = images.demoImage;
    const link = displayBadges.websiteLink;

    projectImageLink = projectImageLink.filter(function (element) {
      return element !== "";
    });

    if (projectImageLink.length > 0) {
      return (
        <>
          <h1 className="text-xl font-medium">⭐ About the Project</h1>
          <br />
          <h3>📷 Screenshots</h3>
          <br />
          {projectImageLink.map((image, index) => (
            <>
              <div key={index} className="flex justify-center items-center">
                <a href={link}>
                  <img src={image} alt="image" className="w-[800px]" />
                </a>
              </div>
              <br />
            </>
          ))}
        </>
      );
    }

    return null;
  };

  return {
    PMainImage,
    PMainTopic,
    PSubTopic,
    PMaintained,
    PWebsiteUpDown,
    PForks,
    PStars,
    PIssues,
    PLastCommit,
    PDocumentation,
    PLanguages,
    PDemoProjectAssets,
  };
};

export default MdPreview;
