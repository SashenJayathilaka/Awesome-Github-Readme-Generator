"use client";

import { gitBadge } from "@/atom/displayBadges";
import { gitHubDetails } from "@/atom/gitHubDetails";
import { gitImages } from "@/atom/images";
import { readmeRows } from "@/atom/readmeRow";
import { gitImagesSizes } from "@/atom/size";
import { gitTechStack } from "@/atom/techStack";
import { gitTechnologies } from "@/atom/technology";
import { boxLabel } from "@/lib/boxLabel";
import { Checkbox } from "@mui/material";
import { useRecoilState } from "recoil";

const MdPreview = () => {
  const [gitHubDetail] = useRecoilState(gitHubDetails);
  const [readmeRow] = useRecoilState(readmeRows);
  const [images] = useRecoilState(gitImages);
  const [size] = useRecoilState(gitImagesSizes);
  const [displayBadges] = useRecoilState(gitBadge);
  const [gitHubTechStack] = useRecoilState(gitTechStack);

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

  const MdTechStackClient = () => {
    const clientData = gitHubTechStack.client;

    if (clientData.length > 0) {
      return (
        <>
          <h1 className="text-xl font-medium">👾 Tech Stack</h1>
          <details>
            <summary>Client</summary>
            <ul>
              {clientData.map((client: any, index) => (
                <div key={index}>
                  <li>
                    <a href={client.clientUrl}>{client.clientName}</a>
                  </li>
                </div>
              ))}
            </ul>
          </details>
        </>
      );
    }

    return null;
  };

  const MdTechStackServer = () => {
    const teachData = gitHubTechStack.server;

    if (teachData.length > 0) {
      return (
        <>
          <details>
            <summary>Server</summary>
            <ul>
              {teachData.map((server: any, index) => (
                <div key={index}>
                  <li>
                    <a href={server.serverUrl}>{server.serverName}</a>
                  </li>
                </div>
              ))}
            </ul>
          </details>
        </>
      );
    }

    return null;
  };

  const MdTechStackDatabase = () => {
    const teachData = gitHubTechStack.database;

    if (teachData.length > 0) {
      return (
        <>
          <details>
            <summary>Database</summary>
            <ul>
              {teachData.map((database: any, index) => (
                <div key={index}>
                  <li>
                    <a href={database.databaseUrl}>{database.databaseName}</a>
                  </li>
                </div>
              ))}
            </ul>
          </details>
        </>
      );
    }

    return null;
  };

  const MdTechStackDevOps = () => {
    const teachData = gitHubTechStack.devOps;

    if (teachData.length > 0) {
      return (
        <>
          <details>
            <summary>DevOps</summary>
            <ul>
              {teachData.map((devOps: any, index) => (
                <div key={index}>
                  <li>
                    <a href={devOps.devOpsUrl}>{devOps.devOpsName}</a>
                  </li>
                </div>
              ))}
            </ul>
          </details>
        </>
      );
    }

    return null;
  };

  const MdFeatures = () => {
    const featuresData = gitHubTechStack.features;

    if (featuresData.length > 0) {
      return (
        <>
          <h1 className="text-xl font-medium">🎯 Features</h1>
          {featuresData.map((feature: any, index) => (
            <div key={index}>
              <p>{feature.featuresValue}</p>
            </div>
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
          <h1 className="text-xl font-medium">🎨 Color Reference</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Color</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {primaryColor && (
                <tr>
                  <td>Primary Color</td>
                  <td>
                    <img
                      src={`https://via.placeholder.com/10/${primaryColor.replace(
                        "#",
                        ""
                      )}?text=+`}
                    />
                  </td>
                </tr>
              )}
              {secondaryColor && (
                <tr>
                  <td>Secondary Color</td>
                  <td>
                    <img
                      src={`https://via.placeholder.com/10/${secondaryColor.replace(
                        "#",
                        ""
                      )}?text=+`}
                    />
                  </td>
                </tr>
              )}
              {accentColor && (
                <tr>
                  <td>Accent Color</td>
                  <td>
                    <img
                      src={`https://via.placeholder.com/10/${accentColor.replace(
                        "#",
                        ""
                      )}?text=+`}
                    />
                  </td>
                </tr>
              )}
              {textColor && (
                <tr>
                  <td>Text Color</td>
                  <td>
                    <img
                      src={`https://via.placeholder.com/10/${textColor.replace(
                        "#",
                        ""
                      )}?text=+`}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
          <h1 className="text-xl font-medium">🔑 Environment Variables</h1>
          <p>
            To run this project, you will need to add the following environment
            variables to your .env file
          </p>
          <br />
          <div className="grid grid-cols-1">
            {environmentVariables.map((envData: any, index) => (
              <div key={index} className="bg-gray-50 px-2 py-2 rounded-md">
                `{`${envData.envVariables}`}`
              </div>
            ))}
          </div>
        </>
      );
    }
    return null;
  };

  const GettingStarted = () => {
    const prerequisitesValues = gitHubTechStack.prerequisites;

    if (prerequisitesValues.length > 0) {
      return (
        <>
          <h1 className="text-xl font-medium">🧰 Getting Started</h1>
          <br />
          <br />
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
          <h1 className="text-xl font-medium">‼️ Prerequisites</h1>
          <br />
          {prerequisitesValues.map((prerequisite: any, index) => (
            <div key={index}>
              {prerequisite.url ? (
                <>
                  {prerequisite.prerequisitesValue && (
                    <>
                      <p>
                        {prerequisite.prerequisitesValue}
                        <a href={prerequisite.url}> Here</a>
                      </p>
                    </>
                  )}
                </>
              ) : (
                <>
                  {prerequisite.prerequisitesValue && (
                    <p>{prerequisite.prerequisitesValue}</p>
                  )}
                </>
              )}
              {prerequisite.code && (
                <>
                  <p className="bg-gray-500 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
                    {prerequisite.code}
                  </p>
                </>
              )}
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
          <h1 className="text-xl font-medium">⚙️ Installation</h1>
          <br />
          {installation.map((install: any, index) => (
            <div key={index}>
              {install.installationValue && (
                <>
                  <p>{install.installationValue}</p>
                </>
              )}
              {install.installationCommand && (
                <div className="flex justify-start gap-2 items-center">
                  <p className="bg-gray-500 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
                    {install.installationCommand}
                  </p>
                </div>
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
          <h1 className="text-xl font-medium">🧪 Running Tests</h1>
          <br />
          {runningTests.map((data: any, index) => (
            <div key={index}>
              {data.runningTestsValue && (
                <>
                  <p>{data.runningTestsValue}</p>
                </>
              )}
              {data.runningTestsCommand && (
                <>
                  <div className="flex justify-start gap-2 items-center">
                    <p className="bg-gray-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
                      {data.runningTestsCommand}
                    </p>
                  </div>
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
          <h1 className="text-xl font-medium">🏃 Run Locally</h1>
          <br />
          <p>Clone the project</p>
          <br />
          <div className="flex justify-start gap-2 items-center">
            <p className="bg-gray-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
              {`${repoUrl}`}
            </p>
          </div>
          <br />
          {runningLocally.map((data: any, index) => (
            <div key={index}>
              {data.runningValue && (
                <>
                  <p>{data.runningValue}</p>
                </>
              )}
              {data.runningCommand && (
                <>
                  <div className="flex justify-start gap-2 items-center">
                    <p className="bg-gray-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
                      {data.runningCommand}
                    </p>
                  </div>
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
          <h1 className="text-xl font-medium">🚩 Deployment</h1>
          <br />
          {deployment.map((data: any, index) => (
            <div key={index}>
              {data.deploymentValue && (
                <>
                  <p>{data.deploymentValue}</p>
                </>
              )}
              {data.deploymentCommand && (
                <>
                  <div className="flex justify-start gap-2 items-center">
                    <p className="bg-gray-300 px-2.5 py-2 rounded-md w-auto items-center cursor-pointer text-center">
                      {data.deploymentCommand}
                    </p>
                  </div>
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
          <h1 className="text-xl font-medium">🧭 Roadmap</h1>
          <br />
          {roadMap.map((data: any, index) => (
            <div key={index}>
              {data.roadMapCheck === "do" ? (
                <div className="flex justify-start gap-2 items-center">
                  <Checkbox
                    {...boxLabel}
                    color="default"
                    disabled
                    checked
                    sx={{ color: "#fff" }}
                  />
                  <p>{data.roadMapValue}</p>
                </div>
              ) : (
                <div className="flex justify-start gap-2 items-center">
                  <Checkbox
                    {...boxLabel}
                    color="default"
                    disabled
                    sx={{ color: "#fff" }}
                  />
                  <p>{data.roadMapValue}</p>
                </div>
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
          <h1 className="text-xl font-medium">👋 Contributing</h1>
          <br />
          <a href={`${repoUrl}/graphs/contributors`}>
            <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
          </a>
          <br />
          <p>Contributions are always welcome!</p>
          <br />
          <p>see contributing.md for ways to get started</p>
        </>
      );
    }

    return null;
  };

  const CodeOfConduct = () => {
    const contributing = readmeRow.codeOfConduct;
    const repoUrl = gitHubDetail.gitRepoUrl;

    if (contributing === "do" && repoUrl) {
      return (
        <>
          <h1 className="text-xl font-medium">📜 Code of Conduct</h1>
          <br />
          <p>
            Please read the
            <a href={`${repoUrl}/blob/master/CODE_OF_CONDUCT.md`}> Here</a>
          </p>
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
    MdTechStackClient,
    MdTechStackServer,
    MdTechStackDatabase,
    MdTechStackDevOps,
    MdFeatures,
    ColorReference,
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
  };
};

export default MdPreview;
