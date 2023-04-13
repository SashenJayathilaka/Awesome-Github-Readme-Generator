"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { middleControllers } from "@/atom/middleController";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { useRecoilState } from "recoil";

const MdContent = () => {
  const [gitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow] = useRecoilState(readmeRows);
  const [images] = useRecoilState(gitImages);
  const [size] = useRecoilState(gitImagesSizes);
  const [displayBadges] = useRecoilState(gitBadge);
  const [controllers] = useRecoilState(middleControllers);

  const CenterStart = () => {
    return (
      <>
        {`<div align='center'>`}
        <br />
        <br />
      </>
    );
  };

  const CenterEnd = () => {
    return (
      <>
        <br />
        <br />
        {`</div>`}
      </>
    );
  };

  const startTable = () => {
    const languageLabel = images.updatedStateTechnology;
    const table = controllers.isTable;

    if (languageLabel.length > 0 && languageLabel.length <= 10 && table) {
      return (
        <>
          <br />
          <br />
          {`<table>`}
          <br />
          {`<tr>`}
          <br />
        </>
      );
    }

    return null;
  };

  const endTable = () => {
    const languageLabel = images.updatedStateTechnology;
    const table = controllers.isTable;

    if (languageLabel.length > 0 && languageLabel.length <= 10 && table) {
      return (
        <>
          <br />
          {`</tr>`}
          <br />
          {`</table>`}
          <br />
        </>
      );
    }

    return null;
  };

  const MainImage = () => {
    const image = images.mainImage;

    if (image) {
      return (
        <>
          {`
          <img
            src=${image}
            alt="logo"
            width=${size.mainImageWidth || ""}
            height=${size.mainImageHeight || ""}
          />
         `}
          <br />
          <br />
        </>
      );
    }
    return null;
  };

  const MainTopic = () => {
    const mainTopic = readmeRow.firstRow;
    if (mainTopic) {
      return (
        <>
          {`<h1>${mainTopic}</h1>`}
          <br />
        </>
      );
    }
    return null;
  };

  const SubTopic = () => {
    const subTopic = readmeRow.secondRow;

    if (subTopic) {
      return (
        <>
          {`<p>${subTopic}</p>`}
          <br />
          <br />
        </>
      );
    }

    return null;
  };

  const Maintained = () => {
    const maintained = displayBadges.maintained;

    if (maintained) {
      return (
        <>
          {`<img src="https://img.shields.io/badge/Maintained-Yes-indigo" />`}
          <br />
        </>
      );
    }

    return null;
  };

  const WebsiteUpDown = () => {
    const upDown = displayBadges.websiteUpDown;
    const link = displayBadges.websiteLink;

    if (upDown) {
      return (
        <>
          {`<a href=${link}>
              <img src="https://img.shields.io/website-up-down-green-red/http/monip.org.svg" />
            </a>`}
          <br />
        </>
      );
    }
    return null;
  };

  const Forks = () => {
    const isFork = displayBadges.forks;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          {`<img
            src=https://img.shields.io/github/forks/${user}/${repoName}.svg
          />`}
          <br />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const Stars = () => {
    const isFork = displayBadges.stars;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          {`<img
            src=https://img.shields.io/github/stars/${user}/${repoName}.svg
          />`}
          <br />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const Issues = () => {
    const isFork = displayBadges.issues;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          {`<img
            src=https://img.shields.io/github/issues/${user}/${repoName}
          />`}
          <br />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const LastCommit = () => {
    const isFork = displayBadges.lastCommit;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (isFork && user) {
      return (
        <>
          {`<img
            src=https://img.shields.io/github/last-commit/${user}/${repoName}
          />`}
          <br />
        </>
      );
    } else {
      if (!user) {
        return null;
      }
    }

    return null;
  };

  const Documentation = () => {
    const link = displayBadges.websiteLink;
    const user = gitHubDetail.gitUserName;
    const repoName = gitHubDetail.gitRepoName;

    if (user && repoName) {
      return (
        <>
          {`<h4>
            {link && <a href=${link}>View Demo</a>}
            <span> · </span>
            <a href="https://github.com/${user}/${repoName}/blob/master/README.md">
              Documentation
            </a>
            <span> · </span>
            <a href="https://github.com/${user}/${repoName}/issues">
              Report Bug
            </a>
            <span> · </span>
            <a href="https://github.com/${user}/${repoName}/issues">
              Request Feature
            </a>
          </h4>`}
          <br />
        </>
      );
    } else {
      if (!user) {
        return null;
      } else if (!repoName) {
        return null;
      }
    }
    return null;
  };

  const MKLanguages = () => {
    const languageLabel = images.updatedStateTechnology;
    const table = controllers.isTable;

    if (languageLabel.length > 0) {
      if (table) {
        if (languageLabel.length <= 10) {
          return (
            <>
              <br />
              {languageLabel.map((language, index) => (
                <div key={index}>
                  {`<td>
                    <img src=${language} alt="name" width="30" />
                    </td>`}
                  <br />
                </div>
              ))}
              <br />
            </>
          );
        } else {
          return (
            <>
              <br />
              {languageLabel.map((language, index) => (
                <div key={index}>
                  {`<img src=${language} alt="name" width="30" />`}
                  <br />
                </div>
              ))}
              <br />
            </>
          );
        }
      } else {
        return (
          <>
            <br />
            {languageLabel.map((language, index) => (
              <div key={index}>
                {`<img src=${language} alt="name" width="30" />`}
                <br />
              </div>
            ))}
            <br />
          </>
        );
      }
    } else {
      return null;
    }

    return null;
  };

  const DemoProjectAssets = () => {
    var projectImageLink = images.demoImage;
    const link = displayBadges.websiteLink;

    projectImageLink = projectImageLink.filter(function (element) {
      return element !== "";
    });

    if (projectImageLink.length > 0) {
      return (
        <>
          <br />
          <br />
          {`## :star2: About the Project`}
          <br />
          {`### :camera: Screenshots`}
          <br />
          {projectImageLink.map((image, index) => (
            <div key={index}>
              {`<div align="center">
                <a href="${link}"><img  src="${image}" alt='image' width='800'/></a>
              </div>`}
            </div>
          ))}
          <br />
        </>
      );
    }

    return null;
  };

  return {
    MainImage,
    MainTopic,
    SubTopic,
    Maintained,
    WebsiteUpDown,
    Forks,
    Stars,
    Issues,
    LastCommit,
    CenterStart,
    CenterEnd,
    Documentation,
    MKLanguages,
    startTable,
    endTable,
    DemoProjectAssets,
  };
};

export default MdContent;
