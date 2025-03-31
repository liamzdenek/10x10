export interface Project {
  id: number; // 1-10
  slug: string; // e.g., "vercel"
  title: string; // e.g., "Lead Qualification System"
  company: string; // e.g., "Vercel"
  shortDescription: string;
  fullDescription: string;
  completionDate: string;
  projectDay: number;
  technologies: {
    frontend: string[];
    backend: string[];
    devops: string[];
    other: string[];
  };
  projectType: string[];
  businessValue: string[];
  features: {
    title: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  learnings: string[];
  links: {
    sourceCode?: string;
    liveDemo?: string;
  };
  images: {
    thumbnail: string;
    featured: string;
    gallery: string[];
  };
  metrics: {
    hoursSpent: number;
    linesOfCode: number;
    linesOfMarkdown: number;
    llmCost: number;
    hostingCost: number;
  };
  emailThread?: {
    initialOutreach: {
      date: string;
      subject: string;
      content: string;
    };
    responses: {
      date: string;
      subject: string;
      content: string;
    }[];
  };
}