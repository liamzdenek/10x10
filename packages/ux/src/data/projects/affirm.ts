import { Project } from '../types';

const FIRST_EMAIL = `
Hello [SVP Product], [SVP Engineering], [President and ex-CTO], and the team at Affirm,

I'm Liam[1]. I'm a hands-on SWE with 14 YOE and a track record of exceptional impact. I'm interested in working in Engineering at Affirm.

I made a project to apply to Affirm instead of sending a traditional application. I completed this project in about 7 hours by leveraging Agentic LLM development workflows. I recorded a five minute demo, linked below, but here is the quick summary:

1. I've created a Merchant Analytics Dashboard that addresses a critical challenge in the BNPL space: merchant and commercial partners' visibility into the business impact of offering Affirm.
2. Tech: Typescript, Lambda, S3, DynamoDB, CloudFront, API Gateway, Vite + Typescript + React
3. Focus on solving a real problem rapidly and not getting caught on technical perfectionism
4. I chose a project that centers key challenges to Affirm's business, demonstrating my product-oriented thinking.
5. I'm drawn to Affirm because of the overlap between our goals. Particularly, I believe that I can accomplish my major learning goal at Affirm (improving my product-oriented thinking), and I believe that I can ship real features that meaningfully impact Affirm's business outcomes and key risks at the same time.

5 Minute Merchant Analytics Dashboard Demo Video

As I mention in the video, you can actually use the demo application here.

Even though I don't mention it, you can find the source code here.

If you're interested in hearing more, I have a lot more pieces of relevant experience to Affirm, focusing on domains such as crawl-to-run projects, teaching, empathetic communication, intentionality and accountability, etc. I can also do Leetcode, if you insist. But I'll save that for a future discussion.

Thank you for your consideration, and I look forward to hearing back.

Thanks,
Liam Zdenek

[1] [LinkedIn Link]
`.trim();

const SECOND_EMAIL = `
Very cool. Thank you for putting this together and sharing. We'll ask the engineering recruiting team to follow-up with you.

Best,

-[President]
`.trim();

const THIRD_EMAIL = `
Hey Libor. Thanks for watching & I'm glad you enjoyed it. I'm very appreciative of your time. Thanks for connecting me with the right people. I'm excited to hear from them. - Liam
`.trim();

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
    messages: [
      {
        direction: 'sent',
        author: 'Liam Zdenek',
        date: 'March 19, 2025 @ 4:49 PM',
        subject: 'Merchant Analytics Dashboard / Principal SWE Application',
        content: FIRST_EMAIL
      },
      {
        direction: 'received',
        author: '[President]',
        date: 'March 19, 2025 @ 8:24 PM',
        subject: 'RE: Merchant Analytics Dashboard / Principal SWE Application',
        content: SECOND_EMAIL
      },
      {
        direction: 'sent',
        author: 'Liam Zdenek',
        date: 'March 20, 2025 @ 9:02 AM',
        subject: 'RE: Merchant Analytics Dashboard / Principal SWE Application',
        content: THIRD_EMAIL
      },
    ]
  }
};

export default affirmProject;