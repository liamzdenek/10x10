import React, { useState } from 'react';
import { Link, useMatches } from '@tanstack/react-router';
import styles from './Layout.module.css';

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
  
  // Determine if a route is the parent of the current route
  const isParentActive = (path: string) => currentPath.startsWith(path) && currentPath !== path;
  
  // Get the page title based on the current route
  const getPageTitle = (matches: any[]) => {
    if (matches.length === 0) return 'Page';
    
    const pathname = matches[matches.length - 1].pathname;
    
    if (pathname === '/') return 'Projects';
    
    if (pathname.startsWith('/projects/')) {
      const slug = pathname.split('/').pop() || '';
      return `Project: ${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
    }
    
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
                to="/" 
                className={isActive('/') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              {/*
              {isActive('/') && (
                <div className={styles.subNav}>
                  <ul className={styles.subNavList}>
                    <li className={styles.subNavItem}>
                      <Link 
                        to="/" 
                        hash="overview"
                        className={styles.subNavLinkActive}
                      >
                        Overview
                      </Link>
                    </li>
                    <li className={styles.subNavItem}>
                      <Link 
                        to="/" 
                        hash="grid"
                        className={styles.subNavLink}
                      >
                        Grid
                      </Link>
                    </li>
                    <li className={styles.subNavItem}>
                      <Link 
                        to="/" 
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
                to="/blog"
                className={isActive('/blog') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/metrics"
                className={isActive('/metrics') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Metrics
              </Link>
            </li> */}
            <li className={styles.navItem}>
              <Link 
                to="/faq" 
                className={isActive('/faq') ? styles.navLinkActive : styles.navLink}
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
            {[
              { id: 1, name: 'Anima', slug: 'anima' },
              { id: 2, name: 'Hiive', slug: 'hiive' },
              { id: 3, name: 'Affirm', slug: 'affirm' },
              { id: 4, name: 'SoFi', slug: 'sofi' },
              { id: 5, name: 'Stitch Fix', slug: 'stitch-fix' },
              { id: 6, name: 'Sourcegraph', slug: 'sourcegraph' },
              { id: 7, name: 'Vercel', slug: 'vercel' },
              { id: 8, name: 'GitLab', slug: 'gitlab' },
              { id: 9, name: 'PostHog', slug: 'posthog' },
              { id: 10, name: 'Zillow', slug: 'zillow' },
            ].map((project) => (
              <li key={project.id} className={styles.projectItem}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className={currentPath.startsWith(`/projects/`) && currentPath.endsWith(project.slug) ? styles.projectLinkActive : styles.projectLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {project.id}. {project.name}
                </Link>
              </li>
            ))}
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