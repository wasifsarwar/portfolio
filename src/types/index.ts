export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  category: string;
  technologies: string;
}

export interface ContactLink {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

export interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}