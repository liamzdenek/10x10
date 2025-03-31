import { Project } from '../types';

const gitlabProject: Project = {
  id: 8,
  slug: 'gitlab',
  title: 'AI PR Agent',
  company: 'GitLab',
  shortDescription: 'An AI-powered tool that enables developers to create or update pull requests through natural language prompts, analyzing codebases and making appropriate changes automatically.',
  fullDescription: "The AI PR Agent demonstrates expertise in distributed systems, cloud architecture, and AI integration for a GitLab Principal Engineer position by creating an autonomous PR creation system. It allows developers to describe changes in natural language and the system translates these into actual code changes.",
  completionDate: 'March 26, 2025',
  projectDay: 8,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'TanStack Router', 'TanStack Query'],
    backend: ['Node.js', 'Express.js', 'AWS Lambda', 'Zod'],
    devops: ['AWS CDK', 'DynamoDB', 'API Gateway', 'S3', 'CloudFront'],
    other: ['Claude API', 'GitLab API', 'NX Monorepo', 'Tool-based AI']
  },
  projectType: ['Web Application', 'Developer Tools'],
  businessValue: ['Developer Productivity', 'Workflow Automation'],
  features: [
    {
      title: 'Natural Language PR Creation',
      description: 'Users can describe desired changes in plain English, and the system translates these into actual code changes.'
    },
    {
      title: 'Autonomous Code Analysis',
      description: 'The system uses Claude 3.7 to analyze repositories, understand code structure, and generate appropriate changes.'
    },
    {
      title: 'GitLab Integration',
      description: 'Seamless integration with GitLab\'s API for creating branches, committing changes, and opening pull requests.'
    },
    {
      title: 'Tool-based AI Approach',
      description: 'The Claude client uses a tool-based approach where the AI can use various tools to interact with the repository, such as listing files, reading file contents, writing to files, and searching for patterns in code.'
    }
  ],
  challenges: [
    {
      challenge: 'Autonomous Code Analysis',
      solution: 'Implemented a tool-based approach where Claude can use various tools to interact with the repository, allowing it to explore the codebase autonomously and make informed decisions about code changes.'
    },
    {
      challenge: 'Asynchronous Job Processing',
      solution: 'Designed a job system with DynamoDB for persistence and Lambda functions for processing, with a defined lifecycle and detailed status updates for tracking progress.'
    },
    {
      challenge: 'Managing Claude Context Window',
      solution: 'Implemented a strategy to selectively include relevant code files in the Claude context, using code search and analysis to identify the most important files for a given task.'
    }
  ],
  learnings: [
    'AI Tool Design: Designing effective AI tools requires careful consideration of the interaction model. The tool-based approach proved effective for giving Claude the ability to explore and modify code repositories autonomously.',
    'Asynchronous Architecture: Long-running AI tasks benefit from an asynchronous architecture with proper status tracking and updates, providing a better user experience and more efficient resource utilization.',
    'Type Safety: End-to-end type safety with TypeScript and Zod significantly improved development velocity and reduced runtime errors, especially when working with complex data structures and API interactions.',
    'Meeting Users Where They Are: Integrating directly with existing tools like GitLab proved valuable, allowing users to work within familiar interfaces rather than forcing them into a new environment.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/gitlab-application',
  },
  images: {
    thumbnail: '/productPhotos/gitlab/image-1.png',
    featured: '/productPhotos/gitlab/image-1.png',
    gallery: [
      '/productPhotos/gitlab/image-1.png',
      '/productPhotos/gitlab/image-2.png',
      '/productPhotos/gitlab/image-3.png',
      '/productPhotos/gitlab/image-4.png',
      '/productPhotos/gitlab/image-5.png'
    ]
  },
  metrics: {
    hoursSpent: 8,
    linesOfCode: 6134,
    linesOfMarkdown: 3349,
    llmCost: 52.82,
    hostingCost: 0
  },
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 26, 2025',
      subject: 'Application for Principal Engineer Position - AI PR Agent',
      content: ''
    },
    responses: []
  }
};

export default gitlabProject;