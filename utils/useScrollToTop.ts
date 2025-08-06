import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { debugLog, debugWarn } from './useMobile';

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change, but not for hash changes
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
}

// Utility function for smooth scrolling to sections
export function scrollToSection(hash: string, delay: number = 100) {
  setTimeout(() => {
    const element = document.querySelector(hash);
    if (element) {
      // Add offset for fixed header
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      // Use smooth scrolling if supported, otherwise instant scroll
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      } else {
        // Fallback for older browsers
        window.scrollTo(0, elementPosition);
      }
    }
  }, delay);
}

// Mobile-specific scroll utility
export function scrollToSectionMobile(hash: string) {
  debugLog('scrollToSectionMobile called with:', hash);
  
  const element = document.querySelector(hash);
  if (element) {
    debugLog('Element found:', element);
    
    // For mobile, use a smaller offset and ensure the element is visible
    const headerHeight = 70;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    debugLog('Scrolling to position:', elementPosition);
    
    // Use requestAnimationFrame for smoother scrolling on mobile
    requestAnimationFrame(() => {
      try {
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
        debugLog('Scroll completed');
      } catch (error) {
        debugWarn('Scroll error:', error);
        // Fallback to instant scroll
        window.scrollTo(0, elementPosition);
      }
    });
  } else {
    debugWarn('Element not found for hash:', hash);
  }
}

// Mobile-specific scroll to top utility
export function scrollToTopMobile() {
  debugLog('scrollToTopMobile called');
  
  // Use requestAnimationFrame for smoother scrolling on mobile
  requestAnimationFrame(() => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      debugLog('Scroll to top completed');
    } catch (error) {
      debugWarn('Scroll to top error:', error);
      // Fallback to instant scroll
      window.scrollTo(0, 0);
    }
  });
} 