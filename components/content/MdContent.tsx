"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { middleControllers } from "@/atom/middleController";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { gitTechStack } from "@/atom/techStack";
import { useRecoilState } from "recoil";

const MdContent = () => {
  const [gitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow] = useRecoilState(readmeRows);
  const [images] = useRecoilState(gitImages);
  const [size] = useRecoilState(gitImagesSizes);
  const [displayBadges] = useRecoilState(gitBadge);
  const [controllers] = useRecoilState(middleControllers);
  const [gitHubTechStack] = useRecoilState(gitTechStack);

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
                    <a href="#"><img src=${language} alt="name" width="30" /></a>
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
                  {`<a href="#"><img src=${language} alt="name" width="30" /></a>`}
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
                {`<a href="#"><img src=${language} alt="name" width="30" /></a>`}
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

  const TechStackClient = () => {
    const clientData = gitHubTechStack.client;

    if (clientData.length > 0) {
      return (
        <>
          <br />
          {`### :space_invader: Tech Stack`}
          <br />
          {`<details>
              <summary>Client</summary>
              <ul>`}
          {clientData.map((client: any, index) => (
            <div key={index}>
              {`<li><a href="${client.clientUrl}">${client.clientName}</a></li>`}
            </div>
          ))}
          {`</ul>
            </details>`}
        </>
      );
    }

    return null;
  };

  const TechStackServer = () => {
    const teachData = gitHubTechStack.server;

    if (teachData.length > 0) {
      return (
        <>
          <br />
          {`<details>
              <summary>Server</summary>
              <ul>`}
          {teachData.map((server: any, index) => (
            <div key={index}>
              {`<li><a href="${server.serverUrl}">${server.serverName}</a></li>`}
            </div>
          ))}
          {`</ul>
            </details>`}
        </>
      );
    }

    return null;
  };

  const TechStackDatabase = () => {
    const teachData = gitHubTechStack.database;

    if (teachData.length > 0) {
      return (
        <>
          <br />
          {`<details>
              <summary>Database</summary>
              <ul>`}
          {teachData.map((database: any, index) => (
            <div key={index}>
              {`<li><a href="${database.databaseUrl}">${database.databaseName}</a></li>`}
            </div>
          ))}
          {`</ul>
            </details>`}
        </>
      );
    }

    return null;
  };

  const TechStackDevOps = () => {
    const teachData = gitHubTechStack.devOps;

    if (teachData.length > 0) {
      return (
        <>
          <br />
          {`<details>
              <summary>DevOps</summary>
              <ul>`}
          {teachData.map((devOps: any, index) => (
            <div key={index}>
              {`<li><a href="${devOps.devOpsUrl}">${devOps.devOpsName}</a></li>`}
            </div>
          ))}
          {`</ul>
            </details>`}
        </>
      );
    }

    return null;
  };

  const Features = () => {
    const featuresData = gitHubTechStack.features;

    if (featuresData.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :dart: Features`}
          <br />
          {featuresData.map((feature: any, index) => (
            <div key={index}>{`- ${feature.featuresValue}`}</div>
          ))}
        </>
      );
    }
    return null;
  };

  const ColorReference = () => {
    const primaryColor = readmeRow.primaryColor;
    const secondaryColor = readmeRow.secondaryColor;
    const accentColor = readmeRow.accentColor;
    const textColor = readmeRow.textColor;

    if (primaryColor || secondaryColor || accentColor || textColor) {
      return (
        <>
          <br />
          <br />
          {`### :art: Color Reference`}
          <br />
          {`| Color           | Hex                                                              |`}
          <br />
          {`| --------------- | ---------------------------------------------------------------- |`}
        </>
      );
    }
    return null;
  };

  const PrimaryColor = () => {
    const primaryColor = readmeRow.primaryColor;

    if (primaryColor) {
      return (
        <>
          <br />
          {`| Primary Color   | ![${primaryColor}](https://via.placeholder.com/10/${primaryColor.replace(
            "#",
            ""
          )}?text=+) ${primaryColor} |`}
        </>
      );
    }

    return null;
  };

  const SecondaryColor = () => {
    const secondaryColor = readmeRow.secondaryColor;

    if (secondaryColor) {
      return (
        <>
          <br />
          {`| Secondary Color   | ![${secondaryColor}](https://via.placeholder.com/10/${secondaryColor.replace(
            "#",
            ""
          )}?text=+) ${secondaryColor} |`}
        </>
      );
    }

    return null;
  };

  const AccentColor = () => {
    const accentColor = readmeRow.accentColor;

    if (accentColor) {
      return (
        <>
          <br />
          {`| Accent Color   | ![${accentColor}](https://via.placeholder.com/10/${accentColor.replace(
            "#",
            ""
          )}?text=+) ${accentColor} |`}
        </>
      );
    }

    return null;
  };

  const TextColor = () => {
    const textColor = readmeRow.textColor;

    if (textColor) {
      return (
        <>
          <br />
          {`| Text Color   | ![${textColor}](https://via.placeholder.com/10/${textColor.replace(
            "#",
            ""
          )}?text=+) ${textColor} |`}
        </>
      );
    }

    return null;
  };

  const EnvironmentVariables = () => {
    const environmentVariables = gitHubTechStack.environmentVariables;

    if (environmentVariables.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :key: Environment Variables`}
          <br />
          {`To run this project, you will need to add the following environment variables to your .env file`}
          <br />
          {environmentVariables.map((envData: any, index) => (
            <div key={index}>
              `{`${envData.envVariables}`}`
              <br />
              <br />
            </div>
          ))}
        </>
      );
    }
    return null;
  };

  const GettingStarted = () => {
    const prerequisitesValues = gitHubTechStack.prerequisites;

    if (prerequisitesValues) {
      return (
        <>
          <br />
          <br />
          {`## 	:toolbox: Getting Started`}
        </>
      );
    }
    return null;
  };

  const Prerequisites = () => {
    const prerequisitesValues = gitHubTechStack.prerequisites;

    if (prerequisitesValues.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :bangbang: Prerequisites`}
          <br />
          {prerequisitesValues.map((prerequisite: any, index) => (
            <div key={index}>
              {prerequisite.prerequisitesValue && (
                <>
                  -{" "}
                  {`${prerequisite.prerequisitesValue}${
                    prerequisite.url && (
                      <>{`<a href="${prerequisite.url}"> HERE</a>`}</>
                    )
                  }`}
                </>
              )}
              {prerequisite.code && (
                <>
                  <br />
                  ```bash
                  <br />
                  {`${prerequisite.code}`}
                  <br />
                  ```
                </>
              )}
              <br />
            </div>
          ))}
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
    TechStackClient,
    TechStackServer,
    TechStackDatabase,
    TechStackDevOps,
    Features,
    ColorReference,
    PrimaryColor,
    SecondaryColor,
    AccentColor,
    TextColor,
    EnvironmentVariables,
    GettingStarted,
    Prerequisites,
  };
};

export default MdContent;
