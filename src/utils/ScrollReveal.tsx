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
  let initialTransform = 'translateY(20px)';
  switch (direction) {
    case 'up':
      initialTransform = 'translateY(20px)';
      break;
    case 'down':
      initialTransform = 'translateY(-20px)';
      break;
    case 'left':
      initialTransform = 'translateX(20px)';
      break;
    case 'right':
      initialTransform = 'translateX(-20px)';
      break;
    case 'none':
      initialTransform = 'none';
      break;
  }
  
  const animationStyle = {
    opacity: 0,
    transform: initialTransform,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };
  
  const visibleStyle = {
    opacity: 1,
    transform: 'translate(0)',
  };
  
  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{
        ...animationStyle,
        ...(elementRef.current?.classList.contains('is-visible') ? visibleStyle : {}),
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;