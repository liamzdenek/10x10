import { Project } from '../types';

const FIRST_EMAIL = `
Hey [Top Engineer] & [Co-Founder and CEO],

I built a Claude-powered Batch Changes Platform in one day that addresses a key pitfall of Sourcegraph's Batch Changes product: bespoke repositories.

Key points:
- Identifies repositories that may need changes
- Generates bespoke patches for those repositories
- Uses Claude 3.7 and scalable architecture on AWS

5 Minute AI Batch Changes API Demo Video

[Top Engineer]: I was inspired to reach out due to your Saturday blog post on your vision for the future of AI-assisted programming.

I'm in agreement about that vision. I believe Sourcegraph is uniquely positioned to build Agent Clusters and Agent Fleets, and I believe I'm uniquely positioned to help. Let's make it happen.

- Liam

Full Demo Website

Source Code
`.trim();

const SECOND_EMAIL = `
Hey Liam, that's really cool. Love the hustle too. [Employee 1] (cc'd) leads batch changes here along with [Employee 2] (cc'd) and has been working on this stuff as well, and [Employee 3] (cc'd) runs eng hiring here. We'd love to chat with you. [Employee 3] will follow up to find time.

Best,
[Co-Founder and CEO]
`.trim();

const THIRD_EMAIL = `
Thanks for watching & I'm glad you enjoyed it. I'm very appreciative of your time. Thanks for connecting me with the right people; I'm excited to chat with the team. - Liam
`.trim();

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
  youtubeVideoId: 'obPRvH0Kx1g',
  emailThread: {
    messages: [
        {
          direction: 'sent',
          author: 'Liam Zdenek',
          date: 'March 24, 2025 @ 6:06 PM',
          subject: 'Principal Engineer Application / Claude Batch Changes Demo',
          content: FIRST_EMAIL
        },
        {
            direction: "received",
            author: "Co-Founder and CEO",
            date: 'March 24, 2025 @ 11:30 PM',
            subject: "RE: Principal Engineer Application / Claude Batch Changes Demo",
            content: SECOND_EMAIL,
        },
        {
          direction: 'sent',
          author: 'Liam Zdenek',
          date: 'Mar 25, 2025 @ 1:12 PM',
          subject: 'RE: Principal Engineer Application / Claude Batch Changes Demo',
          content: THIRD_EMAIL
        }
    ]
  }
};

export default sourcegraphProject;