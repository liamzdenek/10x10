# SoFi Experimentation Platform Accelerator

## Project Metrics

### Project Overview
- **Project Summary**: A lightweight experimentation platform that enables rapid testing and validation of new features through A/B testing and data-driven insights.
- **Project Value Proposition**: Accelerates innovation by providing a structured approach to testing and validation, reducing the technical overhead of implementing experiments.

### Company Information
- **Company Name**: SoFi
- **Company Size**: Large (publicly traded company)
- **Industry**: Financial Technology
- **Location**: San Francisco, CA (with remote options)
- **Funding Stage**: N/A (publicly traded)
- **Public/Private**: Public

### Position Details
- **Title Sought**: Principal Software Engineer
- **Sent to Who**: CTO and EVP of the relevant division
- **Stated Base Salary**: $192k - $330k
- **Estimated Total Comp**: $628k - 945k

### Project Execution
- **Hours Spent**: 7
- **Completion Date**: March 20, 2025
- **Project Day**: 4

### Technical Metrics
- **Primary Technologies**: React, TypeScript, AWS Lambda, API Gateway, DynamoDB, S3, AWS Batch, AWS CDK
- **Secondary Technologies**: Express, NX, CSS Modules, TanStack Router, Java, Dagger 2, Apache Commons Math
- **Lines of Code**: 8933 + 2194 md
- **Deployment Mechanism**: AWS CDK

### Resource Utilization
- **LLM Dollars Spent**: $45.27
- **Hosting Dollars Spent**: $0

### Learning Metrics
- **New Technologies Learned**: AWS Batch, Dagger 2
- **Skills Improved**: AWS CDK, Java
- **Key Challenges**: AWS Batch connectivity issues, CloudFront configuration, DynamoDB query expressions, report generation bugs

### Application Impact
- **Response Received**: [To be filled]
- **Response Time**: [To be filled]
- **Response Type**: [To be filled]
- **Feedback Received**: [To be filled]
- **Interview Conversion**: [To be filled]

### Project Tagging
- **Project Type**: Web Application, Serverless
- **Primary Focus**: Full Stack, Cloud Infrastructure
- **Business Value**: Data-Driven Decisions, Innovation Acceleration
- **Technical Category**: FinTech
- **Demonstration Goal**: Cloud Architecture, AWS Integration

## Project Summary

### Target Company

**SoFi** - A publicly traded financial technology company based in San Francisco, CA (with remote options). SoFi (Social Finance) offers a range of financial products including student loan refinancing, mortgages, personal loans, credit cards, investing, and banking through both mobile and desktop interfaces.

### Core Problem Addressed

In modern organizations, particularly in the fintech space, the ability to rapidly test and validate new features is critical for maintaining competitive advantage. However, implementing experimentation often involves significant technical overhead and complexity. The key challenges include:

1. **Time to Insight**: Traditional experimentation setups require significant engineering effort, delaying the feedback loop
2. **Technical Complexity**: Setting up proper A/B testing infrastructure requires specialized knowledge
3. **Data Silos**: Experiment results are often scattered across different systems, making analysis difficult
4. **Inconsistent Implementation**: Without a standardized framework, experiments are implemented inconsistently
5. **Resource Allocation**: Organizations struggle to determine which features are worth investing in

The Experimentation Platform Accelerator addresses these challenges by providing a streamlined, standardized approach to experimentation.

### Major Features Implemented

1. **Experiment Management Interface**
   - Create and configure A/B tests with multiple variants
   - Define experiment parameters and success metrics
   - Set experiment duration and target audience
   - View active and completed experiments

2. **Sample Page with Live Experiments**
   - Demonstrates experiments in action on a sample checkout page
   - Shows different button colors based on experiment variant
   - Tracks user interactions with experimental elements
   - Allows refreshing session to see different variants

3. **Event Collection System**
   - Records user interactions with experimental elements
   - Captures conversion events for statistical analysis
   - Stores events in DynamoDB with experiment context
   - Supports real-time event processing

4. **Report Generation Pipeline**
   - Processes collected event data using AWS Batch
   - Calculates conversion rates and statistical significance
   - Generates comprehensive JSON reports
   - Stores reports in S3 for retrieval

5. **Report Visualization**
   - Displays experiment results with key metrics
   - Shows conversion rates for each variant
   - Calculates improvement percentages compared to control
   - Indicates statistical significance of results

### Architecture Highlights

1. **Modular Monorepo Structure**
   - NX monorepo with clear separation of concerns
   - Shared types and interfaces between frontend and backend
   - Reusable UI components for experimentation
   - API client in shared package for consistent access

2. **Serverless Architecture**
   - API Gateway + Lambda for all backend operations
   - DynamoDB for storing experiments, events, and report metadata
   - S3 for storing generated reports
   - AWS Batch for asynchronous report generation

3. **Event-Driven Processing**
   - Events collected through direct API calls
   - Asynchronous report generation triggered by API
   - Reports stored in S3 and metadata in DynamoDB
   - Notification of report completion through API

4. **Infrastructure as Code**
   - All infrastructure defined and deployed using AWS CDK
   - Environment variables for configuration
   - Automated deployment process with NX commands
   - Docker image building and deployment for report generator

### Notable Challenges and Solutions

1. **Challenge**: AWS Batch connectivity issues
   **Solution**: Added public IP assignment to Fargate tasks, created security group with outbound internet access, and granted ECR pull permissions to task execution role

2. **Challenge**: CloudFront 403 Forbidden errors
   **Solution**: Removed website configuration from S3 bucket, added S3 managed encryption, simplified CloudFront distribution configuration, and added handling for 403 errors

3. **Challenge**: DynamoDB query expressions in Java
   **Solution**: Fixed the ExperimentEvent class by moving annotations, updated query approach to use QueryConditional.sortBetween(), and ensured consistent AWS region settings

4. **Challenge**: Report generation bugs
   **Solution**: Fixed issues with report status updates, conversion counting, and UI rendering of improvement values

5. **Challenge**: AWS Batch resource updates
   **Solution**: Created new AWS Batch resources with versioned names to avoid conflicts with immutable properties

### Key Learnings and Insights

1. **NX Monorepo Structure**: The NX monorepo structure provides a clean separation of concerns while enabling code sharing, though it requires careful configuration to avoid nested directories.

2. **TypeScript/Java Integration**: Maintaining consistent data models between TypeScript and Java components requires careful planning, including mirrored class structures and proper serialization.

3. **AWS Integration**: AWS services provide powerful capabilities for building cloud-native applications, but require careful configuration and error handling for reliable operation.

4. **API Robustness**: Implementing comprehensive validation, logging, and error handling in the API is essential for building a maintainable application.

5. **Dependency Injection**: Using Dagger 2 for dependency injection in Java components improves testability and maintainability by decoupling component creation from usage.

### Future Opportunities

With more time, the project could be enhanced with:

1. **Advanced Statistical Analysis**: Implement more sophisticated statistical methods for experiment evaluation
2. **User Segmentation**: Add support for targeting experiments to specific user segments
3. **Multi-variate Testing**: Extend the platform to support testing multiple variables simultaneously
4. **Integration with Analytics Tools**: Connect with existing analytics platforms for deeper insights
5. **Automated Experiment Suggestions**: Use machine learning to suggest promising experiment ideas

## Retrospective Insights

### Developer's Reflections

I think this project pushed the boundaries of scope, in both a good and bad way. I think I demonstrated a lot by tackling a very large scope for just 1 day. But, I think it was barely achievable in a single day. This is a bit risky I think, since I don't want to fail and overflow the day too much.

I tried to use Java for the reporting generator, which was bold because it's been a few years since I've had to write java, and it added about two hours of work. I don't know if it was a good return on investment for the amount of effort vs the amount of uniqueness.

I learned that the tech doesn't matter so much. I put the demo before the technical explanation, which I think is the right form going forward, so I'm going to keep doing it. I'm also going to try to mirror an executive communication style going forward. I read thru a bunch of twitter.com/TechEmails last night, and they manage to say a lot with very little, sometimes incomplete sentences. Their communication is direct and scoped, but brief, and I think it would benefit me to mirror that.

### Structured Retrospective

1. **What went well with this project?**
   - Successfully implemented a complex architecture with multiple AWS services
   - Created a working end-to-end experimentation platform with real-time variant assignment
   - Integrated Java and TypeScript components in a cohesive system
   - Demonstrated a practical application of A/B testing with statistical analysis
   - Completed an ambitious scope within the one-day timeframe

2. **What challenges did you face and how did you overcome them?**
   - AWS Batch connectivity issues required careful configuration of network settings
   - Java integration added complexity and development time
   - CloudFront configuration issues needed troubleshooting and simplification
   - DynamoDB query expressions in Java required refactoring and annotation adjustments
   - The ambitious scope pushed the boundaries of what could be achieved in one day

3. **What would you do differently if you had more time?**
   - Reconsider the use of Java for the report generator, possibly using TypeScript instead
   - Implement more sophisticated statistical analysis methods
   - Add user segmentation capabilities for more targeted experiments
   - Create a more polished user interface with better visualizations
   - Implement integration with existing analytics platforms

4. **What key learnings will you apply to future projects?**
   - Focus on demo-first approach before technical explanations
   - Adopt a more executive communication style - direct, scoped, and brief
   - Be cautious about introducing additional languages/technologies that add significant development time
   - Balance ambition with achievability within time constraints
   - Prioritize features that demonstrate value over technical complexity

5. **How did this project differ from previous ones in the series?**
   - More complex architecture with multiple AWS services working together
   - Introduction of Java alongside TypeScript for a multi-language implementation
   - Focus on data-driven decision making rather than direct user functionality
   - More emphasis on statistical analysis and reporting
   - Pushed the boundaries of scope compared to previous projects

## Conclusion

The SoFi Experimentation Platform Accelerator successfully demonstrates how a lightweight, cloud-native experimentation platform can enable rapid testing and validation of new features. By providing a standardized framework for A/B testing with comprehensive reporting, the platform accelerates the feedback loop between idea and implementation, enabling more data-driven decision making. The project showcases a modern, serverless architecture with a focus on scalability, maintainability, and developer experience, highlighting both technical expertise and business value alignment.