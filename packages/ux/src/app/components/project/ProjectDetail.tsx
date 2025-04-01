import React, { useState, useEffect } from 'react';
import { useParams } from '@tanstack/react-router';
import styles from './ProjectDetail.module.css';
import projects from '../../../data/projects';
import ImageViewer from '../common/ImageViewer';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams({ from: '/10x10/projects/$slug' });
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  // State for selected image
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State for image viewer
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState<string | null>(null);
  
  // Reset selected image when project changes
  useEffect(() => {
    if (project?.images.featured) {
      setSelectedImage(project.images.featured);
    }
  }, [project]);
  
  if (!project) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Project Not Found</h1>
        <p>The project with slug "{slug}" could not be found.</p>
      </div>
    );
  }
  
  // Format source code link
  const sourceCodeLink = `https://github.com/liamzdenek/${project.company.toLowerCase()}-application`;
  
  // Open image viewer
  const openImageViewer = (imageSrc: string) => {
    setViewerImage(imageSrc);
    setViewerOpen(true);
  };
  
  // Close image viewer
  const closeImageViewer = () => {
    setViewerOpen(false);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.productSection}>
        <div className={styles.productImages}>
          <div className={styles.thumbnailList}>
            {project.images.gallery.map((image, index) => (
              <div 
                key={index} 
                className={`${styles.thumbnail} ${selectedImage === image ? styles.thumbnailActive : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`${project.company} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className={styles.mainImage}>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt={`${project.company} main image`} 
                className={styles.featuredImage}
                onClick={() => openImageViewer(selectedImage)}
                style={{ cursor: 'zoom-in' }}
              />
            )}
          </div>
        </div>
        
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{project.title}</h1>
          <h2 className={styles.company}>{project.company}</h2>
          
          <div className={styles.tags}>
            {project.projectType.map((type, index) => (
              <span key={index} className={styles.tag}>{type}</span>
            ))}
          </div>
          
          <p className={styles.description}>{project.shortDescription}</p>
          
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Completion Date</span>
              <span className={styles.metaValue}>{project.completionDate}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Project Day</span>
              <span className={styles.metaValue}>{project.projectDay} of 10</span>
            </div>
          </div>
          
          <div className={styles.links}>
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Source Code
            </a>
          </div>
        </div>
      </div>
      
      {/* YouTube video section */}
      {project.youtubeVideoId && (
        <div className={styles.videoSection}>
          <h2 className={styles.sectionTitle}>Project Demo</h2>
          <div className={styles.videoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
              title={`${project.title} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
          </div>
        </div>
      )}
      
      {/* Project Metrics - Moved up below the video */}
      <div className={styles.metricsSection}>
        <h2 className={styles.sectionTitle}>Project Metrics</h2>
        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>{project.metrics.hoursSpent}</div>
            <div className={styles.metricLabel}>Hours Spent</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>{project.metrics.linesOfCode.toLocaleString()}</div>
            <div className={styles.metricLabel}>Lines of Code</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>{project.metrics.linesOfMarkdown.toLocaleString()}</div>
            <div className={styles.metricLabel}>Lines of Markdown</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>${project.metrics.llmCost}</div>
            <div className={styles.metricLabel}>LLM Cost</div>
          </div>
        </div>
      </div>
      
      <div className={styles.detailsSection}>
        <h2 className={styles.sectionTitle}>Project Details</h2>
        <p className={styles.fullDescription}>{project.fullDescription}</p>
        
        <h3 className={styles.subsectionTitle}>Business Value</h3>
        <ul className={styles.valueList}>
          {project.businessValue.map((value, index) => (
            <li key={index} className={styles.valueItem}>{value}</li>
          ))}
        </ul>
        
        <h3 className={styles.subsectionTitle}>Key Features</h3>
        <div className={styles.featuresContainer}>
          <div className={styles.features}>
            {project.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <h3 className={styles.subsectionTitle}>Technologies Used</h3>
        <div className={styles.technologies}>
          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryTitle}>Frontend</h4>
            <div className={styles.techList}>
              {project.technologies.frontend.map((tech, index) => (
                <span key={index} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryTitle}>Backend</h4>
            <div className={styles.techList}>
              {project.technologies.backend.map((tech, index) => (
                <span key={index} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.techCategory}>
            <h4 className={styles.techCategoryTitle}>DevOps</h4>
            <div className={styles.techList}>
              {project.technologies.devops.map((tech, index) => (
                <span key={index} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </div>
          
          {project.technologies.other.length > 0 && (
            <div className={styles.techCategory}>
              <h4 className={styles.techCategoryTitle}>Other</h4>
              <div className={styles.techList}>
                {project.technologies.other.map((tech, index) => (
                  <span key={index} className={styles.techItem}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <h3 className={styles.subsectionTitle}>Challenges & Solutions</h3>
        <div className={styles.challenges}>
          {project.challenges.map((challenge, index) => (
            <div key={index} className={styles.challengeItem}>
              <h4 className={styles.challengeTitle}>{challenge.challenge}</h4>
              <p className={styles.challengeSolution}>{challenge.solution}</p>
            </div>
          ))}
        </div>
        
        <h3 className={styles.subsectionTitle}>Key Learnings</h3>
        <ul className={styles.learningsList}>
          {project.learnings.map((learning, index) => (
            <li key={index} className={styles.learningItem}>{learning}</li>
          ))}
        </ul>
      </div>
      
      {/* Image Viewer */}
      {viewerOpen && viewerImage && (
        <ImageViewer 
          src={viewerImage} 
          alt={`${project.company} image`} 
          onClose={closeImageViewer} 
        />
      )}
    </div>
  );
};

export default ProjectDetail;