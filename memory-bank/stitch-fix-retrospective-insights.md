# Stitch Fix Application - Retrospective Insights

## Communication Strategy

- **Executive Communication Style**: The Stitch Fix project featured the strongest email communication so far, adopting a style inspired by Mark Zuckerberg (as seen in @TechEmails). This approach focuses on being direct, clearly articulating value, and making explicit asks.

- **Stakeholder Selection**: One regret was including the founder in the email communication. Since they're likely less involved in day-to-day operations, more judicious targeting of stakeholders would be better for future communications.

## Technical Insights

- **Event-Driven Architecture**: The event-driven architecture provided a clean separation of concerns, enabling loose coupling, scalability, and resilience. This pattern was particularly effective for the Stitch Fix system.

- **AI-Powered Content Generation**: Structured output with JSON Schema validation proved essential for reliable AI-generated content. The switch to GPT-4o with explicit JSON output requirements significantly improved the quality and consistency of generated emails.

- **Multi-Language Implementation**: Using Go for the email processor alongside TypeScript for other components demonstrated the value of selecting the right language for specific workloads, with Go providing better performance and simpler concurrency.

## AI-Assisted Operations

- **Claude's Operational Capabilities**: The project revealed that Steve Yegge's tweet about Claude is not a joke: "Claude will push on bug fixes until they're deployed in production, and then start scanning through the user logs to see how well it's doing."

- **Deployment and Debugging**: Claude demonstrated remarkable capabilities in testing deployments, working through AWS CLI and infrastructure logs, fixing and redeploying components, and checking metrics and logs to ensure end-to-end functionality.

- **Memory Bank Enhancement**: The memory bank pattern should be updated to include operations-related patterns to leverage Claude's capabilities in deployment, debugging, and monitoring.

## Project Planning

- **Realistic Event Systems**: With more time, the customer scoring and event system should be built out more realistically with proper events streaming in to calculate scores instead of buttons to set the score manually.

- **Company Selection**: More careful consideration is needed when selecting companies for future projects, focusing on those that are truly worth the significant investment of time and resources.

- **Knowledge Sharing**: The insights gained from this project series could benefit others, as "the world doesn't know how to do this and would benefit greatly from teaching."

## Future Directions

1. Continue using the direct, clear communication style that focuses on value and specific asks
2. Update the memory bank pattern to include operations-related patterns
3. Be more judicious in selecting stakeholders for communications
4. Focus on companies that are truly worth the investment for remaining projects
5. Consider how to share the knowledge gained from this project series with others

These insights will inform the approach to the remaining projects in the 10x10 series, particularly regarding communication strategy, architecture patterns, and the use of AI for development and operations.