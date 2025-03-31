import React from 'react';
import { Link } from '@tanstack/react-router';
import styles from './HomeLayout.module.css';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>10x10 Portfolio</div>
          <nav className={styles.nav}>
            <Link to="/10x10" className={styles.navLink}>Projects</Link>
            <Link to="/10x10/faq" className={styles.navLink}>FAQ</Link>
            <button className={styles.cta}>Hire Me</button>
          </nav>
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>© 2025 10x10 Portfolio</div>
          <div className={styles.links}>
            <a href="https://github.com/liamzdenek" className={styles.footerLink}>GitHub</a>
            <a href="https://linkedin.com/in/liamzdenek" className={styles.footerLink}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;