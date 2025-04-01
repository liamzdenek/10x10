import React from 'react';
import { useMetrics } from '../../context/MetricsContext';
import styles from './Metrics.module.css';

const Metrics: React.FC = () => {
  const {
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
  } = useMetrics();
  
  // Find the maximum values for project-specific charts
  const maxLinesOfCode = Math.max(...projectMetrics.map(p => p.linesOfCode));
  const maxLinesOfMarkdown = Math.max(...projectMetrics.map(p => p.linesOfMarkdown));
  const maxLLMCost = Math.max(...projectMetrics.map(p => p.llmCost));
  const maxHostingCost = Math.max(...projectMetrics.map(p => p.hostingCost));
  
  // Calculate technology counts
  const totalTechnologies = 
    sortedTechnologies.frontend.length + 
    sortedTechnologies.backend.length + 
    sortedTechnologies.devops.length + 
    sortedTechnologies.other.length;
  
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Portfolio Metrics</h1>
        <p className={styles.sectionDescription}>
          Aggregate metrics and analysis across all 10 projects in the 10x10 challenge.
        </p>
        
        <div className={styles.summaryMetrics}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{totalProjects}</div>
            <div className={styles.metricLabel}>Total Projects</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{totalHoursSpent}</div>
            <div className={styles.metricLabel}>Total Hours</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{totalLinesOfCode.toLocaleString()}</div>
            <div className={styles.metricLabel}>Lines of Code</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{totalLinesOfMarkdown.toLocaleString()}</div>
            <div className={styles.metricLabel}>Lines of Markdown</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>${totalLLMCost.toFixed(2)}</div>
            <div className={styles.metricLabel}>LLM Cost</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>${totalHostingCost.toFixed(2)}</div>
            <div className={styles.metricLabel}>Hosting Cost</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{sortedTechnologies.frontend.length}</div>
            <div className={styles.metricLabel}>Frontend Technologies</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{sortedTechnologies.backend.length}</div>
            <div className={styles.metricLabel}>Backend Technologies</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{sortedTechnologies.devops.length}</div>
            <div className={styles.metricLabel}>DevOps Technologies</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>{sortedTechnologies.other.length}</div>
            <div className={styles.metricLabel}>Other Technologies</div>
          </div>
        </div>
        
        {/* Project-specific metrics charts */}
        <div className={styles.metricsCard}>
          <h2 className={styles.cardTitle}>Lines of Code by Project</h2>
          <div className={styles.projectChartContainer}>
            {projectMetrics.map((project) => (
              <div key={`loc-${project.id}`} className={styles.projectChartItem}>
                <div className={styles.projectChartLabel}>{project.id}. {project.company}</div>
                <div className={styles.projectChartBar}>
                  <div 
                    className={styles.projectChartBarFill} 
                    style={{ width: `${(project.linesOfCode / maxLinesOfCode) * 100}%` }}
                  ></div>
                </div>
                <div className={styles.projectChartCount}>{project.linesOfCode.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.metricsCard}>
          <h2 className={styles.cardTitle}>Lines of Markdown by Project</h2>
          <div className={styles.projectChartContainer}>
            {projectMetrics.map((project) => (
              <div key={`md-${project.id}`} className={styles.projectChartItem}>
                <div className={styles.projectChartLabel}>{project.id}. {project.company}</div>
                <div className={styles.projectChartBar}>
                  <div 
                    className={styles.projectChartBarFill} 
                    style={{ 
                      width: `${(project.linesOfMarkdown / maxLinesOfMarkdown) * 100}%`,
                      backgroundColor: 'var(--color-secondary)'
                    }}
                  ></div>
                </div>
                <div className={styles.projectChartCount}>{project.linesOfMarkdown.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.metricsCard}>
          <h2 className={styles.cardTitle}>LLM Cost by Project</h2>
          <div className={styles.projectChartContainer}>
            {projectMetrics.map((project) => (
              <div key={`llm-${project.id}`} className={styles.projectChartItem}>
                <div className={styles.projectChartLabel}>{project.id}. {project.company}</div>
                <div className={styles.projectChartBar}>
                  <div 
                    className={styles.projectChartBarFill} 
                    style={{ 
                      width: `${(project.llmCost / maxLLMCost) * 100}%`,
                      backgroundColor: 'var(--color-primary)'
                    }}
                  ></div>
                </div>
                <div className={styles.projectChartCount}>${project.llmCost.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.metricsCard}>
          <h2 className={styles.cardTitle}>Hosting Cost by Project</h2>
          <div className={styles.projectChartContainer}>
            {projectMetrics.map((project) => (
              <div key={`hosting-${project.id}`} className={styles.projectChartItem}>
                <div className={styles.projectChartLabel}>{project.id}. {project.company}</div>
                <div className={styles.projectChartBar}>
                  <div 
                    className={styles.projectChartBarFill} 
                    style={{ 
                      width: `${(project.hostingCost / maxHostingCost) * 100}%`,
                      backgroundColor: 'var(--color-quaternary)'
                    }}
                  ></div>
                </div>
                <div className={styles.projectChartCount}>${project.hostingCost.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <p>Shoutout AWS Free Tier</p>
        </div>
      </section>
    </div>
  );
};

export default Metrics;