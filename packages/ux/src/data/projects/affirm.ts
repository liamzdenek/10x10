import { Project } from '../types';

const affirmProject: Project = {
  id: 3,
  slug: 'affirm',
  title: 'Merchant Analytics Dashboard',
  company: 'Affirm',
  shortDescription: 'A real-time analytics dashboard for Affirm merchants to visualize customer conversion rates, AOV increases, and payment plan selection patterns.',
  fullDescription: "The Merchant Analytics Dashboard empowers merchants with real-time insights about their Affirm integration, demonstrating clear ROI and helping identify opportunities to improve conversion. It provides visibility into how offering Affirm as a payment option impacts business metrics.",
  completionDate: 'March 19, 2025',
  projectDay: 3,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'Chart.js/D3.js', 'Vite', 'Tanstack Router'],
    backend: ['Node.js', 'Express', 'serverless-http', 'AWS Lambda'],
    devops: ['AWS CDK', 'DynamoDB', 'S3', 'API Gateway'],
    other: ['Real-time Analytics', 'Event-Driven Architecture']
  },
  projectType: ['Web Application', 'Serverless'],
  businessValue: ['Data-Driven Decisions', 'Merchant Insights'],
  features: [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Visualizes key metrics like AOV and transaction volume with support for hourly and daily granularities.'
    },
    {
      title: 'Order Simulation Form',
      description: 'Allows merchants to simulate orders with different parameters, supports multiple merchants for comparison, and includes option to simulate payment failures.'
    },
    {
      title: 'Event-Driven Processing',
      description: 'Uses DynamoDB Streams to trigger real-time aggregation, calculates metrics like AOV and volume in real-time, and stores aggregated data in S3 for efficient retrieval.'
    },
    {
      title: 'Merchant-Specific Analytics',
      description: 'Enforces merchant granularity for all analytics queries and provides insights tailored to each merchant\'s integration.'
    }
  ],
  challenges: [
    {
      challenge: 'Lambda dependency bundling issues',
      solution: 'Updated API implementation to properly bundle dependencies and added necessary packages to package.json.'
    },
    {
      challenge: 'DynamoDB Stream processing for real-time aggregates',
      solution: 'Implemented a Lambda function triggered by DynamoDB Streams to calculate real-time aggregates.'
    },
    {
      challenge: 'Date comparison logic in analytics endpoint',
      solution: 'Fixed the filtering logic to extract just the date part from ISO timestamps and added detailed logging.'
    }
  ],
  learnings: [
    'Memory Bank Pattern: The memory bank approach is becoming more efficient with each project, making it easier to track progress and stay focused.',
    'Business Value Alignment: The project directly addresses Affirm\'s top three business risks, demonstrating how technical solutions can align with business priorities.',
    'AWS Serverless Architecture: DynamoDB Streams provide an elegant solution for real-time event processing without polling.',
    'Project Research: More upfront research into company priorities can help focus the project on high-impact areas.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/affirm-application',
  },
  images: {
    thumbnail: '/productPhotos/affirm/image-1.png',
    featured: '/productPhotos/affirm/image-1.png',
    gallery: [
      '/productPhotos/affirm/image-1.png',
      '/productPhotos/affirm/image-2.png'
    ]
  },
  metrics: {
    hoursSpent: 7,
    linesOfCode: 4552,
    linesOfMarkdown: 2000,
    llmCost: 24.96,
    hostingCost: 0
  },
  youtubeVideoId: 'NrSpkX8ck8g',
  emailThread: {
    initialOutreach: {
      date: 'March 19, 2025',
      subject: 'Application for Principal Software Engineer Position - Merchant Analytics Dashboard',
      content: ''
    },
    responses: [
      {
        date: 'March 19, 2025',
        subject: 'Re: Application for Principal Software Engineer Position',
        content: 'Very cool'
      }
    ]
  }
};

export default affirmProject;