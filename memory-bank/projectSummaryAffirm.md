# Project Summary: Affirm Merchant Analytics Dashboard

## Project Overview

The Affirm Merchant Analytics Dashboard is a real-time analytics platform designed for Affirm merchants to visualize customer conversion rates, Average Order Value (AOV) increases, and payment plan selection patterns. This system helps merchants understand the impact of offering Affirm as a payment option and optimize their integration for maximum benefit.

## Target Company

**Affirm** - A publicly traded financial technology company specializing in "Buy Now, Pay Later" (BNPL) services. Based in San Francisco, CA, Affirm provides point-of-sale loans that allow consumers to make purchases and pay for them over time without hidden fees.

## Core Problem Addressed

Affirm merchants currently lack real-time visibility into how offering Affirm as a payment option impacts their business metrics. Without this data, merchants:
1. Cannot quantify the ROI of their Affirm integration
2. Struggle to optimize their payment option presentation
3. Miss opportunities to increase conversion rates
4. Have difficulty identifying and addressing payment failures
5. Make decisions based on intuition rather than data

The dashboard directly addresses these issues by providing merchants with real-time analytics and insights.

## Key Technologies Used

### Primary Technologies
- React with TypeScript
- AWS Lambda (Node.js)
- Amazon DynamoDB
- Amazon S3
- Amazon API Gateway
- AWS CDK (Infrastructure as Code)

### Secondary Technologies
- Express with serverless-http
- Vite
- Tanstack Router
- CSS Modules
- Chart.js/D3.js for visualization
- DynamoDB Streams for real-time processing

## Major Features Implemented

1. **Real-time Analytics Dashboard**
   - Visualizes key metrics like AOV and transaction volume
   - Supports hourly and daily granularities
   - Tracks successful vs. failed payments separately

2. **Order Simulation Form**
   - Allows merchants to simulate orders with different parameters
   - Supports multiple merchants for comparison
   - Includes option to simulate payment failures

3. **Event-Driven Processing**
   - Uses DynamoDB Streams to trigger real-time aggregation
   - Calculates metrics like AOV and volume in real-time
   - Stores aggregated data in S3 for efficient retrieval

4. **Merchant-Specific Analytics**
   - Enforces merchant granularity for all analytics queries
   - Provides insights tailored to each merchant's integration

5. **Recent Orders Display**
   - Shows the most recent orders for a merchant
   - Includes details like amount, payment plan, and status
   - Auto-refreshes to show new orders in real-time

## Architecture Highlights

1. **Serverless Architecture**
   - All backend components are serverless for minimal operational overhead
   - Single Lambda function with Express for all API endpoints
   - DynamoDB for order data and S3 for aggregated metrics

2. **Event-Driven Processing**
   - DynamoDB Streams trigger Lambda functions for real-time aggregation
   - Decouples data storage from processing logic
   - Enables real-time updates without polling

3. **Materialized View Pattern**
   - Pre-computes and stores aggregated metrics rather than calculating them on-demand
   - Improves read performance for frequently accessed data
   - Enables efficient time-series analysis

4. **Infrastructure as Code**
   - All infrastructure defined and deployed using AWS CDK
   - Ensures consistent environments and reduces configuration errors
   - Facilitates automated deployment

## Notable Challenges and Solutions

1. **Challenge**: Lambda dependency bundling issues
   **Solution**: Updated API implementation to properly bundle dependencies and added necessary packages to package.json

2. **Challenge**: DynamoDB Stream processing for real-time aggregates
   **Solution**: Implemented a Lambda function triggered by DynamoDB Streams to calculate real-time aggregates

3. **Challenge**: Date comparison logic in analytics endpoint
   **Solution**: Fixed the filtering logic to extract just the date part from ISO timestamps and added detailed logging

4. **Challenge**: Creating realistic demo data
   **Solution**: Created a script to generate simulated order history data with natural undulations for time of day and day of week

5. **Challenge**: Demo video recording in challenging conditions
   **Solution**: Compromised with a "good enough" take despite environmental challenges

## Key Learnings and Insights

1. **Memory Bank Pattern**: The memory bank approach is becoming more efficient with each project, making it easier to track progress and stay focused.

2. **Business Value Alignment**: The project directly addresses Affirm's top three business risks, demonstrating how technical solutions can align with business priorities.

3. **AWS Serverless Architecture**: DynamoDB Streams provide an elegant solution for real-time event processing without polling.

4. **Project Research**: More upfront research into company priorities (e.g., reviewing annual reports for public companies) can help focus the project on high-impact areas.

5. **Technical Patterns**: The project reinforced patterns from previous projects (AWS CDK, React UI, data processing pipeline) while introducing new elements like DynamoDB and DynamoDB Streams.

## Future Opportunities

With more time, the project could be enhanced with:

1. **Deeper Business Metrics**: More research into key metrics that demonstrate the most value to Affirm merchants
2. **Conversion Rate Analysis**: Compare conversion rates with and without Affirm
3. **Customer Segmentation**: Analyze which customer segments prefer which payment plans
4. **Predictive Analytics**: Forecast future transaction volumes and AOV
5. **Competitive Benchmarking**: Compare performance against industry averages

## Project Metrics

- **Hours Spent**: 7 hours
- **Completion Date**: March 19, 2025
- **Project Day**: 3 of 10
- **LLM Dollars Spent**: $24.96
- **New Technologies Learned**: DynamoDB Streams
- **Skills Improved**: Using Claude with the memory bank pattern

## Conclusion

The Affirm Merchant Analytics Dashboard successfully demonstrates how real-time analytics can provide merchants with valuable insights about their Affirm integration. By visualizing key metrics like AOV and transaction volume, the dashboard helps merchants make data-driven decisions to optimize their integration and maximize business value. The project showcases a complete serverless architecture with event-driven processing, highlighting both technical expertise and business value alignment.