import { Project } from '../types';

const FIRST_EMAIL = `
Hello [SVP Engineering] and [CTO], and the team at SoFi,

I'm Liam[1]. I'm a hands-on SWE with 14 YOE and a track record of exceptional impact. I'm interested in working in Engineering at SoFi.

I made a project to apply to SoFi instead of sending a traditional application. I completed this project in about 7 hours by leveraging Agentic LLM development workflows. I recorded a five minute demo, linked below, but here is the quick summary:

1. Experimentation Platform: I've created a lightweight, cloud-native platform for rapid testing and validation of new features through A/B testing.
2. Focus on solving a real problem rapidly and not getting caught on technical perfectionism
3. I chose a project that centers a key area of growth for SoFi, because I see that you're staffing up your experimentation division.
4. I'm drawn to SoFi because of the compatibility of our goals. I believe that I can accomplish my major learning goal at SoFi (improving my product-oriented thinking), and I believe that I can ship real features that meaningfully impact SoFi's business outcomes at the same time.
5. Tech: Typescript, Lambda, S3, DynamoDB, AWS Batch, Java, CloudFront, API Gateway, Vite + Typescript + React

5 Minute Experimentation Platform Demo Video

As I mention in the video, you can actually use the demo application here.

Even though I don't mention it, you can find the source code here.

If you're interested in hearing more, I have a lot more pieces of relevant experience to SoFi, focusing on domains such as crawl-to-run projects, teaching, empathetic communication, intentionality and accountability, etc. I can also do Leetcode. But I'll save that for a future discussion.

Thank you for your consideration, and I look forward to hearing back.

Thanks,
Liam Zdenek

[1] [LinkedIn Link]
`.trim();

const SECOND_EMAIL = `
Hey [SVP Engineering] and [CTO],

In the meantime, I've been doing one of these projects every day to put together a portfolio of 10 from-scratch projects in 10 days.

If you're interested in working together, let me know. If not, I'd appreciate some feedback on why it's not a fit. Thanks.

- Liam
`.trim();

const sofiProject: Project = {
  id: 4,
  slug: 'sofi',
  title: 'Experimentation Platform Accelerator',
  company: 'SoFi',
  shortDescription: 'A lightweight experimentation platform that enables rapid testing and validation of new features through A/B testing and data-driven insights.',
  fullDescription: "The Experimentation Platform Accelerator accelerates innovation by providing a structured approach to testing and validation, reducing the technical overhead of implementing experiments. It helps SoFi rapidly test and validate new features to maintain competitive advantage.",
  completionDate: 'March 20, 2025',
  projectDay: 4,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'D3.js', 'TanStack Router'],
    backend: ['Node.js', 'Express', 'Java', 'Dagger 2', 'Apache Commons Math'],
    devops: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'AWS Batch', 'AWS CDK'],
    other: ['A/B Testing', 'Statistical Analysis']
  },
  projectType: ['Web Application', 'Serverless'],
  businessValue: ['Data-Driven Decisions', 'Innovation Acceleration'],
  features: [
    {
      title: 'Experiment Management Interface',
      description: 'Create and configure A/B tests with multiple variants, define experiment parameters and success metrics, and view active and completed experiments.'
    },
    {
      title: 'Sample Page with Live Experiments',
      description: 'Demonstrates experiments in action on a sample checkout page, shows different button colors based on experiment variant, and tracks user interactions with experimental elements.'
    },
    {
      title: 'Event Collection System',
      description: 'Records user interactions with experimental elements, captures conversion events for statistical analysis, and stores events in DynamoDB with experiment context.'
    },
    {
      title: 'Report Generation Pipeline',
      description: 'Processes collected event data using AWS Batch, calculates conversion rates and statistical significance, and generates comprehensive JSON reports.'
    }
  ],
  challenges: [
    {
      challenge: 'AWS Batch connectivity issues',
      solution: 'Added public IP assignment to Fargate tasks, created security group with outbound internet access, and granted ECR pull permissions to task execution role.'
    },
    {
      challenge: 'CloudFront 403 Forbidden errors',
      solution: 'Removed website configuration from S3 bucket, added S3 managed encryption, simplified CloudFront distribution configuration, and added handling for 403 errors.'
    },
    {
      challenge: 'DynamoDB query expressions in Java',
      solution: 'Fixed the ExperimentEvent class by moving annotations, updated query approach to use QueryConditional.sortBetween(), and ensured consistent AWS region settings.'
    }
  ],
  learnings: [
    'NX Monorepo Structure: The NX monorepo structure provides a clean separation of concerns while enabling code sharing, though it requires careful configuration to avoid nested directories.',
    'TypeScript/Java Integration: Maintaining consistent data models between TypeScript and Java components requires careful planning, including mirrored class structures and proper serialization.',
    'AWS Integration: AWS services provide powerful capabilities for building cloud-native applications, but require careful configuration and error handling for reliable operation.',
    'API Robustness: Implementing comprehensive validation, logging, and error handling in the API is essential for building a maintainable application.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/sofi-application',
  },
  images: {
    thumbnail: '/productPhotos/sofi/image-1.png',
    featured: '/productPhotos/sofi/image-1.png',
    gallery: [
      '/productPhotos/sofi/image-1.png',
      '/productPhotos/sofi/image-2.png',
      '/productPhotos/sofi/image-3.png',
      '/productPhotos/sofi/image-4.png'
    ]
  },
  metrics: {
    hoursSpent: 7,
    linesOfCode: 8933,
    linesOfMarkdown: 2194,
    llmCost: 45.27,
    hostingCost: 0
  },
  youtubeVideoId: 'uUbdlD0Vh2w',
  emailThread: {
    messages: [
      {
        direction: 'sent',
        author: 'Liam Zdenek',
        date: 'March 20, 2025',
        subject: 'Experimentation Platform Demo / Principal SWE Application',
        content: FIRST_EMAIL
      },
      {
        direction: 'sent',
        author: 'Liam Zdenek',
        date: 'March 27, 2025',
        subject: 'RE: Experimentation Platform Demo / Principal SWE Application',
        content: SECOND_EMAIL
      }
    ]
  }
};

export default sofiProject;