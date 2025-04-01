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
        </div>
        
        <div className={styles.metricsGrid}>
          <div className={styles.metricsCard}>
            <h2 className={styles.cardTitle}>Technology Distribution</h2>
            
            <div className={styles.techSection}>
              <h3 className={styles.techTitle}>Frontend</h3>
              <div className={styles.techList}>
                {sortedTechnologies.frontend.map(([tech, count]) => (
                  <div key={tech} className={styles.techItem}>
                    <div className={styles.techName}>{tech}</div>
                    <div className={styles.techBar}>
                      <div 
                        className={styles.techBarFill} 
                        style={{ width: `${(count / totalProjects) * 100}%` }}
                      ></div>
                    </div>
                    <div className={styles.techCount}>{count}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.techSection}>
              <h3 className={styles.techTitle}>Backend</h3>
              <div className={styles.techList}>
                {sortedTechnologies.backend.map(([tech, count]) => (
                  <div key={tech} className={styles.techItem}>
                    <div className={styles.techName}>{tech}</div>
                    <div className={styles.techBar}>
                      <div 
                        className={styles.techBarFill} 
                        style={{ width: `${(count / totalProjects) * 100}%` }}
                      ></div>
                    </div>
                    <div className={styles.techCount}>{count}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.techSection}>
              <h3 className={styles.techTitle}>DevOps</h3>
              <div className={styles.techList}>
                {sortedTechnologies.devops.map(([tech, count]) => (
                  <div key={tech} className={styles.techItem}>
                    <div className={styles.techName}>{tech}</div>
                    <div className={styles.techBar}>
                      <div 
                        className={styles.techBarFill} 
                        style={{ width: `${(count / totalProjects) * 100}%` }}
                      ></div>
                    </div>
                    <div className={styles.techCount}>{count}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.techSection}>
              <h3 className={styles.techTitle}>Other</h3>
              <div className={styles.techList}>
                {sortedTechnologies.other.map(([tech, count]) => (
                  <div key={tech} className={styles.techItem}>
                    <div className={styles.techName}>{tech}</div>
                    <div className={styles.techBar}>
                      <div 
                        className={styles.techBarFill} 
                        style={{ width: `${(count / totalProjects) * 100}%` }}
                      ></div>
                    </div>
                    <div className={styles.techCount}>{count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.metricsCard}>
            <h2 className={styles.cardTitle}>Project Types</h2>
            <div className={styles.chartContainer}>
              {sortedProjectTypes.map(([type, count]) => (
                <div key={type} className={styles.chartItem}>
                  <div className={styles.chartLabel}>{type}</div>
                  <div className={styles.chartBar}>
                    <div 
                      className={styles.chartBarFill} 
                      style={{ width: `${(count / totalProjects) * 100}%` }}
                    ></div>
                  </div>
                  <div className={styles.chartCount}>{count}</div>
                </div>
              ))}
            </div>
            
            <h2 className={styles.cardTitle}>Business Value</h2>
            <div className={styles.chartContainer}>
              {sortedBusinessValues.slice(0, 5).map(([value, count]) => (
                <div key={value} className={styles.chartItem}>
                  <div className={styles.chartLabel}>{value}</div>
                  <div className={styles.chartBar}>
                    <div 
                      className={styles.chartBarFill} 
                      style={{ width: `${(count / totalProjects) * 100}%` }}
                    ></div>
                  </div>
                  <div className={styles.chartCount}>{count}</div>
                </div>
              ))}
            </div>
            
            <h2 className={styles.cardTitle}>Response Rate</h2>
            <div className={styles.responseRate}>
              <div className={styles.responseRateValue}>{responseRate.toFixed(0)}%</div>
              <div className={styles.responseRateLabel}>
                {projectsWithResponses} out of {totalProjects} projects received responses
              </div>
            </div>
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
        </div>
      </section>
    </div>
  );
};

export default Metrics;