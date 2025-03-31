import { Project } from '../types';

const stitchFixProject: Project = {
  id: 5,
  slug: 'stitch-fix',
  title: 'Client Engagement Acceleration System',
  company: 'Stitch Fix',
  shortDescription: 'A client engagement acceleration system that monitors customer engagement, identifies at-risk clients, and automatically generates personalized re-engagement emails using AI.',
  fullDescription: "The Client Engagement Acceleration System reduces client churn and increases retention by proactively identifying disengagement risk and automating personalized re-engagement, directly addressing a key business risk identified in Stitch Fix's SEC report.",
  completionDate: 'March 21, 2025',
  projectDay: 5,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'Nx monorepo'],
    backend: ['Go', 'Node.js', 'Express.js', 'AWS Lambda'],
    devops: ['AWS CDK', 'DynamoDB', 'SNS/SQS', 'S3/CloudFront'],
    other: ['AI Integration', 'Event-Driven Architecture']
  },
  projectType: ['Web Application', 'Serverless'],
  businessValue: ['Customer Retention', 'Engagement Analytics'],
  features: [
    {
      title: 'Engagement Monitoring System',
      description: 'Sophisticated scoring algorithm based on order recency, frequency, and value with real-time tracking of client engagement metrics.'
    },
    {
      title: 'Automated Re-engagement System',
      description: 'AI-powered generation of highly personalized emails with structured output in consistent JSON format and HTML-formatted email content with personalized recommendations.'
    },
    {
      title: 'Management Dashboard',
      description: 'Real-time visibility into client engagement metrics with user management interface for creating and updating clients.'
    },
    {
      title: 'Event-Driven Architecture',
      description: 'DynamoDB Streams for capturing data changes, SNS/SQS for reliable message delivery, and Lambda functions for event processing.'
    }
  ],
  challenges: [
    {
      challenge: 'Email generation not working for users with low engagement scores',
      solution: 'Modified the email processor Lambda to use the existing engagement score from the database instead of recalculating it, ensuring emails are generated for users with low engagement scores.'
    },
    {
      challenge: 'Email sending failing due to SES verification issues',
      solution: 'Removed SES dependency and modified the Lambda to skip actual email sending and just mark emails as "SENT" in DynamoDB, eliminating the need for email verification in AWS SES.'
    },
    {
      challenge: 'Email content not properly formatted as HTML',
      solution: 'Implemented structured output with JSON Schema validation, switched to openai/gpt-4o model for better structured output support, and enhanced the prompt to explicitly require JSON output.'
    }
  ],
  learnings: [
    'Event-Driven Architecture: The event-driven architecture provided a clean separation of concerns, enabling loose coupling, scalability, and resilience.',
    'AI-Powered Content Generation: Structured output with JSON Schema validation proved essential for reliable AI-generated content.',
    'Multi-Language Implementation: Using Go for the email processor alongside TypeScript for other components demonstrated the value of selecting the right language for specific workloads.',
    'Executive Communication Style: The Stitch Fix project featured the strongest email communication so far, adopting a style inspired by Mark Zuckerberg.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/stitch-fix-application',
  },
  images: {
    thumbnail: '/productPhotos/stitch-fix/image-1.png',
    featured: '/productPhotos/stitch-fix/image-1.png',
    gallery: [
      '/productPhotos/stitch-fix/image-1.png',
      '/productPhotos/stitch-fix/image-2.png',
      '/productPhotos/stitch-fix/image-3.png',
      '/productPhotos/stitch-fix/image-4.png',
      '/productPhotos/stitch-fix/image-5.png'
    ]
  },
  metrics: {
    hoursSpent: 7,
    linesOfCode: 7312,
    linesOfMarkdown: 2479,
    llmCost: 51.90,
    hostingCost: 0
  },
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 21, 2025',
      subject: 'Application for Principal Software Engineer Position - Client Engagement Acceleration System',
      content: ''
    },
    responses: []
  }
};

export default stitchFixProject;