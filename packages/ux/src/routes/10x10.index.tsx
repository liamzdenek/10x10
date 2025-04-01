import { createFileRoute } from '@tanstack/react-router';
import React from 'react';
import styles from '../app/components/home/Home.module.css';
import projects from '../data/projects';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/10x10/')({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>10x10 Challenge Projects</h1>
        <p className={styles.sectionDescription}>
          A showcase of 10 projects built in 10 days, each one demonstrating different technical skills and problem-solving abilities.
          Each project was created as part of a job application to showcase my capabilities to potential employers.
        </p>
        
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10</div>
            <div className={styles.statLabel}>Days</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>80+</div>
            <div className={styles.statLabel}>Hours</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>$500+</div>
            <div className={styles.statLabel}>LLM Cost</div>
          </div>
        </div>
        
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/10x10/projects/$slug`}
              params={{ slug: project.slug }}
              className={styles.projectRow}
            >
              <div className={styles.projectImageContainer}>
                <img 
                  src={project.images.featured} 
                  alt={`${project.company} featured image`} 
                  className={styles.projectRowImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>
                  {project.title}
                </h2>
                <h3 className={styles.projectCompany}>{project.company}</h3>
                <div className={styles.projectTags}>
                  {project.projectType.map((type, index) => (
                    <span key={index} className={styles.projectTag}>{type}</span>
                  ))}
                </div>
                <p className={styles.projectDescription}>{project.shortDescription}</p>
                <div className={styles.projectMeta}>
                  <span className={styles.projectMetaItem}>Day {project.projectDay}</span>
                  <span className={styles.projectMetaItem}>{project.completionDate}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}