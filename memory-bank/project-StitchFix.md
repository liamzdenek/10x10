# Stitch Fix Client Engagement Acceleration System

## Project Metrics

### Project Overview
- **Project Summary**: A client engagement acceleration system that monitors customer engagement, identifies at-risk clients, and automatically generates personalized re-engagement emails using AI.
- **Project Value Proposition**: Reduces client churn and increases retention by proactively identifying disengagement risk and automating personalized re-engagement, directly addressing a key business risk identified in Stitch Fix's SEC report.

### Company Information
- **Company Name**: Stitch Fix
- **Company Size**: Large (publicly traded company)
- **Industry**: Fashion Technology / E-commerce
- **Location**: San Francisco, CA (with remote options)
- **Funding Stage** (if applicable): N/A (publicly traded)
- **Public/Private**: Public

### Position Details
- **Title Sought**: Principal Software Engineer
- **Sent to Who**: Cofounder, CEO, CPTO
- **Stated Base Salary**: $157,800-$232,000
- **Estimated Total Comp**: Unknown, maybe up to mid 400s (high 300s based on some data points)

### Project Execution
- **Hours Spent**: 7 hours
- **Completion Date**: March 21, 2025
- **Project Day**: 5

### Technical Metrics
- **Primary Technologies**: React, TypeScript, Go, AWS Lambda, DynamoDB, SNS/SQS, AWS CDK
- **Secondary Technologies**: Express.js, Nx monorepo, CSS Modules, OpenRouter API (with R1), S3/CloudFront
- **Lines of Code**: 7312 + 2479 md
- **Deployment Mechanism**: AWS CDK

### Resource Utilization
- **LLM Dollars Spent**: $51.90
- **Hosting Dollars Spent**: $0

### Learning Metrics
- **New Technologies Learned**: Go Lambda functions
- **Skills Improved**: Event-driven architecture, AWS CDK, Nx monorepo management
- **Key Challenges**: Lambda deployment issues, email generation with structured output, DynamoDB integration, API Gateway configuration

### Application Impact
- **Response Received**: No (just submitted)
- **Response Time**: N/A
- **Response Type**: N/A
- **Feedback Received**: N/A
- **Interview Conversion**: N/A

### Project Tagging
- **Project Type**: Web Application, Serverless
- **Primary Focus**: Full Stack, Cloud Infrastructure
- **Business Value**: Customer Retention, Engagement Analytics
- **Technical Category**: Fashion Technology / E-commerce
- **Demonstration Goal**: Cloud Architecture, Event-Driven Systems, AI Integration

## Project Summary

### Target Company

**Stitch Fix** - A publicly traded fashion technology company based in San Francisco, CA (with remote options) that provides personalized styling services through a combination of algorithm-based recommendations and human stylists. Stitch Fix uses data science to deliver personalized clothing and accessory recommendations to its clients through a subscription model where clients receive regular "fixes" (boxes of clothing items) based on their preferences, feedback, and style profile.

### Core Problem Addressed

According to Stitch Fix's annual SEC report, one of the key risks to their business is client retention and engagement:

> "We may be unable to retain clients or maintain a high level of engagement with our clients and maintain or increase their spending with us, which could harm our business, financial condition, or operating results."

This risk is particularly significant because:

1. **Customer Acquisition Cost**: Acquiring new customers is more expensive than retaining existing ones.
2. **Lifetime Value**: Engaged customers have higher lifetime value through repeat purchases.
3. **Revenue Predictability**: Subscription-based businesses rely on predictable recurring revenue.
4. **Word-of-Mouth Marketing**: Engaged customers are more likely to refer new customers.

The current challenges include:
1. **Reactive Approach**: Current systems may only identify disengagement after it has occurred.
2. **Manual Intervention**: Re-engagement efforts may require manual intervention, limiting scalability.
3. **Generic Communication**: Re-engagement communications may not be sufficiently personalized.
4. **Limited Visibility**: Lack of comprehensive visibility into engagement metrics and trends.

### Major Features Implemented

1. **Engagement Monitoring System**
   - Sophisticated scoring algorithm based on order recency, frequency, and value
   - Real-time tracking of client engagement metrics
   - Automatic identification of clients at risk of disengagement
   - Dashboard visualization of engagement trends

2. **Automated Re-engagement System**
   - AI-powered generation of highly personalized emails
   - Structured output with consistent JSON format
   - HTML-formatted email content with personalized recommendations
   - Automated workflow from risk identification to communication

3. **Management Dashboard**
   - Real-time visibility into client engagement metrics
   - User management interface for creating and updating clients
   - Email history tracking and visualization
   - Direct engagement score manipulation for testing

4. **Event-Driven Architecture**
   - DynamoDB Streams for capturing data changes
   - SNS/SQS for reliable message delivery
   - Lambda functions for event processing
   - Decoupled components for scalability and resilience

5. **Data Management System**
   - DynamoDB for scalable data storage
   - RESTful API for data access and manipulation
   - Event sourcing for tracking changes
   - Materialized views for efficient queries

### Architecture Highlights

1. **Event-Driven Architecture**
   - Loose coupling between components through events
   - Scalability through independent component scaling
   - Resilience through isolated failure domains
   - Extensibility through event-based communication

2. **Microservices Architecture**
   - Shared Package: Common types and utilities
   - Stream Processor: Processes DynamoDB streams and publishes events
   - Email Processor: Generates and sends personalized emails
   - Backend API: Provides RESTful API for managing users and emails
   - Frontend UI: User interface for monitoring and management

3. **Serverless Architecture**
   - Lambda Functions for event processing and API handling
   - DynamoDB for serverless database storage
   - SNS/SQS for serverless messaging
   - S3/CloudFront for serverless frontend hosting

4. **Infrastructure as Code**
   - AWS CDK for defining infrastructure
   - TypeScript for infrastructure code
   - CloudFormation for deployment
   - Reproducible infrastructure

5. **Nx Monorepo Structure**
   - Consistent tooling across packages
   - Simplified dependency management
   - Efficient build caching
   - Clear separation of concerns

### Notable Challenges and Solutions

1. **Challenge**: Email generation not working for users with low engagement scores
   **Solution**: Modified the email processor Lambda to use the existing engagement score from the database instead of recalculating it, ensuring emails are generated for users with low engagement scores.

2. **Challenge**: Email sending failing due to SES verification issues
   **Solution**: Removed SES dependency and modified the Lambda to skip actual email sending and just mark emails as "SENT" in DynamoDB, eliminating the need for email verification in AWS SES.

3. **Challenge**: Email content not properly formatted as HTML
   **Solution**: Implemented structured output with JSON Schema validation, switched to openai/gpt-4o model for better structured output support, and enhanced the prompt to explicitly require JSON output.

4. **Challenge**: Lambda deployment issues with dependencies
   **Solution**: Created custom build scripts using esbuild to properly bundle all dependencies, configured esbuild for node20 target, and updated the Lambda function paths to use the correct build output locations.

5. **Challenge**: API Gateway integration issues
   **Solution**: Added API Gateway to the infrastructure, fixed the backend Lambda to work with API Gateway using serverless-http, and updated the frontend to use the correct API URL.

### Future Opportunities

With more time, the project could be enhanced with:

1. **Authentication and Authorization**: Implement secure access control for the management dashboard.
2. **Comprehensive Testing**: Add unit tests, integration tests, and end-to-end tests for all components.
3. **CI/CD Pipeline**: Set up automated build, test, and deployment pipelines.
4. **Production Monitoring**: Implement comprehensive monitoring, alerting, and logging.
5. **Multi-Region Deployment**: Configure multi-region deployment for high availability.
6. **A/B Testing Framework**: Add support for testing different re-engagement approaches.
7. **Predictive Analytics**: Use machine learning to predict disengagement before it occurs.
8. **Multi-channel Communication**: Expand beyond email to include SMS, push notifications, and other channels.
9. **Enhanced Event System**: Build out a more realistic customer scoring and event system with proper events streaming in to calculate scores instead of manual manipulation.

## Retrospective Insights

### Communication Strategy

- **Executive Communication Style**: The Stitch Fix project featured the strongest email communication so far, adopting a style inspired by Mark Zuckerberg (as seen in @TechEmails). This approach focuses on being direct, clearly articulating value, and making explicit asks.

- **Stakeholder Selection**: One regret was including the founder in the email communication. Since they're likely less involved in day-to-day operations, more judicious targeting of stakeholders would be better for future communications.

### Technical Insights

- **Event-Driven Architecture**: The event-driven architecture provided a clean separation of concerns, enabling loose coupling, scalability, and resilience. This pattern was particularly effective for the Stitch Fix system.

- **AI-Powered Content Generation**: Structured output with JSON Schema validation proved essential for reliable AI-generated content. The switch to GPT-4o with explicit JSON output requirements significantly improved the quality and consistency of generated emails.

- **Multi-Language Implementation**: Using Go for the email processor alongside TypeScript for other components demonstrated the value of selecting the right language for specific workloads, with Go providing better performance and simpler concurrency.

### AI-Assisted Operations

- **Claude's Operational Capabilities**: The project revealed that Steve Yegge's tweet about Claude is not a joke: "Claude will push on bug fixes until they're deployed in production, and then start scanning through the user logs to see how well it's doing."

- **Deployment and Debugging**: Claude demonstrated remarkable capabilities in testing deployments, working through AWS CLI and infrastructure logs, fixing and redeploying components, and checking metrics and logs to ensure end-to-end functionality.

- **Memory Bank Enhancement**: The memory bank pattern should be updated to include operations-related patterns to leverage Claude's capabilities in deployment, debugging, and monitoring.

### Project Planning

- **Realistic Event Systems**: With more time, the customer scoring and event system should be built out more realistically with proper events streaming in to calculate scores instead of buttons to set the score manually.

- **Company Selection**: More careful consideration is needed when selecting companies for future projects, focusing on those that are truly worth the significant investment of time and resources.

- **Knowledge Sharing**: The insights gained from this project series could benefit others, as "the world doesn't know how to do this and would benefit greatly from teaching."

### Structured Retrospective

1. **What went well with this project?**
   - Successfully implemented an event-driven architecture with loose coupling between components
   - Created a sophisticated engagement scoring algorithm for identifying at-risk clients
   - Integrated AI for generating highly personalized email content
   - Built a responsive frontend dashboard for monitoring engagement metrics
   - Deployed a production-ready, highly scalable solution to AWS
   - Developed strong, direct email communication in the style of executive communications

2. **What challenges did you face and how did you overcome them?**
   - Email generation issues required careful debugging and modifications to the Lambda function
   - TypeScript configuration in a monorepo structure required careful management of dependencies
   - Lambda deployment issues with dependencies required custom build scripts with esbuild
   - API Gateway integration issues required serverless-http integration
   - DynamoDB integration required careful design of data access patterns

3. **What would you do differently if you had more time?**
   - Build out the customer scoring and event system more realistically with proper events streaming in to calculate scores instead of buttons to set the score manually
   - Be more judicious about targeting the right stakeholders in communications
   - Implement comprehensive testing for all components
   - Add authentication and authorization for the management dashboard
   - Set up a CI/CD pipeline for automated deployment

4. **What key learnings will you apply to future projects?**
   - Direct, clear communication about value and specific asks is an effective strategy
   - Event-driven architecture provides significant benefits for loosely coupled systems
   - AI assistants like Claude can be remarkably effective at operations tasks including deployment, debugging, and monitoring
   - The memory bank pattern should be updated to include operations-related patterns
   - More careful consideration is needed when selecting stakeholders for communications

5. **How did this project differ from previous ones in the series?**
   - More complex architecture with event-driven communication
   - Integration of Go alongside TypeScript for a multi-language implementation
   - More sophisticated AI integration with structured output
   - More comprehensive infrastructure as code with AWS CDK
   - More focus on business value alignment with SEC report risk mitigation
   - Stronger focus on direct, executive-style communication

### Future Directions

1. Continue using the direct, clear communication style that focuses on value and specific asks
2. Update the memory bank pattern to include operations-related patterns
3. Be more judicious in selecting stakeholders for communications
4. Focus on companies that are truly worth the investment for remaining projects
5. Consider how to share the knowledge gained from this project series with others

## Conclusion

The Stitch Fix Client Engagement Acceleration System successfully demonstrates how a production-ready, highly scalable solution can address a key business risk for Stitch Fix. By monitoring client engagement, identifying at-risk clients, and automatically generating personalized re-engagement emails, the system provides a powerful tool for improving client retention and engagement.

The system showcases technical excellence through its event-driven architecture, serverless components, and AI integration, while providing practical business value through its engagement monitoring and automated re-engagement capabilities. The project balances technical sophistication with business value alignment, demonstrating both engineering excellence and business acumen.

This project also highlighted the importance of effective communication and the remarkable capabilities of AI assistants in operations tasks. The insights gained from this project will inform future projects in the 10x10 series, particularly regarding communication strategy, architecture patterns, and the use of AI for development and operations.