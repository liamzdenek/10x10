import React, { useState, useEffect } from 'react';
import { Link, useMatches } from '@tanstack/react-router';
import styles from './Layout.module.css';
import projects from '../../../data/projects';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const matches = useMatches();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Get the current route path
  const currentPath = matches.length > 0 ? matches[matches.length - 1].pathname : '/';

  // Determine if a route is active
  const isActive = (path: string) => {

    // For other pages, check for exact match
    return currentPath.replace(/\/$/, '') === path;
  };
  
  // Get the page title based on the current route
  const getPageTitle = (matches: any[]) => {
    if (matches.length === 0) return 'Page';
    
    const pathname = matches[matches.length - 1].pathname;
    
    if (pathname === '/10x10' || pathname === '/10x10/') return 'Projects';
    
    if (pathname.startsWith('/10x10/projects/')) {
      const slug = pathname.split('/').pop() || '';
      const project = projects.find(p => p.slug === slug);
      return project ? `Project: ${project.company}` : 'Project';
    }
    
    if (pathname === '/10x10/faq') return 'FAQ';
    
    const pageName = pathname.split('/').pop() || 'Page';
    return pageName.charAt(0).toUpperCase() + pageName.slice(1);
  };
  
  // Close sidebar when clicking outside on mobile/tablet
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isSidebarOpen && !target.closest(`.${styles.sidebar}`) && !target.closest(`.${styles.hamburgerButton}`)) {
        setIsSidebarOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);
  
  // Close sidebar when route changes on mobile/tablet
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [currentPath]);
  
  // Prevent body scrolling when sidebar is open on mobile
  useEffect(() => {
    const handleBodyScroll = () => {
      if (window.innerWidth <= 1024) {
        if (isSidebarOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    };
    
    handleBodyScroll();
    window.addEventListener('resize', handleBodyScroll);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleBodyScroll);
    };
  }, [isSidebarOpen]);
  
  // Prevent event propagation for sidebar
  const handleSidebarClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 1024) {
      e.stopPropagation();
    }
  };

  // Debug current path
  console.log('Current path:', currentPath);

  return (
    <div className={styles.container}>
      <aside 
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}
        onClick={handleSidebarClick}
      >
        <header className={styles.headerLogo}>
          <div className={styles.logo}>10x10</div>
        </header>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="/10x10" 
                className={isActive('/10x10') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsSidebarOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/10x10/faq" 
                className={isActive('/10x10/faq') ? styles.navLinkActive : styles.navLink}
                onClick={() => setIsSidebarOpen(false)}
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
                      onClick={() => setIsSidebarOpen(false)}
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
          <div className={styles.headerLeft}>
            <button 
              className={styles.hamburgerButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsSidebarOpen(!isSidebarOpen);
              }}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburgerIcon}></span>
              <span className={styles.hamburgerIcon}></span>
              <span className={styles.hamburgerIcon}></span>
            </button>
            <h1 className={styles.pageTitle}>
              {getPageTitle(matches)}
            </h1>
          </div>
          <button className={styles.cta}>Hire Me</button>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.contentContainer}>
            {children}
          </div>
        </div>
      </main>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className={styles.overlay} 
          onClick={(e) => {
            e.stopPropagation();
            setIsSidebarOpen(false);
          }} 
        />
      )}
    </div>
  );
};

export default Layout;