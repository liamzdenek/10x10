# Technical Context: 10x10 Job Application Portfolio

## Technology Stack

### Portfolio Website
- **Framework**: React with Next.js
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: React Context API for simple state management
- **Routing**: Next.js built-in routing
- **Content Management**: Static generation with incremental static regeneration
- **Deployment**: Vercel for seamless Next.js deployment

### Project Integration
- **Memory Bank Access**: File system integration with symbolic links
- **Metadata Extraction**: Node.js scripts for parsing markdown and extracting metadata
- **Demo Embedding**: iframes for interactive demos where applicable
- **Code Highlighting**: Prism.js for syntax highlighting of code snippets
- **Diagram Rendering**: Mermaid.js for rendering architecture diagrams

### Analytics and Tracking
- **Usage Analytics**: Google Analytics 4 for comprehensive user behavior tracking
- **Performance Monitoring**: Next.js Analytics for core web vitals
- **Error Tracking**: Sentry for error monitoring and reporting
- **Conversion Tracking**: Google Analytics goals and events for measuring portfolio effectiveness
- **Custom Reporting**: Google Analytics dashboards for project comparison metrics

## Development Environment

### Prerequisites
- Node.js 18+ with npm or yarn
- Git for version control
- Text editor or IDE (VS Code recommended)
- Basic understanding of React and Next.js

### Project Setup
```bash
# Clone repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Project Structure
```
.
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components
│   │   ├── projects/       # Project-specific components
│   │   └── shared/         # Shared UI components
│   ├── pages/              # Next.js pages
│   │   ├── projects/       # Project detail pages
│   │   └── api/            # API routes
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   └── lib/                # Library code
│       ├── memory-bank/    # Memory bank integration
│       └── projects/       # Project metadata handling
├── memory-bank/            # Portfolio memory bank
├── remote-memory-banks/    # Symbolic links to project memory banks
├── scripts/                # Build and utility scripts
└── next.config.js          # Next.js configuration
```

## Code Style and Conventions

### React/Next.js
- **Component Files**: PascalCase.tsx with named exports
- **Hooks**: camelCase.ts with usePrefix
- **Pages**: kebab-case.tsx for URL clarity
- **TypeScript**: Strict mode enabled
- **Component Structure**: Functional components with hooks
- **Props**: Interface definitions for component props
- **Styling**: Tailwind CSS with component classes

### Documentation
- **Code Comments**: JSDoc style for functions and components
- **README**: Comprehensive project documentation
- **Memory Bank**: Structured documentation in markdown format
- **Type Definitions**: Clear interfaces and types for all data structures

## Dependencies

### Core Dependencies
- React 18+
- Next.js 13+
- TypeScript 5+
- Tailwind CSS 3+
- React Icons
- Gray Matter (for markdown parsing)
- Remark (for markdown processing)

### Development Dependencies
- ESLint
- Prettier
- TypeScript
- Jest
- React Testing Library
- Husky (for git hooks)
- Lint-staged

## Technical Constraints

### Performance Requirements
- **Initial Load Time**: < 2s for landing page
- **Time to Interactive**: < 3s for project pages
- **Lighthouse Score**: 90+ for all categories
- **Core Web Vitals**: Pass all metrics

### Accessibility Considerations
- **WCAG Compliance**: AA level compliance
- **Keyboard Navigation**: Full support for keyboard navigation
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio for text

### SEO Requirements
- **Meta Tags**: Proper title, description, and OG tags for all pages
- **Structured Data**: JSON-LD for projects and portfolio
- **Sitemap**: Automatic generation of sitemap.xml
- **Robots.txt**: Proper configuration for search engines

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Progressive Enhancement**: Core functionality works without JS

## Development Workflow

### Version Control
- **Branching Strategy**: Feature branches with pull requests
- **Commit Style**: Conventional commits (feat, fix, docs, etc.)
- **Pre-commit Hooks**: Linting and formatting checks
- **CI/CD**: Automated testing and deployment

### Testing Strategy
- **Unit Tests**: For utility functions and hooks
- **Component Tests**: For UI components
- **Integration Tests**: For page rendering and interactions
- **Accessibility Tests**: Automated a11y testing

### Deployment Process
- **Environment Variables**: Managed through Vercel
- **Preview Deployments**: Automatic for pull requests
- **Production Deployment**: Automatic on main branch
- **Rollback Strategy**: Quick rollback through Vercel dashboard

## Project Integration

### Memory Bank Integration
The portfolio integrates with project memory banks through:

1. **Symbolic Links**: Remote memory banks are linked to the portfolio
2. **Metadata Extraction**: Scripts parse memory bank files to extract project information
3. **Content Projection**: Memory bank content is transformed into portfolio components
4. **Update Mechanism**: Changes to project memory banks are reflected in the portfolio

### Project Demo Integration
Projects can be integrated into the portfolio through:

1. **Embedded Demos**: iframes for interactive web applications
2. **Video Demonstrations**: Recorded demos for non-web projects
3. **Screenshot Galleries**: Visual showcases with explanations
4. **Code Snippets**: Highlighted code examples with explanations

### Source Code Access
Source code is made available through:

1. **GitHub Links**: Direct links to project repositories
2. **Code Viewers**: Embedded code viewers for key files
3. **Gists**: Embedded code snippets for specific examples
4. **Download Options**: Downloadable source code archives

## Future Technical Considerations

1. **Internationalization**: Adding support for multiple languages
2. **Dark Mode**: Implementing theme switching
3. **Advanced Filtering**: More sophisticated project filtering and search
4. **Interactive Timeline**: Visual representation of the 10-day journey
5. **PDF Generation**: Downloadable portfolio summary for offline sharing
6. **Authentication**: Protected areas for works in progress or sensitive projects
7. **Comments System**: Allowing feedback on projects
8. **Analytics Dashboard**: More detailed usage statistics and insights