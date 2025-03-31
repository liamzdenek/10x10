import { Project } from '../types';

const hiiveProject: Project = {
  id: 2,
  slug: 'hiive',
  title: 'AI Market Sentiment Analyzer',
  company: 'Hiive',
  shortDescription: 'A demo application that showcases how Agentic AI can enhance Hiive\'s private market data insights through sentiment analysis.',
  fullDescription: "The AI Market Sentiment Analyzer bridges information asymmetry in private markets by analyzing sentiment across news, social media, and financial reports to provide deeper investment insights. It uses AI agents to process large volumes of information that would be time-consuming to analyze manually.",
  completionDate: 'March 18, 2025',
  projectDay: 2,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules'],
    backend: ['Node.js', 'Express', 'LangChain.js', 'AWS Lambda'],
    devops: ['AWS CDK', 'S3', 'API Gateway', 'CloudFront'],
    other: ['AI Integration', 'Sentiment Analysis']
  },
  projectType: ['Web Application', 'Serverless'],
  businessValue: ['Market Intelligence', 'Investment Decision Support'],
  features: [
    {
      title: 'Sentiment Analysis Dashboard',
      description: 'Interactive visualization of sentiment trends, company-specific sentiment analysis, and topic breakdown with source analysis.'
    },
    {
      title: 'AI Agent System',
      description: 'Article sentiment analysis agent and agent orchestrator for coordinating analysis tasks with LLM integration via OpenRouter API.'
    },
    {
      title: 'Article Submission System',
      description: 'Web interface for uploading articles, desktop CLI for batch article submission, and automatic processing via S3 event notifications.'
    },
    {
      title: 'Serverless Backend',
      description: 'Express API endpoints for sentiment analysis and article submission with Lambda functions for API, article processing, and summary aggregation.'
    }
  ],
  challenges: [
    {
      challenge: 'Time constraint of 1-2 day implementation window',
      solution: 'Focused scope on core functionality, leveraged existing libraries, and implemented mock data where appropriate.'
    },
    {
      challenge: 'LLM API performance and cost',
      solution: 'Implemented caching for repeated queries, used streaming responses, and configured appropriate Lambda timeouts.'
    },
    {
      challenge: 'API Gateway to Express integration complexity',
      solution: 'Created custom integration between Express and API Gateway with proper error handling.'
    }
  ],
  learnings: [
    'Serverless Architecture: AWS Lambda with Express adapter provides a flexible, cost-effective solution for backend development that scales automatically.',
    'AI Agent Orchestration: Coordinating specialized AI agents allows for more sophisticated analysis than a single monolithic agent.',
    'Event-Driven Processing: S3 event notifications enable efficient, asynchronous processing of articles without polling.',
    'Infrastructure as Code: AWS CDK with TypeScript provides a powerful way to define and deploy infrastructure with the same language as the application.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/hiive-application',
  },
  images: {
    thumbnail: '/productPhotos/hiive/image-1.png',
    featured: '/productPhotos/hiive/image-1.png',
    gallery: [
      '/productPhotos/hiive/image-1.png'
    ]
  },
  metrics: {
    hoursSpent: 7,
    linesOfCode: 4933,
    linesOfMarkdown: 1892,
    llmCost: 32.89,
    hostingCost: 0
  },
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 18, 2025',
      subject: 'Application for Principal Software Engineer Position - AI Market Sentiment Analyzer',
      content: ''
    },
    responses: []
  }
};

export default hiiveProject;