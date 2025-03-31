import animaProject from './anima';
import { Project } from '../types';

// Import other projects when they're created
// import hiiveProject from './hiive';
// import affirmProject from './affirm';
// ...

// For now, we'll create placeholder projects for the remaining ones
const createPlaceholderProject = (
  id: number,
  slug: string,
  title: string,
  company: string,
  projectDay: number
): Project => {
  return {
    id,
    slug,
    title,
    company,
    shortDescription: `Placeholder description for ${company} project`,
    fullDescription: `This is a placeholder for the ${company} project. Full details will be added later.`,
    completionDate: `March ${16 + projectDay}, 2025`,
    projectDay,
    technologies: {
      frontend: ['React', 'TypeScript', 'CSS Modules'],
      backend: ['AWS Lambda', 'Node.js'],
      devops: ['AWS CDK', 'CloudFront'],
      other: []
    },
    projectType: ['Web Application'],
    businessValue: ['Placeholder Value'],
    features: [
      {
        title: 'Placeholder Feature',
        description: 'This is a placeholder feature description.'
      }
    ],
    challenges: [
      {
        challenge: 'Placeholder Challenge',
        solution: 'Placeholder Solution'
      }
    ],
    learnings: ['Placeholder Learning'],
    links: {},
    images: {
      thumbnail: `/assets/projects/${slug}/thumbnail.png`,
      featured: `/assets/projects/${slug}/featured.png`,
      gallery: [`/assets/projects/${slug}/screen1.png`]
    },
    metrics: {
      hoursSpent: 8,
      linesOfCode: 3000,
      linesOfMarkdown: 500,
      llmCost: 30,
      hostingCost: 0
    },
    emailThread: {
      initialOutreach: {
        date: `March ${16 + projectDay}, 2025`,
        subject: `Application for Position at ${company}`,
        content: ''
      },
      responses: []
    }
  };
};

// Create placeholder projects for the remaining ones
const hiiveProject = createPlaceholderProject(2, 'hiive', 'AI Market Sentiment Analyzer', 'Hiive', 2);
const affirmProject = createPlaceholderProject(3, 'affirm', 'Merchant Analytics Dashboard', 'Affirm', 3);
const sofiProject = createPlaceholderProject(4, 'sofi', 'Experimentation Platform Accelerator', 'SoFi', 4);
const stitchFixProject = createPlaceholderProject(5, 'stitch-fix', 'Client Engagement Acceleration System', 'Stitch Fix', 5);
const sourcegraphProject = createPlaceholderProject(6, 'sourcegraph', 'Cody Batch Autonomous Repository Remediation', 'Sourcegraph', 6);
const vercelProject = createPlaceholderProject(7, 'vercel', 'Lead Qualification System', 'Vercel', 7);
const gitlabProject = createPlaceholderProject(8, 'gitlab', 'AI PR Agent', 'GitLab', 8);
const posthogProject = createPlaceholderProject(9, 'posthog', 'AI Docs Chat', 'PostHog', 9);
const zillowProject = createPlaceholderProject(10, 'zillow', 'Real Estate Professional Health Dashboard', 'Zillow', 10);

// Export all projects
export const projects: Project[] = [
  animaProject,
  hiiveProject,
  affirmProject,
  sofiProject,
  stitchFixProject,
  sourcegraphProject,
  vercelProject,
  gitlabProject,
  posthogProject,
  zillowProject
];

// Export individual projects
export {
  animaProject,
  hiiveProject,
  affirmProject,
  sofiProject,
  stitchFixProject,
  sourcegraphProject,
  vercelProject,
  gitlabProject,
  posthogProject,
  zillowProject
};

// Export default as array of all projects
export default projects;