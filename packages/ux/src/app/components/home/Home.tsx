import React from 'react';
import styles from './Home.module.css';
import projects from '../../../data/projects';

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero} id="overview">
        <h1 className={styles.title}>10 Projects in 10 Days</h1>
        <p className={styles.subtitle}>
          A showcase of real-world job applications built in 10 days, demonstrating technical skills, 
          problem-solving abilities, and domain knowledge across different industries.
        </p>
      </section>

      <section className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statValue}>
            {new Set(projects.flatMap(p => 
              [...p.technologies.frontend, ...p.technologies.backend, ...p.technologies.devops]
            )).size}
          </div>
          <div className={styles.statLabel}>Technologies</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>
            {projects.reduce((sum, p) => sum + p.features.length, 0)}
          </div>
          <div className={styles.statLabel}>Features</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>
            {new Set(projects.flatMap(p => p.projectType)).size}
          </div>
          <div className={styles.statLabel}>Project Types</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>
            {projects.reduce((sum, p) => sum + p.metrics.linesOfCode, 0).toLocaleString()}
          </div>
          <div className={styles.statLabel}>Lines of Code</div>
        </div>
      </section>

      <section id="grid">
        <h2 className={styles.sectionTitle}>Project Grid</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                Project {project.id}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectCompany}>{project.company}</div>
                {/*
                <div className={styles.projectTags}>
                  {project.projectType.map((tag, index) => (
                    <span key={index} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{project.shortDescription}</p>
                */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*
      <section className={styles.timeline} id="timeline">
        <h2 className={styles.timelineTitle}>Timeline View</h2>
        <div className={styles.timelineContent}>
          [Interactive timeline showing the 10-day journey]
        </div>
      </section>

      <section className={styles.blogPreview}>
        <h2 className={styles.blogTitle}>Latest from the Blog</h2>
        <div className={styles.blogCard}>
          <h3 className={styles.blogPostTitle}>Lessons Learned from Building 10 Projects in 10 Days</h3>
          <div className={styles.blogPostMeta}>March 31, 2025 • 5 min read</div>
          <p className={styles.blogPostExcerpt}>
            Completing 10 projects in 10 days was an intense challenge that taught me valuable lessons about 
            rapid development, technology selection, and problem-solving. In this post, I share my key insights 
            and what I would do differently next time.
          </p>
          <a href="#" className={styles.readMore}>Read More</a>
        </div>
      </section>
      */}
    </div>
  );
};

export default Home;