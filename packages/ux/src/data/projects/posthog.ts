import { Project } from '../types';

const posthogProject: Project = {
  id: 9,
  slug: 'posthog',
  title: 'AI Docs Chat',
  company: 'PostHog',
  shortDescription: 'An AI-powered documentation chat system that allows users to upload or link to their documentation and then ask questions about it, receiving contextually relevant AI-generated answers.',
  fullDescription: "The AI Docs Chat is a complete end-to-end solution for reducing support ticket volume by providing immediate, accurate answers to product questions without human intervention. It uses vector search, semantic reranking, and AI response generation to help PostHog's growing support team handle increasing customer questions.",
  completionDate: 'March 27, 2025',
  projectDay: 9,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'TanStack Router'],
    backend: ['Node.js', 'TypeScript', 'AWS Lambda', 'serverless-http', 'PostgreSQL with pgvector'],
    devops: ['AWS CDK', 'API Gateway', 'RDS', 'S3', 'CloudFront'],
    other: ['Claude API', 'VoyageAI API', 'Jina.ai API', 'Vector Embeddings']
  },
  projectType: ['Web Application', 'AI/ML Integration'],
  businessValue: ['Customer Support Automation', 'Support Team Efficiency', 'Scaling Support'],
  features: [
    {
      title: 'Document Processing Pipeline',
      description: 'Web crawler using Jina.ai API to retrieve documentation, intelligent chunking to segment documents, and vector embedding generation using VoyageAI API.'
    },
    {
      title: 'Vector Search with Reranking',
      description: 'Two-stage retrieval with initial vector search followed by semantic reranking, context preservation with references between adjacent chunks, and multi-tenant support.'
    },
    {
      title: 'AI Response Generation',
      description: 'Claude integration for natural language responses, context-aware answers using relevant document chunks, and citation support with source URLs and titles.'
    },
    {
      title: 'Chat Interface',
      description: 'Customer selection dropdown for switching between contexts, conversation history maintenance, and confidence indicators for response reliability.'
    }
  ],
  challenges: [
    {
      challenge: 'Efficient Document Chunking',
      solution: 'Implemented intelligent chunking with 1000 token chunks and 200% overlap, with special handling for code blocks and examples. Used Jina.ai segmentation API with custom overlap implementation.'
    },
    {
      challenge: 'Vector Search Quality',
      solution: 'Implemented two-stage retrieval with reranking: initial vector search to get top 20 candidates, Jina reranker to refine results based on semantic understanding, and selection of top 5 results for context generation.'
    },
    {
      challenge: 'API Rate Limits',
      solution: 'Implemented batch processing with configurable concurrency, rate limiting, and resume capability for interrupted processes. Added retry logic with exponential backoff for API failures.'
    }
  ],
  learnings: [
    'Vector Database Implementation: PostgreSQL with pgvector provides a powerful, cost-effective solution for vector operations without requiring specialized vector databases.',
    'Document Chunking Strategies: Technical documentation benefits from larger chunks (1000 tokens) with substantial overlap (200%) to preserve context.',
    'Two-Stage Retrieval: Combining vector search with semantic reranking dramatically improves result quality.',
    'Multi-Tenant Architecture: Customer_id partitioning enables building systems that scale to multiple customers while maintaining data isolation.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/posthog-application',
  },
  images: {
    thumbnail: '/productPhotos/posthog/image-1.png',
    featured: '/productPhotos/posthog/image-1.png',
    gallery: [
      '/productPhotos/posthog/image-1.png',
      '/productPhotos/posthog/image-2.png'
    ]
  },
  metrics: {
    hoursSpent: 12,
    linesOfCode: 7474,
    linesOfMarkdown: 3408,
    llmCost: 87.22,
    hostingCost: 10
  },
  youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder
  emailThread: {
    initialOutreach: {
      date: 'March 27, 2025',
      subject: 'Application for Senior Full Stack Engineer Position - AI Docs Chat',
      content: ''
    },
    responses: []
  }
};

export default posthogProject;