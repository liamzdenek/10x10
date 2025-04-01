import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import styles from './Correspondence.module.css';
import projects from '../../../data/projects';

export const Correspondence: React.FC = () => {
  const { slug } = useParams({ from: '/10x10/correspondence/$slug' });
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  // If no project is selected, show a default view
  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.projectSelector}>
          <h2 className={styles.selectorTitle}>Select a Project</h2>
          <div className={styles.projectList}>
            {projects
              .filter(p => p.emailThread && p.emailThread.responses && p.emailThread.responses.length > 0)
              .map(p => (
                <Link
                  key={p.id}
                  to="/10x10/correspondence/$slug"
                  params={{ slug: p.slug }}
                  className={styles.projectLink}
                >
                  {p.id}. {p.company}
                </Link>
              ))}
          </div>
          <div className={styles.noSelection}>
            <p>Please select a project from the list to view its correspondence.</p>
          </div>
        </div>
      </div>
    );
  }
  
  // If the project doesn't have email responses, show a message
  if (!project.emailThread || !project.emailThread.responses || project.emailThread.responses.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Correspondence: {project.company}</h1>
          <div className={styles.projectSelector}>
            <select 
              className={styles.projectSelect}
              value={project.slug}
              onChange={(e) => {
                const newSlug = e.target.value;
                if (newSlug) {
                  window.location.href = `/10x10/correspondence/${newSlug}`;
                }
              }}
            >
              <option value="">Select a project</option>
              {projects
                .filter(p => p.emailThread && p.emailThread.responses && p.emailThread.responses.length > 0)
                .map(p => (
                  <option key={p.id} value={p.slug}>
                    {p.id}. {p.company}
                  </option>
                ))}
            </select>
          </div>
        </div>
        
        <div className={styles.noCorrespondence}>
          <p>No correspondence available for this project.</p>
          <Link 
            to="/10x10/projects/$slug"
            params={{ slug: project.slug }}
            className={styles.backLink}
          >
            Back to Project Details
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Correspondence: {project.company}</h1>
        <div className={styles.projectSelector}>
          <select 
            className={styles.projectSelect}
            value={project.slug}
            onChange={(e) => {
              const newSlug = e.target.value;
              if (newSlug) {
                window.location.href = `/10x10/correspondence/${newSlug}`;
              }
            }}
          >
            <option value="">Select a project</option>
            {projects
              .filter(p => p.emailThread && p.emailThread.responses && p.emailThread.responses.length > 0)
              .map(p => (
                <option key={p.id} value={p.slug}>
                  {p.id}. {p.company}
                </option>
              ))}
          </select>
        </div>
      </div>
      
      <div className={styles.emailThread}>
        {/* Initial email */}
        <div className={styles.email}>
          <div className={styles.emailHeader}>
            <div className={styles.emailFrom}>From: Me</div>
            <div className={styles.emailTo}>To: {project.company} Hiring Team</div>
            <div className={styles.emailDate}>{project.emailThread.initialOutreach.date}</div>
          </div>
          <div className={styles.emailSubject}>
            Subject: {project.emailThread.initialOutreach.subject}
          </div>
          <div className={styles.emailBody}>
            <p>{project.emailThread.initialOutreach.content}</p>
          </div>
        </div>
        
        {/* Responses */}
        {project.emailThread.responses.map((response, index) => (
          <div key={index} className={styles.email}>
            <div className={styles.emailHeader}>
              <div className={styles.emailFrom}>From: {project.company} Hiring Team</div>
              <div className={styles.emailTo}>To: Me</div>
              <div className={styles.emailDate}>{response.date}</div>
            </div>
            <div className={styles.emailSubject}>
              Subject: {response.subject}
            </div>
            <div className={styles.emailBody}>
              <p>{response.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.actions}>
        <Link 
          to="/10x10/projects/$slug"
          params={{ slug: project.slug }}
          className={styles.backLink}
        >
          Back to Project Details
        </Link>
      </div>
    </div>
  );
};

export default Correspondence;