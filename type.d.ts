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
  isTable: string;
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

export interface Technologies {
  label: string;
  image: string;
}

export interface SkillsType {
  automation: Technologies[];
  backend: Technologies[];
  backendService: Technologies[];
  database: Technologies[];
  devops: Technologies[];
  engines: Technologies[];
  framework: Technologies[];
  frontend: Technologies[];
  languages: Technologies[];
  mL: Technologies[];
  mobile: Technologies[];
  other: Technologies[];
  software: Technologies[];
  static: Technologies[];
  testing: Technologies[];
  visualization: Technologies[];
}

export interface ProfileAtomDetails {
  profileTitle: string;
  profileName: string;
  profileSubTitle: string;
  working: string;
  workingName: string;
  workingLink: string;
  collaborate: string;
  collaborateName: string;
  collaborateLink: string;
  learning: string;
  learningName: string;
  about: string;
  aboutName: string;
  reach: string;
  reachName: string;
  myProjects: string;
  myProjectsName: string;
  articles: string;
  articlesName: string;
  experiences: string;
  experiencesName: string;
  fact: string;
  factName: string;
  help: string;
  helpName: string;
  helpLink: string;
  skills: string[];
  github: string;
  dev: string;
  codeSandbox: string;
  linkedin: string;
  facebook: string;
  dribbble: string;
  hashnode: string;
  youtube: string;
  hackerrank: string;
  leetCode: string;
  hackerearth: string;
  discord: string;
  twitter: string;
  codePen: string;
  stackoverflow: string;
  kaggle: string;
  instagram: string;
  behance: string;
  medium: string;
  codeChef: string;
  codeforces: string;
  topCoder: string;
  GFG: string;
  RSS: string;
  visitors: boolean;
  trophy: boolean;
  trophyTheme: string;
  stats: boolean;
  starsTheme: string;
  skillsCard: boolean;
  skillCardTheme: string;
  skillCardLayout: string;
  streak: boolean;
  streakTheme: string;
  buymeacoffee: string;
  koFi: string;
}
