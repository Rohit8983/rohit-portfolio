
export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  icon: string;
  architecture: string[];
}

export interface Metric {
  label: string;
  value: number;
  subtext: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum SkillCategory {
  SOC = 'SOC & SIEM',
  THREAT = 'Threat & Network',
  TESTING = 'Security Testing',
  AI = 'AI & Programming'
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100
}
