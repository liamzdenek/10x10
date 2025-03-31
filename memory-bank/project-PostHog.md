# Project Summary: PostHog AI Docs Chat

## Project Overview
The PostHog AI Docs Chat is an AI-powered documentation chat system that allows users to upload or link to their documentation and then ask questions about it, receiving contextually relevant AI-generated answers. This prototype demonstrates a complete end-to-end solution for reducing support ticket volume by providing immediate, accurate answers to product questions without human intervention.

## Target Company: PostHog
PostHog is a product analytics platform that helps teams build better products. As they've grown, they've experienced a significant increase in customer questions, creating challenges for their support team. The AI Docs Chat prototype addresses this by automating responses to common questions, freeing up support staff for more complex issues.

## Core Problem Addressed
As PostHog has grown, their support team faces challenges with:
- High volume of repetitive questions
- Need for quick, accurate responses
- Scaling support without proportionally scaling the team
- Providing 24/7 support coverage

While third-party AI documentation chat solutions exist, PostHog prefers to build their own solution that integrates with their platform and leverages their unique data advantages.

## Key Technologies Used
- **Frontend**: React, TypeScript, CSS Modules, TanStack Router
- **Backend**: Node.js, TypeScript, AWS Lambda, serverless-http
- **Database**: PostgreSQL with pgvector extension for vector operations
- **AI/ML**: Claude API for response generation, VoyageAI API for embeddings, Jina.ai API for document retrieval and reranking
- **Infrastructure**: AWS CDK, Lambda, API Gateway, RDS, S3, CloudFront
- **Build System**: NX monorepo for package management

## Major Features Implemented

### 1. Document Processing Pipeline
- **Web Crawler**: Uses Jina.ai API to retrieve documentation from websites
- **Intelligent Chunking**: Segments documents into appropriate chunks with overlap
- **Vector Embedding**: Generates embeddings for each chunk using VoyageAI API
- **Database Upload**: Stores documents and vectors in PostgreSQL with customer_id assignment

### 2. Vector Search with Reranking
- **Two-Stage Retrieval**: Initial vector search followed by semantic reranking
- **Context Preservation**: References between adjacent chunks for better context
- **Multi-Tenant Support**: customer_id partitioning for data isolation

### 3. AI Response Generation
- **Claude Integration**: Leverages Claude API for natural language responses
- **Context-Aware Answers**: Uses relevant document chunks as context
- **Citation Support**: Includes source URLs and titles for transparency

### 4. Chat Interface
- **Customer Selection**: Dropdown for switching between customer contexts
- **Conversation History**: Maintains chat history for context
- **Confidence Indicators**: Visual feedback on response reliability

## Architecture Highlights

The system follows a serverless, event-driven architecture with clear separation of concerns:

1. **Data Processing Pipeline**:
   - Documentation sources → Retrieval → Chunking → Vectorization → Database Upload
   - Each stage stores intermediate results in ./data/ directory
   - Processes include rate limiting, concurrent processing, and progress tracking

2. **Runtime Components**:
   - React Frontend → API Gateway → Lambda Function → Vector Database + Claude API

3. **Database Design**:
   - Two-table schema: documents (full content) and vectors (chunks with embeddings)
   - Optimized indexing for efficient vector search using ivfflat
   - References between adjacent chunks for context retrieval

4. **Multi-Tenant Support**:
   - customer_id as partition key in all database tables
   - Filtering by customer_id in all queries
   - Customer selection dropdown in UI

## Notable Challenges and Solutions

### Challenge 1: Efficient Document Chunking
**Problem**: Technical documentation requires careful chunking to preserve context while enabling relevant search.
**Solution**: Implemented intelligent chunking with 1000 token chunks and 200% overlap, with special handling for code blocks and examples. Used Jina.ai segmentation API with custom overlap implementation.

### Challenge 2: Vector Search Quality
**Problem**: Simple vector search often misses semantic nuances in technical questions.
**Solution**: Implemented two-stage retrieval with reranking:
1. Initial vector search to get top 20 candidates
2. Jina reranker to refine results based on semantic understanding
3. Select top 5 results for context generation

### Challenge 3: API Rate Limits
**Problem**: Processing large documentation sets hits API rate limits.
**Solution**: Implemented batch processing with configurable concurrency, rate limiting, and resume capability for interrupted processes. Added retry logic with exponential backoff for API failures.

### Challenge 4: Database Connection in Lambda
**Problem**: Lambda functions had issues connecting to RDS PostgreSQL.
**Solution**: Implemented AWS Secrets Manager integration for database credentials, configured SSL/TLS for secure connections, and added proper error handling for connection issues.

## Key Learnings and Insights

1. **Vector Database Implementation**: Gained deep understanding of vector databases and similarity search algorithms. PostgreSQL with pgvector provides a powerful, cost-effective solution for vector operations without requiring specialized vector databases.

2. **Document Chunking Strategies**: Learned that chunk size and overlap significantly impact search quality. Technical documentation benefits from larger chunks (1000 tokens) with substantial overlap (200%) to preserve context.

3. **Two-Stage Retrieval**: Discovered that combining vector search with semantic reranking dramatically improves result quality. Initial vector search provides fast candidate selection, while reranking refines results for better relevance.

4. **Multi-Tenant Architecture**: Implemented a clean multi-tenant design using customer_id partitioning, demonstrating how to build systems that scale to multiple customers while maintaining data isolation.

5. **Serverless Tradeoffs**: Experienced the benefits and challenges of serverless architecture. While it provides excellent scalability and cost efficiency, it introduces complexity in areas like database connections and cold starts.

## Future Opportunities

1. **Session Replay Integration**: Enhance the system by generating documentation based on session replays, providing context-aware answers based on user behavior.

2. **Code Import Functionality**: Add support for importing customer codebases to provide more tailored answers about implementation details.

3. **Zendesk/Slack Integration**: Extend the system to integrate with support platforms, automatically answering tickets or responding to Slack messages.

4. **Confidence Scoring**: Implement more sophisticated confidence scoring based on vector similarity, reranker scores, and AI model certainty.

5. **Feedback Loop**: Add user feedback mechanisms to improve answer quality over time through reinforcement learning.

## Project Metrics

### Project Overview
- **Project Summary**: AI-powered documentation chat system that allows users to ask questions about documentation and receive AI-generated answers.
- **Project Value Proposition**: Reduces support ticket volume by providing immediate, accurate answers to product questions without human intervention.

### Company Information
- **Company Name**: PostHog
- **Company Size**: Mid-size (100-500 employees)
- **Industry**: Product Analytics / Developer Tools
- **Location**: Remote-first
- **Funding Stage**: Series B
- **Public/Private**: Private

### Position Details
- **Title Sought**: Senior Full Stack Engineer
- **Sent to Who**: Both Cofounders
- **Stated Base Salary**: $221,616 - $242,611 plus equity
- **Estimated Total Comp**: unknown

### Project Execution
- **Hours Spent**: 12
- **Completion Date**: March 27, 2025
- **Project Day**: 9

### Technical Metrics
- **Primary Technologies**: React, TypeScript, AWS Lambda, PostgreSQL with pgvector, Claude AI
- **Secondary Technologies**: NX monorepo, AWS CDK, Jina.ai API, VoyageAI API, serverless-http
- **Lines of Code**: 7474 + 3408 md
- **Deployment Mechanism**: AWS CDK (Lambda, API Gateway, RDS, S3, CloudFront)

### Resource Utilization
- **LLM Dollars Spent**: $87.22
- **Hosting Dollars Spent**: $10 (est)

### Learning Metrics
- **New Technologies Learned**: pgvector, VoyageAI API, Jina.ai API
- **Skills Improved**: Vector database implementation, document chunking strategies, embedding generation
- **Key Challenges**:
  - Optimizing document chunking for context preservation
  - Implementing efficient vector search with reranking
  - Managing API rate limits for large document processing
  - Designing multi-tenant architecture with customer_id partitioning

### Application Impact
- **Response Received**: Pending
- **Response Time**: Pending
- **Response Type**: Pending
- **Feedback Received**: Pending
- **Interview Conversion**: Pending

### Project Tagging
- **Project Type**: Full-Stack Web Application
- **Primary Focus**: AI/ML Integration
- **Business Value**: Customer Support Automation
- **Technical Category**: Developer Tools
- **Demonstration Goal**: Technical Depth in AI/Vector Search

## Retrospective Insights

### What Went Well
The project successfully implemented a working prototype that demonstrated the core concept of AI-powered documentation chat. The Jina.ai API worked particularly well for document retrieval and processing. The project idea itself was strong, addressing a real need that PostHog had identified on their own homepage.

### Challenges Faced
The project faced significant technical challenges, particularly with the vector database implementation:
- Unfamiliarity with PostgreSQL's pgvector extension
- Vector dimensions were too large, causing performance issues
- AWS API Gateway timeout limitations nearly caused project failure
- Insufficient data preprocessing and sanitization
- Limited knowledge about optimal chunking strategies for technical documentation

### Areas for Improvement
With more time, several improvements would be made:
- More thorough data preprocessing and sanitization
- Better research on optimal chunking strategies
- Improved text cleaning to remove irrelevant content like excessive links
- Using smaller vector dimensions for better performance
- Considering a commercial vector database instead of pgvector for production use

### Key Learnings
- The importance of investing more time in research for unfamiliar technologies
- Better understanding of vector database tradeoffs and performance considerations
- Recognition that vector indexes work differently from traditional B-tree indexes and require specialized knowledge
- The value of specialized AI services like Jina.ai for document processing tasks

### Comparison to Previous Projects
Unlike previous projects that used familiar AWS services like DynamoDB and Lambda, this project required integrating with specialized AI services (Jina.ai, VoyageAI) and implementing a custom vector search solution, which presented unique challenges. The technical complexity was higher, pushing into unfamiliar territory with vector databases and embedding technologies.

## Conclusion

The PostHog AI Docs Chat prototype demonstrates a complete end-to-end solution for AI-powered documentation search and question answering. By combining vector search, semantic reranking, and AI response generation, the system provides immediate, accurate answers to product questions without human intervention.

The project showcases advanced technical skills in vector databases, AI integration, and serverless architecture while addressing a real business need for efficient customer support scaling. The multi-tenant design and comprehensive data processing pipeline demonstrate an understanding of both technical implementation details and business requirements.

Despite the challenges faced with vector database implementation and performance optimization, the project successfully delivered a working prototype that could serve as the foundation for a production-ready system. The learnings from this project, particularly around vector databases and document processing, will be valuable for future AI-powered applications.