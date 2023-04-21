export interface GitHubTechStack {
  client: string[];
  server: string[];
  database: string[];
  devOps: string[];
  features: string[];
  environmentVariables: string[];
  prerequisites: string[];
  installation: string[];
  runningTests: string[];
  runLocally: string[];
  deployment: string[];
  roadMap: string[];
  faqSection: string[];
  acknowledgements: string[];
}

export interface GitHubDetail {
  gitUserName: string;
  gitRepoName: string;
  gitRepoUrl: string;
  name: string;
  twitter: string;
  email: string;
}

export interface ReadmeRow {
  firstRow: string;
  secondRow: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  contributing: string;
  codeOfConduct: string;
  licenseValue: string;
}

export interface GitHubImages {
  mainImage: string;
  demoImage: string[]; // done
  updatedStateTechnology: string[]; // done
}

export interface GitHubImagesSize {
  mainImageWidth: string;
  mainImageHeight: string;
}

export interface GitBadges {
  websiteUpDown: string;
  websiteLink: string;
  maintained: string;
  forks: string;
  stars: string;
  issues: string;
  lastCommit: string;
}

export interface MiddleController {
  isTable: string;
  limitError: string;
  fieldEmptyError: string;
}
