import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 750
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'perspective(1200px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    switch (direction) {
      case 'up':
        return 'perspective(1200px) translate3d(0, 36px, -20px) rotateX(4deg) scale3d(0.97, 0.97, 0.97)';
      case 'down':
        return 'perspective(1200px) translate3d(0, -36px, -20px) rotateX(-4deg) scale3d(0.97, 0.97, 0.97)';
      case 'left':
        return 'perspective(1200px) translate3d(36px, 0, -20px) rotateY(-4deg) scale3d(0.97, 0.97, 0.97)';
      case 'right':
        return 'perspective(1200px) translate3d(-36px, 0, -20px) rotateY(4deg) scale3d(0.97, 0.97, 0.97)';
      case 'scale':
        return 'perspective(1200px) translate3d(0, 20px, -40px) scale3d(0.92, 0.92, 0.92)';
      default:
        return 'perspective(1200px) translate3d(0, 0, 0) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}
