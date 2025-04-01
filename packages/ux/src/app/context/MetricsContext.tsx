import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import projects from '../../data/projects';

// Define the metrics data structure
export interface MetricsData {
  totalProjects: number;
  totalHoursSpent: number;
  totalLinesOfCode: number;
  totalLinesOfMarkdown: number;
  totalLLMCost: number;
  totalHostingCost: number;
  sortedTechnologies: {
    frontend: [string, number][];
    backend: [string, number][];
    devops: [string, number][];
    other: [string, number][];
  };
  sortedProjectTypes: [string, number][];
  sortedBusinessValues: [string, number][];
  projectsWithResponses: number;
  responseRate: number;
  projectMetrics: {
    id: number;
    company: string;
    linesOfCode: number;
    linesOfMarkdown: number;
    llmCost: number;
    hostingCost: number;
  }[];
}

// Create the context
const MetricsContext = createContext<MetricsData | null>(null);

// Create a provider component
export const MetricsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Memoize all expensive computations
  const metricsData = useMemo(() => {
    // Calculate summary metrics
    const totalProjects = projects.length;
    const totalHoursSpent = projects.reduce((sum, project) => sum + project.metrics.hoursSpent, 0);
    const totalLinesOfCode = projects.reduce((sum, project) => sum + project.metrics.linesOfCode, 0);
    const totalLinesOfMarkdown = projects.reduce((sum, project) => sum + project.metrics.linesOfMarkdown, 0);
    const totalLLMCost = projects.reduce((sum, project) => sum + project.metrics.llmCost, 0);
    const totalHostingCost = projects.reduce((sum, project) => sum + (project.metrics.hostingCost || 0), 0);
    
    // Calculate technology distributions
    const technologies: {
      frontend: Record<string, number>;
      backend: Record<string, number>;
      devops: Record<string, number>;
      other: Record<string, number>;
    } = {
      frontend: {},
      backend: {},
      devops: {},
      other: {}
    };
    
    projects.forEach(project => {
      // Count frontend technologies
      project.technologies.frontend.forEach(tech => {
        technologies.frontend[tech] = (technologies.frontend[tech] || 0) + 1;
      });
      
      // Count backend technologies
      project.technologies.backend.forEach(tech => {
        technologies.backend[tech] = (technologies.backend[tech] || 0) + 1;
      });
      
      // Count devops technologies
      project.technologies.devops.forEach(tech => {
        technologies.devops[tech] = (technologies.devops[tech] || 0) + 1;
      });
      
      // Count other technologies
      project.technologies.other.forEach(tech => {
        technologies.other[tech] = (technologies.other[tech] || 0) + 1;
      });
    });
    
    // Sort technologies by frequency
    const sortedTechnologies = {
      frontend: Object.entries(technologies.frontend).sort((a, b) => b[1] - a[1]),
      backend: Object.entries(technologies.backend).sort((a, b) => b[1] - a[1]),
      devops: Object.entries(technologies.devops).sort((a, b) => b[1] - a[1]),
      other: Object.entries(technologies.other).sort((a, b) => b[1] - a[1])
    };
    
    // Calculate project type distribution
    const projectTypes: Record<string, number> = {};
    projects.forEach(project => {
      project.projectType.forEach(type => {
        projectTypes[type] = (projectTypes[type] || 0) + 1;
      });
    });
    
    // Sort project types by frequency
    const sortedProjectTypes = Object.entries(projectTypes).sort((a, b) => b[1] - a[1]);
    
    // Calculate business value distribution
    const businessValues: Record<string, number> = {};
    projects.forEach(project => {
      project.businessValue.forEach(value => {
        businessValues[value] = (businessValues[value] || 0) + 1;
      });
    });
    
    // Sort business values by frequency
    const sortedBusinessValues = Object.entries(businessValues).sort((a, b) => b[1] - a[1]);
    
    // Calculate response rate
    const projectsWithResponses = projects.filter(project => 
      project.emailThread && 
      project.emailThread.messages && 
      project.emailThread.messages.length > 0
    ).length;
    
    const responseRate = (projectsWithResponses / totalProjects) * 100;
    
    // Create project metrics array for individual charts
    const projectMetrics = projects.map(project => ({
      id: project.id,
      company: project.company,
      linesOfCode: project.metrics.linesOfCode,
      linesOfMarkdown: project.metrics.linesOfMarkdown,
      llmCost: project.metrics.llmCost,
      hostingCost: project.metrics.hostingCost || 0
    })).sort((a, b) => a.id - b.id); // Sort by project ID
    
    return {
      totalProjects,
      totalHoursSpent,
      totalLinesOfCode,
      totalLinesOfMarkdown,
      totalLLMCost,
      totalHostingCost,
      sortedTechnologies,
      sortedProjectTypes,
      sortedBusinessValues,
      projectsWithResponses,
      responseRate,
      projectMetrics
    };
  }, []);  // Empty dependency array means this only runs once
  
  return (
    <MetricsContext.Provider value={metricsData}>
      {children}
    </MetricsContext.Provider>
  );
};

// Create a hook to use the metrics context
export const useMetrics = () => {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error('useMetrics must be used within a MetricsProvider');
  }
  return context;
};