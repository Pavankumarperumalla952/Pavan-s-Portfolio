export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  keyIdea: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  status: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  statusBadge: string;
  grade?: string;
  description: string;
  tags: string[];
}

export interface HobbyItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  accent: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}
