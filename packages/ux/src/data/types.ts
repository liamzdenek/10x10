export interface Project {
  id: number;
  slug: string;
  title: string;
  company: string;
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
  youtubeVideoId?: string; // YouTube video ID for embedding
  emailThread?: {
    messages: {
      direction: 'sent' | 'received';
      author: string;
      date: string;
      subject: string;
      content: string;
    }[];
  };
}