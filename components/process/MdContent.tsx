"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
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
  const [gitHubTechStack] = useRecoilState(gitTechStack);

  const CenterStart = () => {
    const image = images.mainImage;
    const mainTopic = readmeRow.firstRow;
    const subTopic = readmeRow.secondRow;
    const maintained = displayBadges.maintained;
    const upDown = displayBadges.websiteUpDown;
    const link = displayBadges.websiteLink;
    const isFork = displayBadges.forks;

    if (
      image ||
      mainTopic ||
      subTopic ||
      maintained ||
      upDown ||
      link ||
      isFork
    ) {
      return (
        <>
          {`<div align='center'>`}
          <br />
          <br />
        </>
      );
    }
    return null;
  };

  const CenterEnd = () => {
    const image = images.mainImage;
    const mainTopic = readmeRow.firstRow;
    const subTopic = readmeRow.secondRow;
    const maintained = displayBadges.maintained;
    const upDown = displayBadges.websiteUpDown;
    const link = displayBadges.websiteLink;
    const isFork = displayBadges.forks;

    if (
      image ||
      mainTopic ||
      subTopic ||
      maintained ||
      upDown ||
      link ||
      isFork
    ) {
      return (
        <>
          <br />
          <br />
          {`</div>`}
        </>
      );
    }
    return null;
  };

  const TableOfContents = () => {
    const clientData = gitHubTechStack.client;
    const teachDataO = gitHubTechStack.server;
    const teachDataT = gitHubTechStack.database;
    const teachData = gitHubTechStack.devOps;
    const featuresData = gitHubTechStack.features;
    const primaryColor = readmeRow.primaryColor;
    const secondaryColor = readmeRow.secondaryColor;
    const accentColor = readmeRow.accentColor;
    const textColor = readmeRow.textColor;
    const environmentVariables = gitHubTechStack.environmentVariables;
    const prerequisitesValues = gitHubTechStack.prerequisites;
    const installation = gitHubTechStack.installation;
    const runningTests = gitHubTechStack.runningTests;
    const runningLocally = gitHubTechStack.runLocally;
    const deployment = gitHubTechStack.deployment;
    const roadMap = gitHubTechStack.roadMap;
    const contributingO = readmeRow.contributing;
    const contributing = readmeRow.codeOfConduct;
    const faqSection = gitHubTechStack.faqSection;
    const license = readmeRow.licenseValue;
    const name = gitHubDetail.name;
    const twitter = gitHubDetail.twitter;
    const email = gitHubDetail.email;
    const acknowledgements = gitHubTechStack.acknowledgements;

    var projectImageLink = images.demoImage;
    projectImageLink = projectImageLink.filter(function (element) {
      return element !== "";
    });

    if (
      projectImageLink.length > 0 ||
      clientData.length > 0 ||
      teachData.length > 0 ||
      featuresData.length > 0 ||
      teachDataO.length > 0 ||
      teachDataT.length > 0 ||
      featuresData.length > 0 ||
      primaryColor ||
      secondaryColor ||
      accentColor ||
      textColor ||
      environmentVariables.length > 0 ||
      prerequisitesValues.length > 0 ||
      installation.length > 0 ||
      runningTests.length > 0 ||
      runningLocally.length > 0 ||
      deployment.length > 0 ||
      roadMap.length > 0 ||
      contributing === "do" ||
      contributingO === "do" ||
      faqSection.length > 0 ||
      license === "do" ||
      name ||
      twitter ||
      email ||
      acknowledgements.length > 0
    ) {
      return (
        <>
          <br />
          <br />
          {`# :notebook_with_decorative_cover: Table of Contents`}
          <br />
          <br />
          {`- [About the Project](#star2-about-the-project)`}
          <br />
          {prerequisitesValues.length > 0 ||
            installation.length > 0 ||
            runningTests.length > 0 ||
            runningLocally.length > 0 ||
            (deployment.length > 0 && (
              <>
                {`- [Getting Started](#toolbox-getting-started)`}
                <br />
              </>
            ))}

          {roadMap.length > 0 && (
            <>
              {`- [Roadmap](#compass-roadmap)`}
              <br />
            </>
          )}

          {contributing === "do" ||
            (contributingO === "do" && (
              <>
                {`- [Contributing](#wave-contributing)`}
                <br />
              </>
            ))}

          {faqSection.length > 0 && (
            <>
              {`- [FAQ](#grey_question-faq)`}
              <br />
            </>
          )}

          {license === "do" && (
            <>
              {`- [License](#warning-license)`}
              <br />
            </>
          )}

          {(name || twitter || email) && (
            <>
              {`- [Contact](#handshake-contact)`}
              <br />
            </>
          )}

          {acknowledgements.length > 0 && (
            <>
              {`- [Acknowledgements](#gem-acknowledgements)`}
              <br />
            </>
          )}
        </>
      );
    }

    return null;
  };

  const startTable = () => {
    const languageLabel = images.updatedStateTechnology;
    const table = gitHubDetail.isTable;

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
    const table = gitHubDetail.isTable;

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
            ${link && `<a href=${link}>View Demo</a>`}
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
    const table = gitHubDetail.isTable;

    if (languageLabel.length > 0) {
      if (table) {
        if (languageLabel.length <= 10) {
          return (
            <>
              <br />
              {languageLabel.map((language: any, index) => (
                <div key={index}>
                  {`<td>
                    <a href="#"><img src=${language.image} alt="${language.label}" width="30" /></a>
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
              {languageLabel.map((language: any, index) => (
                <div key={index}>
                  {`<a href="#"><img src=${language.image} alt="${language.label}" width="30" /></a>`}
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
            {languageLabel.map((language: any, index) => (
              <div key={index}>
                {`<a href="#"><img src=${language.image} alt="${language.label}" width="30" /></a>`}
                <br />
              </div>
            ))}
            <br />
          </>
        );
      }
    }

    return null;
  };

  const AboutProject = () => {
    return (
      <>
        <br />
        <br />
        {`## :star2: About the Project`}
      </>
    );
  };

  const DemoProjectAssets = () => {
    const projectImageLink = images.demoImage;
    const link = displayBadges.websiteLink;

    if (projectImageLink.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :camera: Screenshots`}
          <br />
          {projectImageLink.map((image: any, index) => (
            <div key={index}>
              {`<div align="center">
                <a href="${link}"><img  src="${image.demoImageLink}" alt='image' width='800'/></a>
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
    const installation = gitHubTechStack.installation;
    const runningTests = gitHubTechStack.runningTests;
    const runningLocally = gitHubTechStack.runLocally;
    const deployment = gitHubTechStack.deployment;

    if (
      prerequisitesValues.length > 0 ||
      installation.length > 0 ||
      runningTests.length > 0 ||
      runningLocally.length > 0 ||
      deployment.length > 0
    ) {
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
          <br />
          {prerequisitesValues.map((prerequisite: any, index) => (
            <div key={index}>
              {prerequisite.url ? (
                <>
                  {prerequisite.prerequisitesValue && (
                    <>
                      - {`${prerequisite.prerequisitesValue}`}
                      {`<a href="${prerequisite.url}"> Here</a>`}
                    </>
                  )}
                </>
              ) : (
                <>
                  {prerequisite.prerequisitesValue && (
                    <>- {`${prerequisite.prerequisitesValue}`}</>
                  )}
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

  const Installation = () => {
    const installation = gitHubTechStack.installation;

    if (installation.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :gear: Installation`}
          <br />
          <br />
          {installation.map((install: any, index) => (
            <div key={index}>
              {install.installationValue && (
                <>{`${install.installationValue}`}</>
              )}
              {install.installationCommand && (
                <>
                  <br />
                  ```bash
                  <br />
                  {`${install.installationCommand}`}
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

  const RunningTests = () => {
    const runningTests = gitHubTechStack.runningTests;

    if (runningTests.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :test_tube: Running Tests`}
          <br />
          <br />
          {runningTests.map((data: any, index) => (
            <div key={index}>
              {data.runningTestsValue && <>{`${data.runningTestsValue}`}</>}
              {data.runningTestsCommand && (
                <>
                  <br />
                  ```bash
                  <br />
                  {`${data.runningTestsCommand}`}
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

  const RunLocally = () => {
    const runningLocally = gitHubTechStack.runLocally;
    const repoUrl = gitHubDetail.gitRepoUrl;

    if (runningLocally.length > 0 && repoUrl) {
      return (
        <>
          <br />
          <br />
          {`### :running: Run Locally`}
          <br />
          <br />
          {`Clone the project`}
          <br />
          <br />
          ```bash
          <br />
          {`${repoUrl}`}
          <br />
          ```
          <br />
          {runningLocally.map((data: any, index) => (
            <div key={index}>
              {data.runningValue && <>{`${data.runningValue}`}</>}
              {data.runningCommand && (
                <>
                  <br />
                  ```bash
                  <br />
                  {`${data.runningCommand}`}
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

  const Deployment = () => {
    const deployment = gitHubTechStack.deployment;

    if (deployment.length > 0) {
      return (
        <>
          <br />
          <br />
          {`### :triangular_flag_on_post: Deployment`}
          <br />
          <br />
          {deployment.map((data: any, index) => (
            <div key={index}>
              {data.deploymentValue && <>{`${data.deploymentValue}`}</>}
              {data.deploymentCommand && (
                <>
                  <br />
                  ```bash
                  <br />
                  {`${data.deploymentCommand}`}
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

  const RoadMap = () => {
    const roadMap = gitHubTechStack.roadMap;

    if (roadMap.length > 0) {
      return (
        <>
          <br />
          <br />
          {`## :compass: Roadmap`}
          <br />
          <br />
          {roadMap.map((data: any, index) => (
            <div key={index}>
              {data.roadMapCheck === "do" ? (
                <> {`* [x] ${data.roadMapValue}`}</>
              ) : (
                <> {`* [ ] ${data.roadMapValue}`}</>
              )}
            </div>
          ))}
        </>
      );
    }

    return null;
  };

  const Contributing = () => {
    const contributing = readmeRow.contributing;
    const repoUrl = gitHubDetail.gitRepoUrl;

    if (contributing === "do" && repoUrl) {
      return (
        <>
          <br />
          <br />
          {`## :wave: Contributing`}
          <br />
          <br />
          {`<a href="${repoUrl}/graphs/contributors">
              <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
            </a>`}
          <br />
          <br />
          {`Contributions are always welcome!`}
          <br />
          <br />
          {`see`} `{`contributing.md`}`{` for ways to get started`}
        </>
      );
    }

    return null;
  };

  const CodeOfConduct = () => {
    const contributing = readmeRow.codeOfConduct;
    const contributingUpper = readmeRow.contributing;
    const repoUrl = gitHubDetail.gitRepoUrl;

    if (contributing === "do" && repoUrl) {
      return (
        <>
          {!contributingUpper && (
            <>
              <br />
              <br />
              {`## :wave: Contributing`}
            </>
          )}
          <br />
          <br />
          {`### :scroll: Code of Conduct`}
          <br />
          <br />
          {`Please read the [Code of Conduct](${repoUrl}/blob/master/CODE_OF_CONDUCT.md)`}
        </>
      );
    }

    return null;
  };

  const FaqSection = () => {
    const faqSection = gitHubTechStack.faqSection;

    if (faqSection.length > 0) {
      return (
        <>
          <br />
          <br />
          {`## :grey_question: FAQ`}
          <br />
          <br />
          {faqSection.map((data: any, index) => (
            <div key={index}>
              - {`${data.question}`}
              <br />
              {` - `}
              {`${data.answers}`}
            </div>
          ))}
        </>
      );
    }

    return null;
  };

  const License = () => {
    const license = readmeRow.licenseValue;

    if (license === "do") {
      return (
        <>
          <br />
          <br />
          {`## :warning: License`}
          <br />
          <br />
          {`Distributed under the no License. See LICENSE.txt for more information.`}
        </>
      );
    }

    return null;
  };

  const Contact = () => {
    const name = gitHubDetail.name;
    const twitter = gitHubDetail.twitter;
    const email = gitHubDetail.email;
    const projectLink = gitHubDetail.gitRepoUrl;

    if (name || twitter || email) {
      return (
        <>
          <br />
          <br />
          {`## :handshake: Contact`}
          <br />
          <br />
          {`${name && name} - ${twitter && `[@twitter_handle](${twitter})`} - ${
            email && email
          }`}
          <br />
          <br />
          {`${projectLink && `Project Link: [${projectLink}](${projectLink})`}`}
        </>
      );
    }

    return null;
  };

  const Acknowledgements = () => {
    const acknowledgements = gitHubTechStack.acknowledgements;

    if (acknowledgements.length > 0) {
      return (
        <>
          <br />
          <br />
          {`## :gem: Acknowledgements`}
          <br />
          <br />
          {`Use this section to mention useful resources and libraries that you have used in your projects.`}
          <br />
          <br />
          {acknowledgements.map((data: any, index) => (
            <div
              key={index}
            >{`- [${data.acknowledgementsValue}](${data.url})`}</div>
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
    Installation,
    RunningTests,
    RunLocally,
    Deployment,
    RoadMap,
    Contributing,
    CodeOfConduct,
    FaqSection,
    License,
    Contact,
    Acknowledgements,
    TableOfContents,
    AboutProject,
  };
};

export default MdContent;
