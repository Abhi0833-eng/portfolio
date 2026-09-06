export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  program?: string;
  location?: string;
  period: string;
  badge?: string;
  certificateUrl?: string;
  highlights: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "agentic-ai" | "full-stack" | "ml-analytics" | "all";
  description: string;
  metrics?: string;
  architectureDetails?: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  hasInteractiveSim?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: "Expert" | "Advanced" | "Proficient"; highlight?: boolean }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date?: string;
  type: "Publication" | "Hackathon" | "Leadership" | "Academic" | "Hardware & IoT";
  description: string;
  badge: string;
  linkUrl?: string;
  certificateUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: string;
  certificateUrl?: string;
}
