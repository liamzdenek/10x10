import React from 'react';
import { useParams } from '@tanstack/react-router';
import styles from './ProjectDetail.module.css';
import projects from '../../../data/projects';
import { Project } from '../../../data/types';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams({ from: '/projects/$slug' });
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Project Not Found</h1>
        <p>The project with slug "{slug}" could not be found.</p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      {/* For now, just render the JSON data as requested */}
      <div className={styles.jsonData}>
        <pre>{JSON.stringify(project, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProjectDetail;