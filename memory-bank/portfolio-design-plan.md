# 10x10 Portfolio Website Design Plan

## Site Architecture

```
10x10 Portfolio
├── Home (Project Showcase)
├── Project Detail Pages (10)
├── Blog
├── Metrics & Insights
└── FAQ
```

## Technical Setup

The portfolio is being built with:

1. **NX Monorepo**: With a package for UX
2. **React**: For component-based UI
3. **TypeScript**: For type safety
4. **CSS Modules**: For component-specific styling
5. **TanStack Router**: For type-safe routing with islands architecture
6. **Vite**: For build and development
7. **Static Site Generation**: For optimal performance

### Loading Component

A loading component will be implemented that:
- Shows minimal UI during route transitions
- Includes a div with id `#placeholder` for prerendering to work correctly
- Potentially shows a subtle loading animation for longer transitions

### Image Handling

Product photos are stored at the git root and tracked with git lfs. The plan for handling images includes:

1. **Image Carousel**: For displaying multiple product photos per project
2. **Zoom Functionality**: To allow detailed viewing of larger images
3. **Image Optimization**: Using Vite build process to generate multiple sizes
4. **Lazy Loading**: To improve performance for image-heavy pages

### Project Data Structure

Each project will have a standardized data structure stored in individual files:

```typescript
interface Project {
  id: number; // 1-10
  slug: string; // e.g., "vercel"
  title: string; // e.g., "Lead Qualification System"
  company: string; // e.g., "Vercel"
  shortDescription: string;
  fullDescription: string;
  completionDate: string;
  projectDay: number;
  technologies: {
    frontend: string[];
    backend: string[];
    devops: string[];
    other: string[];
  };
  projectType: string[];
  businessValue: string[];
  features: {
    title: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  learnings: string[];
  links: {
    sourceCode?: string;
    liveDemo?: string;
  };
  images: {
    thumbnail: string;
    featured: string;
    gallery: string[];
  };
  metrics: {
    hoursSpent: number;
    linesOfCode: number;
    llmCost: number;
    hostingCost: number;
    // Other metrics from projectMetrics.md
  };
  correspondence?: {
    initialOutreach: {
      date: string;
      subject: string;
      content: string;
    };
    response?: {
      date: string;
      subject: string;
      content: string;
    };
  };
}
```

These files will be imported into their respective pages, and the Metrics & Insights page will import all of them to compute analytics.

### Favicon and HTML Updates

The plan includes:
- Generating a favicon that represents the 10x10 concept
- Updating index.html to use the favicon
- Adding appropriate meta tags for SEO and social sharing

## Left Sidebar Structure

The left sidebar shows the TOC as subbullets directly under the selected item:

```
+-------------------------------------------------------+
|  LOGO                                  HIRE ME        |
+-------------------------------------------------------+
|                |                                      |
| NAVIGATION     |                                      |
| - Projects ←   |                                      |
|   • Overview   |                                      |
|   • Grid       |           MAIN CONTENT               |
|   • Timeline   |                                      |
| - Blog         |                                      |
| - Metrics      |                                      |
| - FAQ          |                                      |
|                |                                      |
| PROJECT LIST   |                                      |
| 1. Anima       |                                      |
| 2. Hiive       |                                      |
| 3. Affirm      |                                      |
| 4. SoFi        |                                      |
| 5. Stitch Fix  |                                      |
| 6. Sourcegraph |                                      |
| 7. Vercel      |                                      |
| 8. GitLab      |                                      |
| 9. PostHog     |                                      |
| 10. Zillow     |                                      |
|                |                                      |
+-------------------------------------------------------+
|  FOOTER: Links | Social Media | Copyright             |
+-------------------------------------------------------+
```

## Page Designs

### 1. Home Page (Project Showcase)

```
+-------------------------------------------------------+
|  10x10                                     HIRE ME    |
+-------------------------------------------------------+
|                |                                      |
| NAVIGATION     |  10 PROJECTS IN 10 DAYS              |
| - Projects ←   |                                      |
|   • Overview   |  A showcase of real-world job        |
|   • Grid       |  applications built in 10 days.      |
|   • Timeline   |                                      |
| - Blog         |  [HERO IMAGE/ANIMATION]              |
| - Metrics      |                                      |
| - FAQ          |  QUICK STATS                         |
|                |  10 Projects | 10 Days | 8 Tech Stacks|
| PROJECT LIST   |  15 Features | 4 Domains | 5000+ LOC  |
| 1. Anima       |                                      |
| 2. Hiive       |  PROJECT GRID                        |
| 3. Affirm      |  +-------+  +-------+  +-------+     |
| 4. SoFi        |  |       |  |       |  |       |     |
| 5. Stitch Fix  |  | ANIMA |  | HIIVE |  | AFFIRM|     |
| 6. Sourcegraph |  |       |  |       |  |       |     |
| 7. Vercel      |  +-------+  +-------+  +-------+     |
| 8. GitLab      |                                      |
| 9. PostHog     |  +-------+  +-------+  +-------+     |
| 10. Zillow     |  |       |  |       |  |       |     |
|                |  | SOFI  |  |STITCH |  |SOURCE |     |
|                |  |       |  | FIX   |  | GRAPH |     |
|                |  +-------+  +-------+  +-------+     |
|                |                                      |
|                |  +-------+  +-------+  +-------+     |
|                |  |       |  |       |  |       |     |
|                |  |VERCEL |  |GITLAB |  |POSTHOG|     |
|                |  |       |  |       |  |       |     |
|                |  +-------+  +-------+  +-------+     |
|                |                                      |
|                |  +-------+                           |
|                |  |       |                           |
|                |  |ZILLOW |                           |
|                |  |       |                           |
|                |  +-------+                           |
|                |                                      |
|                |  TIMELINE VIEW                       |
|                |  [Interactive timeline showing the   |
|                |   10-day journey with key milestones]|
|                |                                      |
|                |  LATEST FROM THE BLOG                |
|                |  [Latest blog post preview]          |
|                |                                      |
+-------------------------------------------------------+
|  FOOTER: Links | Social Media | Copyright             |
+-------------------------------------------------------+
```

Each project card in the grid will include:
- Company logo/name
- Project title
- Visual indicator of project type
- Key technologies used
- Hover effect with brief description
- Click to view detailed project page

The home page will also feature:
1. **Quick Stats**: Key metrics across all projects
2. **Project Grid**: Visual showcase of all 10 projects
3. **Timeline View**: Chronological representation of the 10-day journey
4. **Latest Blog Post**: Preview of the most recent blog content

### 2. Project Detail Page with Metrics Section

```
+-------------------------------------------------------+
|  10x10                                     HIRE ME    |
+-------------------------------------------------------+
|                |                                      |
| NAVIGATION     |  PROJECT 7: VERCEL                   |
| - Projects     |  Lead Qualification System           |
| - Blog         |                                      |
| - Metrics      |  [FEATURED IMAGE]                    |
| - FAQ          |                                      |
|                |  PROJECT SUMMARY                     |
| PROJECT LIST   |  A sophisticated lead management     |
| 1. Anima       |  solution designed to help sales     |
| 2. Hiive       |  teams identify, score, and qualify  |
| 3. Affirm      |  leads based on behavior, profile    |
| 4. SoFi        |  data, and engagement using an       |
| 5. Stitch Fix  |  event-driven architecture.          |
| 6. Sourcegraph |                                      |
| 7. Vercel ←    |  BUSINESS VALUE                      |
|   • Overview   |  • Focus on High-Value Leads         |
|   • Features   |  • Reduce Time-to-Qualification      |
|   • Technical  |  • Account-Based Visibility          |
|   • Metrics    |  • Data-Driven Decisions             |
|   • Challenges |                                      |
|   • Learnings  |  KEY FEATURES                        |
| 8. GitLab      |  1. Intelligent Lead Scoring         |
| 9. PostHog     |  2. BANT Qualification Framework     |
| 10. Zillow     |  3. Account-Based Prospecting        |
|                |  4. Event-Driven Architecture        |
|                |  5. Intuitive User Interface         |
|                |                                      |
|                |  TECHNICAL HIGHLIGHTS                |
|                |  • Event-Driven Design               |
|                |  • Serverless Implementation         |
|                |  • NoSQL Database                    |
|                |  [Architecture diagram]              |
|                |                                      |
|                |  PROJECT METRICS                     |
|                |  • Hours Spent: 8 hours              |
|                |  • Completion Date: March 25, 2025   |
|                |  • Project Day: 7 of 10              |
|                |  • Primary Tech: React, TypeScript   |
|                |  • Lines of Code: ~5,000             |
|                |  [View detailed metrics]             |
|                |                                      |
|                |  CHALLENGES & SOLUTIONS              |
|                |  • Cold Start Performance            |
|                |  • DynamoDB Query Limitations        |
|                |                                      |
|                |  KEY LEARNINGS                       |
|                |  • Event-Driven Architecture         |
|                |  • Single-Table DynamoDB Design      |
|                |                                      |
|                |  [SOURCE CODE] [LIVE DEMO]           |
|                |                                      |
|                |  < GitLab | PostHog >                |
|                |                                      |
+-------------------------------------------------------+
|  FOOTER: Links | Social Media | Copyright             |
+-------------------------------------------------------+
```

### 3. Metrics & Insights Page

```
+-------------------------------------------------------+
|  10x10                                     HIRE ME    |
+-------------------------------------------------------+
|                |                                      |
| NAVIGATION     |  METRICS & INSIGHTS                  |
| - Projects     |                                      |
| - Blog         |  OVERVIEW                            |
| - Metrics ←    |  This page provides comparative      |
|   • Overview   |  analysis across all 10 projects,    |
|   • Comparison |  highlighting patterns, trends, and  |
|   • Technology |  insights from the 10x10 challenge.  |
|   • Time       |                                      |
|   • Complexity |  PROJECT COMPARISON                  |
|   • Learning   |  [Interactive table with sortable    |
|   • Business   |   columns showing key metrics for    |
| - FAQ          |   all 10 projects]                   |
|                |                                      |
| PROJECT LIST   |  TECHNOLOGY USAGE                    |
| 1. Anima       |  [Interactive chart showing          |
| 2. Hiive       |   technology usage across projects]  |
| 3. Affirm      |                                      |
| 4. SoFi        |  TIME ALLOCATION                     |
| 5. Stitch Fix  |  [Chart showing hours spent per      |
| 6. Sourcegraph |   project and breakdown of           |
| 7. Vercel      |   activities]                        |
| 8. GitLab      |                                      |
| 9. PostHog     |  COMPLEXITY COMPARISON               |
| 10. Zillow     |  [Radar chart comparing complexity   |
|                |   dimensions across projects]        |
|                |                                      |
|                |  LEARNING PROGRESSION                |
|                |  [Timeline showing skill development |
|                |   across the 10-day journey]         |
|                |                                      |
|                |  BUSINESS IMPACT                     |
|                |  [Visualization of business value    |
|                |   categories addressed]              |
|                |                                      |
|                |  KEY INSIGHTS                        |
|                |  1. Most projects utilized AWS       |
|                |     serverless architecture          |
|                |  2. React and TypeScript were used   |
|                |     in all projects                  |
|                |  3. Average completion time was      |
|                |     8.2 hours per project            |
|                |                                      |
+-------------------------------------------------------+
|  FOOTER: Links | Social Media | Copyright             |
+-------------------------------------------------------+
```

### 4. FAQ Page

```
+-------------------------------------------------------+
|  10x10                                     HIRE ME    |
+-------------------------------------------------------+
|                |                                      |
| NAVIGATION     |  FREQUENTLY ASKED QUESTIONS          |
| - Projects     |                                      |
| - Blog         |  ABOUT THE 10x10 CHALLENGE           |
| - Metrics      |                                      |
| - FAQ ←        |  Q: What is the 10x10 challenge?     |
|   • Challenge  |  A: The 10x10 challenge involved     |
|   • Projects   |  creating 10 unique projects as job  |
|   • Technical  |  applications over a 10-day period.  |
|   • Process    |  Each project demonstrates technical |
|   • Personal   |  skills and problem-solving for a    |
|                |  specific company and role.          |
| PROJECT LIST   |                                      |
| 1. Anima       |  Q: How were the companies selected? |
| 2. Hiive       |  A: Companies were chosen based on   |
| 3. Affirm      |  interesting technical challenges,   |
| 4. SoFi        |  alignment with my skills, and       |
| 5. Stitch Fix  |  positions I'd genuinely want.       |
| 6. Sourcegraph |                                      |
| 7. Vercel      |  ABOUT THE PROJECTS                  |
| 8. GitLab      |                                      |
| 9. PostHog     |  Q: Are these projects production-   |
| 10. Zillow     |  ready?                              |
|                |  A: These projects are functional    |
|                |  prototypes built in a single day.   |
|                |  They demonstrate core concepts but  |
|                |  would need additional work for      |
|                |  production use.                     |
|                |                                      |
|                |  TECHNICAL QUESTIONS                 |
|                |                                      |
|                |  Q: Why use AWS for most projects?   |
|                |  A: AWS provides a comprehensive     |
|                |  serverless ecosystem that enables   |
|                |  rapid development of scalable       |
|                |  applications.                       |
|                |                                      |
|                |  ABOUT ME                            |
|                |                                      |
|                |  Q: Who created these projects?      |
|                |  A: [Brief personal introduction]    |
|                |                                      |
|                |  CONTACT INFORMATION                 |
|                |  Email: example@email.com            |
|                |  LinkedIn: /in/username              |
|                |  GitHub: /username                   |
|                |                                      |
+-------------------------------------------------------+
|  FOOTER: Links | Social Media | Copyright             |
+-------------------------------------------------------+
```

## Metrics Display Strategy

A dual approach to metrics display:

### 1. Project-Level Metrics

Each project detail page includes a dedicated metrics section:

```
+--------------------------------------------------+
|  PROJECT METRICS                                 |
|                                                  |
|  PROJECT OVERVIEW                                |
|  • Project Summary: A sophisticated lead         |
|    management solution...                        |
|  • Value Proposition: Demonstrates technical     |
|    expertise...                                  |
|                                                  |
|  COMPANY & POSITION                              |
|  • Company: Vercel (350-500 employees)           |
|  • Industry: Developer Tools                     |
|  • Position: Head of GTM Systems                 |
|  • Comp Range: $300K-$400K                       |
|                                                  |
|  EXECUTION METRICS                               |
|  • Hours Spent: 8 hours                          |
|  • Completion Date: March 25, 2025               |
|  • Project Day: 7 of 10                          |
|                                                  |
|  TECHNICAL DETAILS                               |
|  • Primary Tech: React, TypeScript, Express.js   |
|  • Secondary: AWS CDK, CloudFront, API Gateway   |
|  • Lines of Code: ~5,000                         |
|                                                  |
|  RESOURCE UTILIZATION                            |
|  • LLM Cost: $41.39                              |
|  • Hosting Cost: $0                              |
|                                                  |
|  LEARNING OUTCOMES                               |
|  • New Tech: TanStack Router, AWS CDK            |
|  • Skills Improved: Event-driven architecture    |
|  • Key Challenges: Cold start performance        |
|                                                  |
|  PROJECT CLASSIFICATION                          |
|  • Type: Full-Stack Web Application              |
|  • Focus: Sales & Marketing Systems              |
|  • Business Value: Operational Efficiency        |
+--------------------------------------------------+
```

### 2. Cross-Project Metrics & Insights Page

A dedicated page for comparative analysis across all projects:

```
+--------------------------------------------------+
|  METRICS & INSIGHTS                              |
|                                                  |
|  TECHNOLOGY USAGE                                |
|  [Interactive chart showing technology usage     |
|   across all 10 projects]                        |
|                                                  |
|  TIME ALLOCATION                                 |
|  [Chart showing hours spent per project and      |
|   breakdown of activities]                       |
|                                                  |
|  COMPLEXITY COMPARISON                           |
|  [Radar chart comparing complexity dimensions    |
|   across projects]                               |
|                                                  |
|  LEARNING PROGRESSION                            |
|  [Timeline showing skill development across      |
|   the 10-day journey]                            |
|                                                  |
|  EFFICIENCY METRICS                              |
|  • Avg Hours Per Project: 8.2                    |
|  • Avg Lines of Code: 4,800                      |
|  • Avg Features Per Project: 5.3                 |
|  • Efficiency Ratio: 1.6 hours per feature       |
|                                                  |
|  TECHNOLOGY DIVERSITY                            |
|  • Unique Technologies: 24                       |
|  • Most Used: React (10), TypeScript (10)        |
|  • Least Used: Java (1), Go (1)                  |
|                                                  |
|  BUSINESS IMPACT                                 |
|  • Industries Addressed: 7                       |
|  • Business Value Categories: 12                 |
|  • Primary Focus Areas: [Pie chart]              |
+--------------------------------------------------+
```

## Mobile Responsiveness

Mobile support is a key requirement. The design will adapt for mobile devices as follows:

### Mobile Navigation

```
+------------------------+
| 10x10      MENU  HIRE |
+------------------------+
|                        |
| [Breadcrumb navigation]|
|                        |
| [Content...]           |
|                        |
+------------------------+
```

When the menu is expanded:

```
+------------------------+
| 10x10      CLOSE HIRE |
+------------------------+
| NAVIGATION             |
| - Projects ←           |
|   • Overview           |
|   • Grid               |
|   • Timeline           |
| - Blog                 |
| - Metrics              |
| - FAQ                  |
|                        |
| PROJECT LIST           |
| 1. Anima               |
| 2. Hiive               |
| ...                    |
+------------------------+
```

### Mobile Project Detail Page

```
+------------------------+
| 10x10      MENU  HIRE |
+------------------------+
| PROJECT 7: VERCEL      |
| Lead Qualification     |
|                        |
| [FEATURED IMAGE]       |
|                        |
| [Section navigation]   |
| Overview Features Tech |
|                        |
| PROJECT SUMMARY        |
| A sophisticated lead   |
| management solution... |
|                        |
| BUSINESS VALUE         |
| • Focus on High-Value  |
|   Leads                |
| • Reduce Time-to-      |
|   Qualification        |
| ...                    |
+------------------------+
```

## Email Correspondence Integration

To incorporate email correspondence related to the projects:

1. **Project-Specific Correspondence Section**:
   Add a "Correspondence" tab to each project detail page showing the email exchange related to that specific project.

2. **Email Template Showcase**:
   Create a section in the FAQ page that showcases the email templates used for different types of applications.

Example correspondence section:

```
+--------------------------------------------------+
|  PROJECT CORRESPONDENCE                          |
|                                                  |
|  INITIAL OUTREACH - March 25, 2025               |
|  +--------------------------------------------+  |
|  | Subject: Head of GTM Systems Application   |  |
|  |                                            |  |
|  | Dear [Recipient],                          |  |
|  |                                            |  |
|  | I'm writing to apply for the Head of GTM   |  |
|  | Systems position at Vercel. To demonstrate |  |
|  | my capabilities, I've built a complete     |  |
|  | lead qualification system that showcases   |  |
|  | my understanding of GTM operations and     |  |
|  | technical implementation skills.           |  |
|  |                                            |  |
|  | [View full email]                          |  |
|  +--------------------------------------------+  |
|                                                  |
|  RESPONSE - [Date]                               |
|  +--------------------------------------------+  |
|  | Subject: Re: Head of GTM Systems           |  |
|  |                                            |  |
|  | [Response content or "Awaiting response"]  |  |
|  |                                            |  |
|  | [View full email]                          |  |
|  +--------------------------------------------+  |
+--------------------------------------------------+
```

## Implementation Plan

### Phase 1: Core Structure
1. Set up NX monorepo
2. Implement the two-column layout with expandable sidebar
3. Create responsive behavior for layout

### Phase 2: Project Showcase
1. Implement home page with project grid
2. Create project detail page template
3. Populate with real project data

### Phase 3: Supporting Pages
1. Implement blog functionality
2. Create insights visualizations
3. Develop FAQ page

### Phase 4: Polish & Launch
1. Implement dark/light mode
2. Add animations and transitions
3. Optimize for performance
4. Deploy to hosting platform