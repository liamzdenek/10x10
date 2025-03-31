# Project Metrics: Zillow Real Estate Professional Health Dashboard

## Project Overview
- **Project Summary**: An executive dashboard for Zillow that monitors the health of relationships with real estate professionals, addressing a key business risk identified in their 10-K.
- **Project Value Proposition**: Provides early warning of potential churn, enables targeted interventions, and helps Zillow maintain strong relationships with real estate professionals who contribute significantly to revenue.

## Company Information
- **Company Name**: Zillow
- **Company Size**: Enterprise
- **Industry**: Real Estate Technology
- **Location**: Seattle, WA (Remote-friendly)
- **Funding Stage**: N/A (Public company)
- **Public/Private**: Public

## Position Details
- **Title Sought**: Principal Software Engineer
- **Sent to Who**: CEO, Chair and Former CEO
- **Stated Base Salary**: Unknown
- **Estimated Total Comp**: Unknown

## Project Execution
- **Hours Spent**: 8
- **Completion Date**: March 28, 2025
- **Project Day**: 10 of 10

## Technical Metrics
- **Primary Technologies**: React, TypeScript, AWS CDK, DynamoDB, Lambda
- **Secondary Technologies**: Express.js, TanStack Router, CSS Modules, API Gateway, CloudFront
- **Lines of Code**: 4040 + 4010 md
- **Deployment Mechanism**: AWS CDK with automated deployment to S3, CloudFront, Lambda, and DynamoDB

## Resource Utilization
- **LLM Dollars Spent**: $36.43
- **Hosting Dollars Spent**: $0

## Learning Metrics
- **New Technologies Learned**: TanStack Router, AWS CDK NodejsFunction construct
- **Skills Improved**: AWS serverless architecture, React state management, data visualization
- **Key Challenges**: 
  - Implementing effective data aggregation for different agent segments
  - Creating an intuitive simulation interface for what-if analysis
  - Configuring proper AWS infrastructure with CDK
  - Handling different color highlighting logic for different types of metrics

## Application Impact
- **Response Received**: Pending
- **Response Time**: N/A   
- **Response Type**: N/A
- **Feedback Received**: N/A
- **Interview Conversion**: Pending

## Project Tagging
- **Project Type**: Web Application
- **Primary Focus**: Full Stack
- **Business Value**: Analytics, Risk Management
- **Technical Category**: Real Estate Technology
- **Demonstration Goal**: Business Understanding, Technical Depth

## Retrospective Insights

### What went well with this project?
The project successfully demonstrated a deep understanding of Zillow's business model and a key risk identified in their 10-K. The dashboard provides actionable insights for executives to monitor and improve relationships with real estate professionals. The technical implementation showcases proficiency with modern cloud-native architecture, serverless computing, and data visualization.

The segmentation approach allows for detailed analysis of different agent types, and the simulation feature enables testing of various interventions before implementing them in the real world. The project was completed within the one-day timeframe while delivering a fully functional, deployed solution.

### What challenges did you face and how did you overcome them?
One significant challenge was implementing effective data aggregation for different agent segments. This was solved by loading all agents into memory and performing aggregations in the backend, which works well for the demo's limited dataset but would need optimization for production.

Configuring the AWS infrastructure with CDK required careful attention to detail, especially for the Lambda function deployment with proper dependencies. This was overcome by implementing a clean build process and ensuring all dependencies were properly bundled.

Creating an intuitive simulation interface that clearly showed the impact of interventions required thoughtful UI design and color coding. Different metrics needed different color highlighting logic (e.g., for metrics where higher values are better vs. metrics where lower values are better).

### What would you do differently if you had more time?
With more time, several improvements could be made:

1. Implement a more scalable data access pattern using pagination and query-based filtering instead of loading all agents into memory
2. Add authentication and authorization to secure the dashboard
3. Create more interactive visualizations with drill-down capabilities
4. Implement configurable simulation rules through a UI rather than hardcoding them
5. Add comprehensive error handling and monitoring
6. Implement automated testing for both frontend and backend
7. Set up a CI/CD pipeline for automated deployments
8. Add more detailed metrics and visualizations for deeper analysis

### What key learnings will you apply to future projects?
Key learnings from this project include:

1. The importance of understanding business risks and how technology can address them
2. The value of segmentation in data analysis for targeted interventions
3. Effective use of AWS CDK for infrastructure as code
4. The power of simulation for testing interventions before implementation
5. The need to consider different color highlighting logic for different types of metrics
6. The importance of proper dependency management in serverless applications

### How did this project differ from previous ones in the series?
This project had a stronger focus on business intelligence and executive decision support compared to previous projects. It addressed a specific business risk identified in Zillow's 10-K, demonstrating an understanding of the company's strategic challenges.

The simulation feature was unique to this project, allowing for what-if analysis of different interventions.

The project also had a stronger emphasis on data visualization and metrics, with different types of metrics requiring different interpretation approaches. The segmentation capabilities were more advanced than in previous projects, allowing for detailed analysis of different agent types.