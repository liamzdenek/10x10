import { Project } from '../types';

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
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 20, 2025',
      subject: 'Application for Principal Software Engineer Position - Experimentation Platform Accelerator',
      content: ''
    },
    responses: []
  }
};

export default sofiProject;