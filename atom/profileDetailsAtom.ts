import { atom } from "recoil";

export type profileAtomDetails = {
  [x: string]: any;
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
};

const defaultPostState: profileAtomDetails = {
  profileTitle: "Hi 👋, I'm",
  profileName: "",
  profileSubTitle: "",
  working: "🔭 I’m currently working on",
  workingName: "",
  workingLink: "",
  collaborate: "👯 I’m looking to collaborate on",
  collaborateName: "",
  collaborateLink: "",
  learning: "🌱 I’m currently learning",
  learningName: "",
  about: "💬 Ask me about",
  aboutName: "",
  reach: "📫 How to reach me",
  reachName: "",
  myProjects: "👨‍💻 All of my projects are available at",
  myProjectsName: "",
  articles: "📝 I regularly write articles on",
  articlesName: "",
  experiences: "📄 Know about my experiences",
  experiencesName: "",
  fact: "⚡ Fun fact",
  factName: "",
  help: "🤝 I’m looking for help with",
  helpName: "",
  helpLink: "",
  skills: [],
  github: "",
  dev: "",
  codeSandbox: "",
  linkedin: "",
  facebook: "",
  dribbble: "",
  hashnode: "",
  youtube: "",
  hackerrank: "",
  leetCode: "",
  hackerearth: "",
  discord: "",
  twitter: "",
  codePen: "",
  stackoverflow: "",
  kaggle: "",
  instagram: "",
  behance: "",
  medium: "",
  codeChef: "",
  codeforces: "",
  topCoder: "",
  GFG: "",
  RSS: "",
  visitors: false,
  trophy: false,
  stats: false,
  skillsCard: false,
  streak: false,
  buymeacoffee: "",
  koFi: "",
  trophyTheme: "",
  starsTheme: "",
  skillCardTheme: "",
  skillCardLayout: "compact",
  streakTheme: "",
};

export const profileAtomDetail = atom<profileAtomDetails>({
  key: "ProfileAtomDetails",
  default: defaultPostState,
});
