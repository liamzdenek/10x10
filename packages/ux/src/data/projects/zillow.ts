import { Project } from '../types';

const zillowProject: Project = {
  id: 10,
  slug: 'zillow',
  title: 'Real Estate Professional Health Dashboard',
  company: 'Zillow',
  shortDescription: 'An executive dashboard for Zillow that monitors the health of relationships with real estate professionals, addressing a key business risk identified in their 10-K.',
  fullDescription: "The Real Estate Professional Health Dashboard provides early warning of potential churn, enables targeted interventions, and helps Zillow maintain strong relationships with real estate professionals who contribute significantly to revenue. It includes segmentation analysis and simulation features for testing interventions.",
  completionDate: 'March 28, 2025',
  projectDay: 10,
  technologies: {
    frontend: ['React', 'TypeScript', 'CSS Modules', 'TanStack Router'],
    backend: ['Express.js', 'AWS Lambda', 'DynamoDB'],
    devops: ['AWS CDK', 'API Gateway', 'CloudFront', 'S3'],
    other: ['Data Visualization', 'Business Intelligence']
  },
  projectType: ['Web Application', 'Analytics Dashboard'],
  businessValue: ['Analytics', 'Risk Management', 'Relationship Monitoring', 'Churn Prevention'],
  features: [
    {
      title: 'Agent Health Monitoring',
      description: 'Real-time tracking of key metrics for real estate professional relationships, with early warning indicators for potential churn.'
    },
    {
      title: 'Segmentation Analysis',
      description: 'Detailed segmentation of real estate professionals by type, region, performance, and engagement level for targeted interventions.'
    },
    {
      title: 'Intervention Simulation',
      description: 'What-if analysis tool for testing different intervention strategies before implementing them in the real world.'
    },
    {
      title: 'Executive Dashboard',
      description: 'Comprehensive visualization of key metrics with drill-down capabilities for deeper analysis and decision support.'
    }
  ],
  challenges: [
    {
      challenge: 'Implementing effective data aggregation for different agent segments',
      solution: 'Loaded all agents into memory and performed aggregations in the backend, which works well for the demo\'s limited dataset but would need optimization for production.'
    },
    {
      challenge: 'Creating an intuitive simulation interface for what-if analysis',
      solution: 'Implemented thoughtful UI design and color coding to clearly show the impact of interventions on different metrics.'
    },
    {
      challenge: 'Handling different color highlighting logic for different types of metrics',
      solution: 'Created separate highlighting logic for metrics where higher values are better versus metrics where lower values are better.'
    }
  ],
  learnings: [
    'The importance of understanding business risks and how technology can address them.',
    'The value of segmentation in data analysis for targeted interventions.',
    'Effective use of AWS CDK for infrastructure as code.',
    'The power of simulation for testing interventions before implementation.',
    'The need to consider different color highlighting logic for different types of metrics.'
  ],
  links: {
    sourceCode: 'https://github.com/liamzdenek/zillow-application',
  },
  images: {
    thumbnail: '/productPhotos/zillow/image-1.png',
    featured: '/productPhotos/zillow/image-1.png',
    gallery: [
      '/productPhotos/zillow/image-1.png',
      '/productPhotos/zillow/image-2.png'
    ]
  },
  metrics: {
    hoursSpent: 8,
    linesOfCode: 4040,
    linesOfMarkdown: 4010,
    llmCost: 36.43,
    hostingCost: 0
  },
  youtubeVideoId: '7rh6t0hSgkU',
  emailThread: {
    initialOutreach: {
      date: 'March 28, 2025',
      subject: 'Application for Principal Software Engineer Position - Real Estate Professional Health Dashboard',
      content: ''
    },
    responses: []
  }
};

export default zillowProject;