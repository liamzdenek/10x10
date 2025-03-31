# Project: Vercel Lead Qualification System

## Project Metrics

### Project Overview
- **Project Summary**: A sophisticated lead management solution designed to help sales teams identify, score, and qualify leads based on behavior, profile data, and engagement using an event-driven architecture.
- **Project Value Proposition**: Demonstrates technical expertise and understanding of GTM systems for the Head of GTM Systems role at Vercel by implementing a complete lead qualification system in a single day.

### Company Information
- **Company Name**: Vercel
- **Company Size**: 350-500 employees
- **Industry**: Developer Tools / Cloud Infrastructure
- **Location**: San Francisco, CA (Remote)
- **Funding Stage**: Series C ($150M)
- **Public/Private**: Private

### Position Details
- **Title Sought**: Head of GTM Systems
- **Sent to Who**: VP of Engineering, CTO, Head of Talent
- **Stated Base Salary**: $200,000 - $250,000
- **Estimated Total Comp**: $300,000 - $400,000

### Project Execution
- **Hours Spent**: 8 hours
- **Completion Date**: March 25, 2025
- **Project Day**: Day 7 of 10x10 Challenge

### Technical Metrics
- **Primary Technologies**: React, TypeScript, Express.js, AWS Lambda, DynamoDB, SQS
- **Secondary Technologies**: AWS CDK, CloudFront, API Gateway, Zod, React Query, TanStack Router
- **Lines of Code**: 9371 + 3506 md
- **Deployment Mechanism**: AWS CDK with automated CI/CD pipeline

### Resource Utilization
- **LLM Dollars Spent**: $41.39
- **Hosting Dollars Spent**: $0

### Learning Metrics
- **New Technologies Learned**: TanStack Router, AWS CDK NodejsFunction construct
- **Skills Improved**: Event-driven architecture, DynamoDB single-table design, Serverless deployment
- **Key Challenges**:
  - Cold start performance in Lambda functions
  - DynamoDB query limitations with complex access patterns
  - CORS configuration for cross-origin requests
  - Environment variable handling across environments

### Application Impact
- **Response Received**: [To be determined]
- **Response Time**: [To be determined]
- **Response Type**: [To be determined]
- **Feedback Received**: [To be determined]
- **Interview Conversion**: [To be determined]

### Project Tagging
- **Project Type**: Full-Stack Web Application
- **Primary Focus**: Sales & Marketing Systems
- **Business Value**: Operational Efficiency, Revenue Growth
- **Technical Category**: Event-Driven Architecture, Serverless Computing
- **Demonstration Goal**: Technical Expertise, Domain Knowledge

## Project Summary
The Vercel Lead Qualification System is a sophisticated lead management solution designed to help sales teams identify, score, and qualify leads based on behavior, profile data, and engagement. Built with an event-driven architecture, the system processes lead activities in real-time, automatically scoring and qualifying leads to prioritize sales efforts.

## Business Value
- **Focus on High-Value Leads**: Automatically identifies the most promising leads
- **Reduce Time-to-Qualification**: Accelerates the qualification process through automated scoring
- **Account-Based Visibility**: Provides a holistic view of all leads within an account
- **Data-Driven Decisions**: Enables objective decision-making based on lead quality metrics
- **Campaign Effectiveness**: Measures which marketing efforts generate quality leads
- **Lead Quality Metrics**: Provides objective metrics for lead quality assessment
- **Conversion Insights**: Shows which lead sources and activities lead to qualification
- **Process Standardization**: Establishes consistent qualification criteria
- **Data Integration**: Centralizes lead data from multiple sources
- **Performance Visibility**: Provides clear metrics on sales pipeline health

## Key Features
1. **Intelligent Lead Scoring**
   - Multi-factor scoring algorithm (profile, engagement, recency)
   - Configurable scoring rules
   - Real-time score updates based on lead activities

2. **BANT Qualification Framework**
   - Automated evaluation of Budget, Authority, Need, and Timeline
   - Inference of qualification criteria from behavior
   - Manual override capabilities for sales representatives

3. **Account-Based Prospecting**
   - Automatic association of leads with accounts
   - Account-level scoring and insights
   - Holistic view of all leads within an account

4. **Event-Driven Architecture**
   - Real-time processing of lead activities
   - Extensible event types for various interactions
   - Asynchronous processing for scalability

5. **Intuitive User Interface**
   - Dashboard with lead quality distribution
   - Qualified leads view with sorting and filtering
   - Detailed lead and account profiles
   - Event simulation for demonstration purposes
   - "My Leads" page for sales representatives

## Technical Highlights
- **Event-Driven Design**: Processes events asynchronously for scalability
- **Serverless Implementation**: Uses AWS Lambda for compute
- **NoSQL Database**: Leverages DynamoDB for flexible data storage
- **Single-Page Application**: React frontend for responsive user experience
- **12-Factor App**: Follows cloud-native best practices
- **Infrastructure as Code**: AWS CDK for deployment
- **Scalable Components**: Automatically scales with demand
- **Resilient Design**: Handles failures gracefully
- **Monorepo Structure**: NX workspace for code organization
- **TypeScript**: Type-safe code throughout the stack
- **Component-Based UI**: Reusable React components
- **API-First Design**: Well-defined API contracts

## Architecture
The system follows an event-driven architecture with clear separation of concerns:

1. **Frontend Layer**: React application with CSS modules and TanStack Router
2. **API Layer**: Express API served by AWS Lambda over API Gateway
3. **Event Processing**: SQS queue with Lambda consumer for asynchronous processing
4. **Storage Layer**: DynamoDB with single-table design for efficient data access
5. **CDN Layer**: CloudFront distribution for frontend content delivery

## Key Decisions
1. **NodejsFunction for Lambda Deployment**: Automatically bundles dependencies with esbuild
2. **Single Processing Lambda**: Simplifies architecture and deployment
3. **Express API over GraphQL**: Faster to implement in a one-day project
4. **DynamoDB Single-Table Design**: Efficient querying with GSIs
5. **Event-Driven Architecture**: Decouples event producers from processors
6. **React Query for Data Management**: Built-in caching and refetching
7. **Component-Specific CSS Modules**: Better encapsulation, improved maintainability
8. **TanStack Router Implementation**: Modern, type-safe routing solution

## Challenges Overcome
1. **Cold Start Performance**: Implemented strategies to mitigate Lambda cold starts
2. **DynamoDB Query Limitations**: Designed access patterns carefully to avoid full table scans
3. **Event Processing Reliability**: Implemented proper error handling and retry mechanisms
4. **CORS Configuration**: Implemented comprehensive CORS support in the backend
5. **Environment Variable Handling**: Improved environment variable handling for API URL configuration
6. **BANT Notes Not Appearing**: Fixed the issue with BANT notes not appearing in API responses
7. **Missing Account Leads Endpoint**: Implemented the endpoint for getting leads by account ID
8. **Account Leads Count Display Issue**: Fixed the account leads count display issue

## Results
- Successfully implemented a complete lead qualification system in a single day
- Demonstrated technical expertise in building scalable, event-driven systems
- Showcased understanding of GTM operations and sales processes
- Created a polished, demonstrable product with realistic test data
- Deployed a fully functional system to AWS with proper infrastructure as code

## Lessons Learned
1. **Event-Driven Architecture**: Effective for decoupling components and enabling scalability
2. **Single-Table DynamoDB Design**: Powerful but requires careful planning of access patterns
3. **Serverless Deployment**: Provides excellent scalability but introduces cold start challenges
4. **Infrastructure as Code**: Essential for consistent, repeatable deployments
5. **Environment Variable Management**: Critical for configuration across environments
6. **Error Handling**: Comprehensive error handling is essential for system reliability
7. **CORS Configuration**: Proper CORS setup is crucial for frontend-backend communication
8. **Data Population**: Realistic test data is important for demonstrating system capabilities

## Future Opportunities
1. **Integration with CRM Systems**: Connect with Salesforce or other CRM platforms
2. **AI-Powered Scoring**: Enhance scoring with machine learning models
3. **Advanced Analytics**: Add detailed reporting and predictive analytics
4. **Multi-Channel Tracking**: Expand event types to cover more interaction channels
5. **Automation Rules**: Add configurable automation based on lead scores and activities
6. **Authentication and Authorization**: Implement proper user authentication and role-based access
7. **Mobile Application**: Create a mobile companion app for sales representatives
8. **Webhook Integrations**: Enable integration with external systems via webhooks

## Project Metrics
- **Timeline**: Completed in 1 day
- **Team Size**: Solo developer
- **Lines of Code**: ~5,000
- **Components Created**: ~25 frontend components, ~10 backend services
- **API Endpoints**: ~20
- **Database Tables**: 1 (single-table design with GSIs)
- **AWS Resources**: Lambda, API Gateway, DynamoDB, SQS, S3, CloudFront
- **Deployment Time**: ~15 minutes for full stack deployment

## Links
- **Frontend**: https://d2v7c22doct7nk.cloudfront.net
- **API**: https://rvpu6cwpfl.execute-api.us-west-2.amazonaws.com/dev/
- **Repository**: Not publicly available (demo project)

# Project Retrospective: Vercel Lead Qualification System

## What Went Well

Based on the project documentation:

1. **Event-Driven Architecture**: The event-driven architecture worked well, allowing for clean separation of concerns and asynchronous processing of lead activities.

2. **DynamoDB Single-Table Design**: The single-table design provided efficient querying with GSIs and simplified the database structure.

3. **AWS CDK Deployment**: The infrastructure as code approach with AWS CDK made deployment consistent and repeatable.

4. **React Frontend**: The React frontend with CSS modules and TanStack Router created a clean, maintainable UI.

5. **Serverless Implementation**: The serverless approach with AWS Lambda provided excellent scalability and cost efficiency.

## Challenges Faced

Based on the project documentation:

1. **Cold Start Performance**: Lambda cold starts could impact the user experience.

2. **DynamoDB Query Limitations**: Some complex queries were challenging with DynamoDB, requiring careful design of access patterns.

3. **Event Processing Reliability**: Ensuring all events were processed correctly and in order required proper error handling and retry mechanisms.

4. **CORS Configuration**: Implementing comprehensive CORS support for cross-origin requests required careful configuration.

5. **Environment Variable Handling**: Passing environment variables correctly across different environments required special attention.

6. **BANT Notes Not Appearing**: The BANT notes were not appearing in the API responses, requiring updates to all lead-related endpoints.

7. **Missing Account Leads Endpoint**: The endpoint for getting leads by account ID was missing and needed to be implemented.

8. **Account Leads Count Display Issue**: The "Leads" field under account information was always showing zero, requiring updates to the account endpoints.

## What Would Be Done Differently with More Time

Based on the project documentation:

1. **Implement Authentication**: Add proper authentication and authorization for a production-ready system.

2. **Add Comprehensive Testing**: Implement unit tests, integration tests, and end-to-end tests for better code quality.

3. **Enhance Analytics**: Add more detailed reporting and analytics capabilities.

4. **Improve Mobile Responsiveness**: Enhance the UI for better mobile experience.

5. **Implement Webhooks**: Add webhook support for integration with external systems.

6. **Add AI-Powered Scoring**: Enhance the lead scoring algorithm with machine learning models.

7. **Optimize Cold Starts**: Implement strategies to mitigate Lambda cold starts, such as provisioned concurrency.

8. **Add Multi-Channel Tracking**: Expand event types to cover more interaction channels.

## Key Learnings

Based on the project documentation:

1. **Event-Driven Architecture**: Effective for decoupling components and enabling scalability.

2. **Single-Table DynamoDB Design**: Powerful but requires careful planning of access patterns.

3. **Serverless Deployment**: Provides excellent scalability but introduces cold start challenges.

4. **Infrastructure as Code**: Essential for consistent, repeatable deployments.

5. **Environment Variable Management**: Critical for configuration across environments.

6. **Error Handling**: Comprehensive error handling is essential for system reliability.

7. **CORS Configuration**: Proper CORS setup is crucial for frontend-backend communication.

8. **Data Population**: Realistic test data is important for demonstrating system capabilities.

## Differences from Previous Projects

Based on the project documentation:

1. **One-Day Timeline**: This project was completed in a single day, demonstrating rapid development capabilities.

2. **Event-Driven Focus**: Unlike some previous projects, this one heavily emphasized event-driven architecture.

3. **Serverless Architecture**: This project used a fully serverless approach with AWS Lambda, API Gateway, and DynamoDB.

4. **Sales & Marketing Domain**: This project focused on the sales and marketing domain, specifically lead qualification.

5. **AWS CDK Deployment**: This project used AWS CDK for infrastructure as code, which differs from some previous deployment approaches.

6. **Single-Table DynamoDB Design**: This project implemented a single-table design pattern for DynamoDB, which is a more advanced approach than traditional database designs.

7. **CSS Modules**: This project used CSS modules for styling, which provides better encapsulation than global CSS.

8. **TanStack Router**: This project used TanStack Router for routing, which is a more modern approach than traditional routing libraries.