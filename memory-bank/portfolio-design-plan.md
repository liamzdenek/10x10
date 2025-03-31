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

A loading component has been implemented that:
- Shows minimal UI during route transitions
- Includes a div with id `#loading` for prerendering to work correctly
- Shows a subtle loading animation for longer transitions

### Prerendering Configuration

The build process has been configured to automatically prerender all pages:

1. **Route Generation**: A utility function extracts routes from project data
2. **Combined Routes**: Base routes and project routes are combined for prerendering
3. **Loading Detection**: The PuppeteerRenderer waits for the `#loading` element to disappear
4. **Static HTML**: All pages are prerendered as static HTML for optimal performance

### Image Handling

Product photos are stored at the git root and tracked with git lfs. The plan for handling images includes:

1. **Image Carousel**: For displaying multiple product photos per project
2. **Zoom Functionality**: To allow detailed viewing of larger images
3. **Image Optimization**: Using Vite build process to generate multiple sizes
4. **Lazy Loading**: To improve performance for image-heavy pages

### Project Data Structure

Each project has a standardized data structure stored in individual files:

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
    linesOfMarkdown: number;
    llmCost: number;
    hostingCost: number;
  };
  emailThread?: {
    initialOutreach: {
      date: string;
      subject: string;
      content: string;
    };
    responses: {
      date: string;
      subject: string;
      content: string;
    }[];
  };
}
```

These files are imported into their respective pages, and the Metrics & Insights page will import all of them to compute analytics.

### Favicon and HTML Updates

The plan includes:
- Generating a favicon that represents the 10x10 concept
- Updating index.html to use the favicon
- Adding appropriate meta tags for SEO and social sharing

## Layout Structure

The layout has been implemented with:

1. **Sidebar**: Fixed-width sidebar with navigation and project list
2. **Header**: Contains page title and CTA button
3. **Main Content**: Responsive container with maximum width
4. **Content Container**: White background with subtle shadow

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
| - Blog         |                                      |
| - Metrics      |  QUICK STATS                         |
| - FAQ          |  10 Projects | 10 Days | 8 Tech Stacks|
|                |  15 Features | 4 Domains | 5000+ LOC  |
| PROJECT LIST   |                                      |
| 1. Anima       |  PROJECT GRID                        |
| 2. Hiive       |  +-------+  +-------+  +-------+     |
| 3. Affirm      |  |       |  |       |  |       |     |
| 4. SoFi        |  | ANIMA |  | HIIVE |  | AFFIRM|     |
| 5. Stitch Fix  |  |       |  |       |  |       |     |
| 6. Sourcegraph |  +-------+  +-------+  +-------+     |
| 7. Vercel      |                                      |
| 8. GitLab      |  +-------+  +-------+  +-------+     |
| 9. PostHog     |  |       |  |       |  |       |     |
| 10. Zillow     |  | SOFI  |  |STITCH |  |SOURCE |     |
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

Each project card in the grid includes:
- Company name
- Project title
- Project type tags
- Brief description
- Hover effect with subtle elevation
- Click to view detailed project page

The home page also features:
1. **Quick Stats**: Key metrics across all projects
2. **Project Grid**: Visual showcase of all 10 projects
3. **Timeline View**: Chronological representation of the 10-day journey
4. **Latest Blog Post**: Preview of the most recent blog content

### 2. Project Detail Page

The project detail page currently displays the project data as JSON. The planned full implementation will include:

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

### 3. FAQ Page

A basic FAQ page has been implemented with sample questions and answers:

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

## Mobile Responsiveness

Mobile support has been implemented with:

1. **Responsive Layout**: Adapts to different screen sizes
2. **Stacked Layout**: Sidebar moves to top on mobile
3. **Adjusted Spacing**: Reduced padding and margins
4. **Responsive Grid**: Project grid adjusts columns based on viewport

## Implementation Progress

### Completed
1. ✅ Set up NX monorepo
2. ✅ Implement the two-column layout with sidebar
3. ✅ Create responsive behavior for layout
4. ✅ Implement home page with project grid
5. ✅ Create project detail page template
6. ✅ Set up data structure for projects
7. ✅ Implement FAQ page
8. ✅ Configure prerendering for all pages

### In Progress
1. 🔄 Populate with real project data
2. 🔄 Implement full project detail page UI
3. 🔄 Add image assets for projects

### Planned
1. 📅 Implement blog functionality
2. 📅 Create insights visualizations
3. 📅 Add animations and transitions
4. 📅 Optimize for performance
5. 📅 Deploy to hosting platform

## Next Steps

1. Complete the project detail page UI
2. Add image assets for each project
3. Implement the blog section
4. Create the metrics & insights page
5. Add animations and transitions
6. Deploy to hosting platform