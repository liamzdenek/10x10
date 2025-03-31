import { Project } from '../types';

const sourcegraphProject: Project = {
  id: 6,
  slug: 'sourcegraph',
  title: 'Cody Batch - Autonomous Repository Remediation',
  company: 'Sourcegraph',
  shortDescription: 'An AI-powered tool that leverages Claude 3.7 to perform bulk changes on GitHub repositories, automatically analyzing code and applying changes based on specific prompts.',
  fullDescription: "Cody Batch increases developer productivity by automating repetitive code maintenance tasks across multiple repositories, demonstrating understanding of Sourcegraph's vision for AI coding agents. It addresses code maintenance at scale, technical debt reduction, and consistency enforcement.",
  completionDate: 'March 24, 2025',
  projectDay: 6,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'Tanstack Router'],
    backend: ['Node.js', 'Express', 'AWS Lambda', 'AWS Batch', 'Zod'],
    devops: ['AWS CDK', 'DynamoDB', 'Docker', 'S3', 'CloudFront'],
    other: ['Claude 3.7 API', 'GitHub API', 'Tool-based AI Interaction']
  },
  projectType: ['Web Application', 'Serverless'],
  businessValue: ['Developer Productivity', 'Code Maintenance'],
  features: [
    {
      title: 'Job Creation Interface',
      description: 'User-friendly form for creating batch change jobs with repository selection, custom prompt input, and option to automatically create pull requests.'
    },
    {
      title: 'Batch Processing System',
      description: 'AWS Batch for long-running job processing with container-based job execution, parallel processing of multiple repositories, and comprehensive error handling.'
    },
    {
      title: 'Claude 3.7 Integration',
      description: 'Tool-based interaction for repository analysis, autonomous code modification sessions, and token usage tracking and optimization.'
    },
    {
      title: 'GitHub Integration',
      description: 'Repository scanning and cloning, code analysis and modification, pull request creation for owned repositories, and diff generation for non-owned repositories.'
    }
  ],
  challenges: [
    {
      challenge: 'Long-running job processing exceeding Lambda\'s 15-minute limit',
      solution: 'Implemented AWS Batch for job processing, allowing jobs to run for extended periods while maintaining a serverless architecture for the API.'
    },
    {
      challenge: 'Claude API integration with proper error handling and token management',
      solution: 'Developed a comprehensive Claude client with direct API calls, detailed logging, and token usage tracking, ensuring robust interaction with the Claude 3.7 API.'
    },
    {
      challenge: 'GitHub API rate limiting for repository operations',
      solution: 'Implemented rate limit checking and management in the GitHub client, with exponential backoff and retry logic to handle rate limit constraints.'
    }
  ],
  learnings: [
    'Tool-Based AI Interaction: The tool-based approach for AI interaction proved highly effective for repository operations, providing structured interaction with clear boundaries and better control over the AI\'s actions.',
    'AWS Batch for Long-Running Jobs: Using AWS Batch for job processing allowed for handling complex, long-running tasks that would exceed Lambda\'s timeout limits, while maintaining a serverless architecture for the API.',
    'Conversation History Storage: Storing complete conversation histories, including tool calls and results, provided valuable context for understanding the AI\'s reasoning and debugging issues.',
    'Direct API Calls vs. SDK: Using direct API calls with fetch instead of relying solely on the SDK provided better error handling, debugging, and compatibility with newer Claude models.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/sourcegraph-application',
  },
  images: {
    thumbnail: '/productPhotos/sourcegraph/image-1.png',
    featured: '/productPhotos/sourcegraph/image-1.png',
    gallery: [
      '/productPhotos/sourcegraph/image-1.png',
      '/productPhotos/sourcegraph/image-2.png',
      '/productPhotos/sourcegraph/image-3.png',
      '/productPhotos/sourcegraph/image-4.png',
      '/productPhotos/sourcegraph/image-5.png',
      '/productPhotos/sourcegraph/image-6.png',
      '/productPhotos/sourcegraph/image-7.png'
    ]
  },
  metrics: {
    hoursSpent: 10,
    linesOfCode: 9778,
    linesOfMarkdown: 5772,
    llmCost: 85.97,
    hostingCost: 2
  },
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 24, 2025',
      subject: 'Cody Batch - Autonomous Repository Remediation',
      content: ''
    },
    responses: [
      {
        date: 'March 24, 2025',
        subject: 'Re: Cody Batch - Autonomous Repository Remediation',
        content: 'That\'s really cool. Love the hustle too.'
      }
    ]
  }
};

export default sourcegraphProject;