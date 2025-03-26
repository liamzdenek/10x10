# Sourcegraph Cody Batch - Autonomous Repository Remediation

## Project Metrics

### Project Overview
- **Project Summary**: An AI-powered tool that leverages Claude 3.7 to perform bulk changes on GitHub repositories, automatically analyzing code and applying changes based on specific prompts.
- **Project Value Proposition**: Increases developer productivity by automating repetitive code maintenance tasks across multiple repositories, demonstrating understanding of Sourcegraph's vision for AI coding agents.

### Company Information
- **Company Name**: Sourcegraph
- **Company Size**: Small (200 employees)
- **Industry**: Developer Tools / Code Intelligence
- **Location**: San Francisco, CA (with remote options)
- **Funding Stage** (if applicable): Series D
- **Public/Private**: Private

### Position Details
- **Title Sought**: No Listing
- **Sent to Who**: CEO/Founder, VP-level Evangelist
- **Stated Base Salary**: Unknown
- **Estimated Total Comp**: Unknown

### Project Execution
- **Hours Spent**: 10 hours (estimated)
- **Completion Date**: March 24, 2025
- **Project Day**: 6

### Technical Metrics
- **Primary Technologies**: React, TypeScript, Node.js, AWS Lambda, AWS Batch, DynamoDB, AWS CDK
- **Secondary Technologies**: Express, Tanstack Router, Zod, CSS Modules, Claude 3.7 API, GitHub API
- **Lines of Code**: 9778 + 5772 markdown
- **Deployment Mechanism**: AWS CDK

### Resource Utilization
- **LLM Dollars Spent**: $85.97
- **Hosting Dollars Spent**: a few dollars, not sure exactly

### Learning Metrics
- **New Technologies Learned**: AWS Batch, Tanstack Router, Claude 3.7 API integration
- **Skills Improved**: Tool-based AI interaction, AWS CDK, container-based job processing
- **Key Challenges**: Long-running job processing, Claude API integration, GitHub API rate limiting

### Application Impact
- **Response Received**: Yes
- **Response Time**: 6 hrs later
- **Response Type**: Referred to recruiting
- **Feedback Received**: "That's really cool. Love the hustle too."
- **Interview Conversion**: [To be filled]

### Project Tagging
- **Project Type**: Web Application, Serverless
- **Primary Focus**: Full Stack, Cloud Infrastructure, AI Integration
- **Business Value**: Developer Productivity, Code Maintenance
- **Technical Category**: Developer Tools
- **Demonstration Goal**: AI Integration, Cloud Architecture, Developer Experience

## Project Summary

### Target Company

**Sourcegraph** - A developer tools company that provides code search, intelligence, and automation capabilities. Sourcegraph helps developers understand, fix, and automate changes across large codebases. The company is known for its code search engine and developer tools that enhance productivity and code quality. Recently, they've been expanding into AI-powered coding assistants with their Cody product.

### Core Problem Addressed

The project addresses several key challenges in software development:

1. **Code Maintenance at Scale**: Updating dependencies, fixing security vulnerabilities, and refactoring code patterns often require the same changes across multiple files or repositories, which is time-consuming and error-prone when done manually.

2. **Technical Debt Reduction**: Large codebases accumulate technical debt over time, and addressing it systematically requires significant developer effort.

3. **Consistency Enforcement**: Ensuring coding standards and best practices are applied uniformly across repositories is challenging without automation.

4. **Developer Productivity**: Developers spend significant time on repetitive code maintenance tasks that could be automated, reducing time for higher-value work.

The project aligns with Steve Yegge's vision (as described in his blog post "Revenge of the junior developer") of AI coding agents that can work autonomously on specific tasks, demonstrating how AI can be leveraged to solve real-world software engineering problems at scale.

### Major Features Implemented

1. **Job Creation Interface**
   - User-friendly form for creating batch change jobs
   - Repository selection with limit of 5 repositories per job
   - Custom prompt input for specifying desired code changes
   - Option to automatically create pull requests for owned repositories

2. **Batch Processing System**
   - AWS Batch for long-running job processing (>15 minutes)
   - Container-based job execution with Docker
   - Parallel processing of multiple repositories
   - Comprehensive error handling and recovery

3. **Claude 3.7 Integration**
   - Tool-based interaction for repository analysis
   - Autonomous code modification sessions
   - Token usage tracking and optimization
   - Conversation history storage and retrieval

4. **GitHub Integration**
   - Repository scanning and cloning
   - Code analysis and modification
   - Pull request creation for owned repositories
   - Diff generation for non-owned repositories

5. **Results Dashboard**
   - Job status monitoring and visualization
   - Repository processing results display
   - Patch file download functionality
   - Claude message thread viewing with technical and simplified views

### Architecture Highlights

1. **Serverless and Container Architecture**
   - Lambda for API endpoints (quick responses)
   - AWS Batch for long-running jobs (>15 minutes)
   - DynamoDB for persistent storage
   - S3 and CloudFront for frontend hosting

2. **Nx Monorepo Structure**
   - Shared package for common types and utilities
   - API package for Lambda-based API endpoints
   - Batch package for AWS Batch job processing
   - Frontend package for React web application
   - GitHub client package for GitHub API integration
   - Claude client package for Claude API integration
   - CDK package for infrastructure as code

3. **Event-Driven Processing**
   - Job submission triggers batch processing
   - Repository processing events update job status
   - Asynchronous communication between components
   - Decoupled architecture for scalability and resilience

4. **Tool-Based AI Interaction**
   - Custom tools for repository operations (list_files, read_file, write_file, search_code)
   - Autonomous sessions with iteration limits
   - Structured output with JSON Schema validation
   - Comprehensive conversation history storage

5. **Infrastructure as Code**
   - AWS CDK for all infrastructure definition
   - Single stack approach for simplicity
   - Environment variable configuration
   - IAM roles with least privilege

### Notable Challenges and Solutions

1. **Challenge**: Long-running job processing exceeding Lambda's 15-minute limit
   **Solution**: Implemented AWS Batch for job processing, allowing jobs to run for extended periods while maintaining a serverless architecture for the API.

2. **Challenge**: Claude API integration with proper error handling and token management
   **Solution**: Developed a comprehensive Claude client with direct API calls, detailed logging, and token usage tracking, ensuring robust interaction with the Claude 3.7 API.

3. **Challenge**: GitHub API rate limiting for repository operations
   **Solution**: Implemented rate limit checking and management in the GitHub client, with exponential backoff and retry logic to handle rate limit constraints.

4. **Challenge**: Storing and retrieving large conversation histories
   **Solution**: Designed an efficient DynamoDB schema for storing complete conversation histories, including tool calls and results, with support for different view modes.

5. **Challenge**: Docker container deployment for batch jobs
   **Solution**: Created a comprehensive deployment process with Docker image building, ECR repository management, and proper environment variable configuration.

### Future Opportunities

With more time, the project could be enhanced with:

1. **Advanced Prompt Engineering**: Develop specialized prompts for different types of code changes (security fixes, dependency updates, pattern refactoring).

2. **Multi-Repository Analysis**: Add support for cross-repository analysis to identify patterns and issues across an entire organization.

3. **Learning from Results**: Implement a feedback loop where successful changes inform future code modifications.

4. **CI/CD Integration**: Allow the system to be triggered by CI/CD pipelines for automated code maintenance.

5. **Custom Tool Development**: Create more specialized tools for specific code analysis and modification tasks.

6. **Testing Framework**: Add support for automatically testing generated changes before creating pull requests.

7. **Approval Workflow**: Implement an approval process for reviewing and approving changes before they're applied.

8. **Metrics and Analytics**: Add comprehensive metrics and analytics for tracking the impact of automated code changes.

## Retrospective Insights

### Technical Insights

1. **Tool-Based AI Interaction**: The tool-based approach for AI interaction proved highly effective for repository operations, providing structured interaction with clear boundaries and better control over the AI's actions.

2. **AWS Batch for Long-Running Jobs**: Using AWS Batch for job processing allowed for handling complex, long-running tasks that would exceed Lambda's timeout limits, while maintaining a serverless architecture for the API.

3. **Conversation History Storage**: Storing complete conversation histories, including tool calls and results, provided valuable context for understanding the AI's reasoning and debugging issues.

4. **Direct API Calls vs. SDK**: Using direct API calls with fetch instead of relying solely on the SDK provided better error handling, debugging, and compatibility with newer Claude models.

5. **Container-Based Job Processing**: Docker containers for batch jobs provided a consistent, isolated environment for job processing, ensuring reliable execution across different environments.

6. **Breakdown of Memory Bank**: I think the memory bank pattern is hitting its limits. It's too much at once for context with claude 3.7. It's forgetting instructions a lot more than vs clean repos.

### Structured Retrospective

1. **What went well with this project?**
   - Successfully implemented a serverless and container-based architecture for handling both quick API requests and long-running jobs
   - Created a comprehensive Claude client with tool-based interaction for repository operations
   - Developed a robust GitHub client with rate limit management and pull request creation
   - Built a responsive frontend with job monitoring and result visualization
   - Implemented infrastructure as code with AWS CDK for reproducible deployments

2. **What challenges did you face and how did you overcome them?**
   - Long-running job processing required switching from Lambda to AWS Batch
   - Claude API integration required careful error handling and token management
   - GitHub API rate limiting required implementing backoff and retry logic
   - Conversation history storage required designing an efficient DynamoDB schema
   - Docker container deployment required a comprehensive build and push process

3. **What would you do differently if you had more time?**
   - Implement more specialized prompts for different types of code changes
   - Add support for cross-repository analysis
   - Create a feedback loop for learning from successful changes
   - Implement CI/CD integration for automated code maintenance
   - Add comprehensive metrics and analytics for tracking impact

4. **What key learnings will you apply to future projects?**
   - Tool-based AI interaction is highly effective for structured tasks
   - AWS Batch is valuable for long-running serverless jobs
   - Direct API calls can provide better control and debugging than SDKs
   - Comprehensive conversation history storage is essential for AI debugging
   - Container-based job processing provides consistency and isolation

5. **How did this project differ from previous ones in the series?**
   - More complex architecture with both serverless and container components
   - More sophisticated AI integration with tool-based interaction
   - Longer-running job processing with AWS Batch
   - More comprehensive conversation history storage and retrieval
   - More focus on developer productivity and code maintenance

### Future Directions

1. Continue exploring tool-based AI interaction for structured tasks
2. Further investigate container-based job processing for long-running tasks
3. Develop more sophisticated conversation history storage and retrieval mechanisms
4. Explore cross-repository analysis and pattern identification
5. Investigate feedback loops for AI learning from successful changes

## Conclusion

The Sourcegraph Cody Batch project successfully demonstrates how AI can be leveraged to automate code maintenance tasks at scale, addressing a key challenge in software development. By combining serverless architecture, container-based job processing, and AI-powered code analysis, the system provides a powerful tool for increasing developer productivity and reducing technical debt.

The project showcases technical excellence through its sophisticated architecture, AI integration, and infrastructure as code, while providing practical business value through its code maintenance automation capabilities. It aligns perfectly with Sourcegraph's vision for AI coding agents and demonstrates a deep understanding of the challenges faced by developers working with large codebases.

This project represents a significant step forward in the 10x10 series, incorporating more complex architecture patterns, sophisticated AI integration, and longer-running job processing capabilities. The insights gained from this project will inform future projects, particularly regarding AI integration, container-based job processing, and conversation history management.