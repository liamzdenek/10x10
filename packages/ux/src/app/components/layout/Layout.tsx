import React, { useState } from 'react';
import { Link, useMatches } from '@tanstack/react-router';
import styles from './Layout.module.css';
import projects from '../../../data/projects';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const matches = useMatches();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get the current route path
  const currentPath = matches.length > 0 ? matches[matches.length - 1].pathname : '/';

  // Determine if a route is active
  const isActive = (path: string) => currentPath === path;
  
  // Get the page title based on the current route
  const getPageTitle = (matches: any[]) => {
    if (matches.length === 0) return 'Page';
    
    const pathname = matches[matches.length - 1].pathname;
    
    if (pathname === '/10x10') return 'Projects';
    
    if (pathname.startsWith('/10x10/projects/')) {
      const slug = pathname.split('/').pop() || '';
      const project = projects.find(p => p.slug === slug);
      return project ? `Project: ${project.company}` : 'Project';
    }
    
    if (pathname === '/10x10/faq') return 'FAQ';
    
    const pageName = pathname.split('/').pop() || 'Page';
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <header className={styles.headerLogo}>
          <div className={styles.logo}>10x10</div>
        </header>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="/10x10" 
                className={isActive('/10x10') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              {/*
              {isActive('/10x10') && (
                <div className={styles.subNav}>
                  <ul className={styles.subNavList}>
                    <li className={styles.subNavItem}>
                      <Link 
                        to="/10x10" 
                        hash="overview"
                        className={styles.subNavLinkActive}
                      >
                        Overview
                      </Link>
                    </li>
                    <li className={styles.subNavItem}>
                      <Link 
                        to="/10x10" 
                        hash="grid"
                        className={styles.subNavLink}
                      >
                        Grid
                      </Link>
                    </li>
                    <li className={styles.subNavItem}>
                      <Link 
                        to="/10x10" 
                        hash="timeline"
                        className={styles.subNavLink}
                      >
                        Timeline
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              */}
            </li>
            {/* These routes will be added later */}
            {/* <li className={styles.navItem}>
              <Link
                to="/10x10/blog"
                className={isActive('/10x10/blog') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/10x10/metrics"
                className={isActive('/10x10/metrics') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Metrics
              </Link>
            </li> */}
            <li className={styles.navItem}>
              <Link 
                to="/10x10/faq" 
                className={isActive('/10x10/faq') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.projectList}>
          <h3 className={styles.projectListTitle}>Projects</h3>
          <ul className={styles.projectListItems}>
            {[...projects]
              .sort((a, b) => b.id - a.id) // Reverse order (10 to 1)
              .map((project) => {
                // Check if the project has email responses
                const hasResponse = project.emailThread && 
                                   project.emailThread.responses && 
                                   project.emailThread.responses.length > 0;
                
                return (
                  <li key={project.id} className={styles.projectItem}>
                    <Link
                      to="/10x10/projects/$slug"
                      params={{ slug: project.slug }}
                      className={currentPath.startsWith(`/10x10/projects/`) && currentPath.endsWith(project.slug) ? styles.projectLinkActive : styles.projectLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {project.id}. {project.company}
                      {hasResponse && <span className={styles.responseStar}>★</span>}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        
        <div className={styles.footer}>
          © 2025 10x10 Portfolio
        </div>
      </aside>
      
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>
            {getPageTitle(matches)}
          </h1>
          <button className={styles.cta}>Hire Me</button>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.contentContainer}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;