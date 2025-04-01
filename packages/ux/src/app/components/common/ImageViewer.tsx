import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ImageViewer.module.css';

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const imageRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  
  // Check if device is desktop on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle escape key press to close the viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Disable body scrolling when viewer is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      
      // Cancel any pending animation frames
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [onClose]);
  
  // Smooth position update using requestAnimationFrame
  const updatePosition = useCallback((newX: number, newY: number) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: newX, y: newY });
      lastPositionRef.current = { x: newX, y: newY };
      rafRef.current = null;
    });
  }, []);
  
  // Handle mouse wheel for zooming
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.max(0.5, Math.min(5, scale + delta));
    setScale(newScale);
  };
  
  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - lastPositionRef.current.x, y: e.clientY - lastPositionRef.current.y });
    e.preventDefault(); // Prevent image selection
  };
  
  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      updatePosition(newX, newY);
    }
  };
  
  // Handle mouse up to end dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Handle touch start for mobile dragging and pinch zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - lastPositionRef.current.x,
        y: e.touches[0].clientY - lastPositionRef.current.y
      });
    }
  };
  
  // Handle touch move for mobile dragging and pinch zoom
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    // Handle pinch zoom
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      
      // Calculate the distance between the two touches
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      // Use the distance to determine the scale
      // This is a simplified approach; in a real app, you'd track the previous distance
      const newScale = Math.max(0.5, Math.min(5, distance / 100));
      setScale(newScale);
    }
    // Handle dragging
    else if (e.touches.length === 1 && isDragging) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      updatePosition(newX, newY);
    }
  };
  
  // Handle touch end to end dragging
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Handle click on the overlay to close if not dragging and on desktop
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isDragging && isDesktop) {
      onClose();
    }
  };
  
  // Double click to reset zoom and position
  const handleDoubleClick = () => {
    setScale(1);
    updatePosition(0, 0);
  };
  
  // Determine cursor style based on state
  const getCursorStyle = () => {
    if (isDragging) return 'grabbing';
    return 'grab'; // Always show grab cursor to indicate draggable
  };
  
  return (
    <div 
      className={styles.overlay}
      onClick={handleOverlayClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div className={styles.controls}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>
      
      <div className={styles.imageContainer}>
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`${styles.image} ${isDragging ? styles.dragging : ''}`}
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            willChange: isDragging ? 'transform' : 'auto'
          }}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onDoubleClick={handleDoubleClick}
          draggable={false}
        />
      </div>
      
      <div className={styles.zoomInfo}>
        {Math.round(scale * 100)}% - Scroll to zoom, drag to pan, double-click to reset
        {isDesktop && <span>, click "x" to close</span>}
      </div>
    </div>
  );
};

export default ImageViewer;