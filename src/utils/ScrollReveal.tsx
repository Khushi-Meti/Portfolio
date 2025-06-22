import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.1,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the visible class to trigger the animation
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);
  
  // Define transform values based on direction
  let initialTransform = 'translateY(30px)';
  switch (direction) {
    case 'up':
      initialTransform = 'translateY(30px)';
      break;
    case 'down':
      initialTransform = 'translateY(-30px)';
      break;
    case 'left':
      initialTransform = 'translateX(30px)';
      break;
    case 'right':
      initialTransform = 'translateX(-30px)';
      break;
    case 'none':
      initialTransform = 'scale(0.9)';
      break;
  }
  
  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
      <style jsx>{`
        .scroll-reveal.is-visible {
          opacity: 1 !important;
          transform: translate(0) scale(1) !important;
        }
      `}</style>
    </div>
  );
};

export default ScrollReveal;