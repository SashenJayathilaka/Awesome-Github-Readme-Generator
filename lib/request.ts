import { SkillsType } from "@/type";
import { useEffect, useState } from "react";

const request = () => {
  const [skills, setSkills] = useState<SkillsType>({
    automation: [],
    backend: [],
    backendService: [],
    database: [],
    devops: [],
    engines: [],
    framework: [],
    frontend: [],
    languages: [],
    mL: [],
    mobile: [],
    other: [],
    software: [],
    static: [],
    testing: [],
    visualization: [],
  });

  const fetchData = async () => {
    try {
      const skills: SkillsType = await fetch(
        process.env.NEXT_PUBLIC_SKILL_API_KEY!
      ).then((res) => res.json());

      setSkills(skills);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { skills };
};

export default request;
