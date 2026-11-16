'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in'
  delay = 0, // delay in ms
  duration = 600, // duration in ms
  className = '',
  threshold = 0.12,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  // Animation variants styles
  const getInitialStyle = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-7';
      case 'fade-in':
        return 'opacity-0';
      case 'slide-left':
        return 'opacity-0 -translate-x-8';
      case 'slide-right':
        return 'opacity-0 translate-x-8';
      case 'scale-in':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0 translate-y-6';
    }
  };

  const getVisibleStyle = () => {
    switch (animation) {
      case 'scale-in':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100 translate-y-0 translate-x-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out transform ${
        isVisible ? getVisibleStyle() : getInitialStyle()
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
