import { Project } from '../types';


const FIRST_EMAIL = `
Hey [Co-Founder and CPTO], [Co-Founder and CRO], and the team at Hiive,

I'm Liam[1]. I'm a hands-on SWE with 14 YOE and a track record of impact. I'm interested in applying to the open Principal Engineer role at Hiive[2]

I made a project to apply to Hiive instead of sending a traditional application. I completed this project in about 7 hours by leveraging Agentic LLM development workflows. I recorded a five minute demo, linked below, but here is the quick summary:

1. AI Market Sentiment Analyzer that addresses a critical challenge in private markets: information asymmetry. News articles are processed for sentiment, and then shared with Hiive's market participants.
2. Tech: Typescript, Lambda, S3, CloudFront, API Gateway, Vite + Typescript + React
3. Focus on solving a real problem rapidly and not getting caught on technical perfectionism
4. I chose a project that centers customer-oriented and growth-oriented thinking, accelerating the Hiive flywheel maximally
5. I'm drawn to Hiive because of the overlap between our goals. Particularly, I believe that I can accomplish my major learning goal at Hiive (improving my product-oriented thinking), and I believe that I can ship real features that meaningfully accelerate Hiive's growth at the same time.

5 Minute AI Market Sentiment Analyzer Demo Video

As I mention in the video, you can actually use the demo application here.

Even though I don't mention it, you can find the source code here.

If you're interested in seeing more, I have a lot more pieces of relevant experience to Hiive, focusing on domains such as conflict resolution, team culture, crawl-to-run projects, teaching, outbound sales, empathetic communication, intentionality, etc. I can also do Leetcode, if you insist. But I'll save that for a future discussion.

Thank you for your consideration, and I look forward to hearing back.

Thanks,
Liam Zdenek



P.S. I previously worked with your Principal Engineer [Name] at [Company] as equals under different orgs. We worked together on a project where I had to deliver features in a UX he owned. I am optimistic that he will give you an honest and net-positive review of me.

[1] [LinkedIn Link]
[2] [Job Listing Link]
`.trim();

const SECOND_EMAIL = `
Hey [Co-Founder and CPTO] and [Co-Founder and CRO],

In the meantime, I've been doing one of these projects every day to put together a portfolio of 10 from-scratch projects in 10 days.

If you're interested in chatting, let me know. If not, I'd appreciate some feedback on why it's not a fit. Thanks.

- Liam
`.trim();

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
  youtubeVideoId: 'g2M-KmRJ1zc',
  emailThread: {
    messages: [
      {
        direction: 'sent',
        author: 'Liam Zdenek',
        date: 'March 18, 2025',
        subject: 'AI Market Sentiment Analyzer / Principal SWE Application',
        content: FIRST_EMAIL
      },
      {
        direction: 'sent',
        author: 'Liam Zdenek',
        date: 'March 26, 2025',
        subject: 'Re: AI Market Sentiment Analyzer / Principal SWE Application',
        content: SECOND_EMAIL
      }
    ]
  }
};

export default hiiveProject;