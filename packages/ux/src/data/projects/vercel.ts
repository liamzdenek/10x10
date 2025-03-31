import { Project } from '../types';

const vercelProject: Project = {
  id: 7,
  slug: 'vercel',
  title: 'Lead Qualification System',
  company: 'Vercel',
  shortDescription: 'A sophisticated lead management solution designed to help sales teams identify, score, and qualify leads based on behavior, profile data, and engagement using an event-driven architecture.',
  fullDescription: "The Lead Qualification System demonstrates technical expertise and understanding of GTM systems for the Head of GTM Systems role at Vercel by implementing a complete lead qualification system. It processes lead activities in real-time, automatically scoring and qualifying leads to prioritize sales efforts.",
  completionDate: 'March 25, 2025',
  projectDay: 7,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'React Query', 'TanStack Router'],
    backend: ['Express.js', 'AWS Lambda', 'API Gateway', 'Zod'],
    devops: ['AWS CDK', 'DynamoDB', 'SQS', 'CloudFront'],
    other: ['Event-Driven Architecture', 'Single-Table Design']
  },
  projectType: ['Web Application', 'Serverless'],
  businessValue: ['Operational Efficiency', 'Revenue Growth', 'Focus on High-Value Leads', 'Reduce Time-to-Qualification'],
  features: [
    {
      title: 'Intelligent Lead Scoring',
      description: 'Multi-factor scoring algorithm based on profile, engagement, and recency with configurable scoring rules and real-time score updates.'
    },
    {
      title: 'BANT Qualification Framework',
      description: 'Automated evaluation of Budget, Authority, Need, and Timeline with inference of qualification criteria from behavior.'
    },
    {
      title: 'Account-Based Prospecting',
      description: 'Automatic association of leads with accounts, account-level scoring and insights, and holistic view of all leads within an account.'
    },
    {
      title: 'Event-Driven Architecture',
      description: 'Real-time processing of lead activities, extensible event types for various interactions, and asynchronous processing for scalability.'
    }
  ],
  challenges: [
    {
      challenge: 'Cold start performance in Lambda functions',
      solution: 'Implemented strategies to mitigate Lambda cold starts including optimized bundle sizes and warm-up mechanisms.'
    },
    {
      challenge: 'DynamoDB query limitations with complex access patterns',
      solution: 'Designed access patterns carefully to avoid full table scans and implemented efficient single-table design with GSIs.'
    },
    {
      challenge: 'CORS configuration for cross-origin requests',
      solution: 'Implemented comprehensive CORS support in the backend with proper headers and preflight handling.'
    }
  ],
  learnings: [
    'Event-Driven Architecture: Effective for decoupling components and enabling scalability.',
    'Single-Table DynamoDB Design: Powerful but requires careful planning of access patterns.',
    'Serverless Deployment: Provides excellent scalability but introduces cold start challenges.',
    'Infrastructure as Code: Essential for consistent, repeatable deployments.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/vercel-application',
  },
  images: {
    thumbnail: '/productPhotos/vercel/image-1.png',
    featured: '/productPhotos/vercel/image-1.png',
    gallery: [
      '/productPhotos/vercel/image-1.png',
      '/productPhotos/vercel/image-2.png',
      '/productPhotos/vercel/image-3.png',
      '/productPhotos/vercel/image-4.png',
      '/productPhotos/vercel/image-5.png',
      '/productPhotos/vercel/image-6.png'
    ]
  },
  metrics: {
    hoursSpent: 8,
    linesOfCode: 9371,
    linesOfMarkdown: 3506,
    llmCost: 41.39,
    hostingCost: 0
  },
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 25, 2025',
      subject: 'Application for Head of GTM Systems - Lead Qualification System',
      content: ''
    },
    responses: []
  }
};

export default vercelProject;