import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import styles from '../app/components/home/Home.module.css';

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>10x10 Portfolio</h1>
        <p className={styles.subtitle}>
          A showcase of 10 projects built in 10 days, demonstrating technical skills and problem-solving abilities.
        </p>
        <a href="/10x10" className={styles.button}>
          Explore Projects
        </a>
      </section>
      
      <section className={styles.section}>
        <h2>About This Project</h2>
        <p>
          The 10x10 project is a challenge to build 10 different projects in 10 days,
          each one demonstrating different technical skills and problem-solving abilities.
          Each project was created as part of a job application to showcase my capabilities
          to potential employers.
        </p>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>10 Projects</h3>
            <p>Each project addresses a unique business challenge and demonstrates different technical skills.</p>
          </div>
          <div className={styles.feature}>
            <h3>10 Days</h3>
            <p>All projects were completed in a 10-day sprint, with one project completed each day.</p>
          </div>
          <div className={styles.feature}>
            <h3>Real-World Applications</h3>
            <p>These projects were created as part of actual job applications to demonstrate capabilities.</p>
          </div>
        </div>
        
        <a href="/10x10" className={styles.button}>
          View All Projects
        </a>
      </section>
    </div>
  );
}