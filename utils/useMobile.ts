import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTabletDevice = /ipad|android(?=.*\b(?!.*mobile))/i.test(userAgent);
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet, isMobileOrTablet: isMobile || isTablet };
}

// Utility function to suppress extension-related errors on mobile
export function suppressExtensionErrors() {
  if (typeof window !== 'undefined') {
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('Extension context invalidated') || 
          message.includes('browser-polyfill.js') ||
          message.includes('cdp-session.js')) {
        console.warn('Suppressed extension error:', message);
        return;
      }
      originalConsoleError.apply(console, args);
    };

    console.warn = (...args) => {
      const message = args.join(' ');
      if (message.includes('Extension context invalidated') || 
          message.includes('browser-polyfill.js') ||
          message.includes('cdp-session.js')) {
        return;
      }
      originalConsoleWarn.apply(console, args);
    };
  }
}

// Utility to manage debug logs in development vs production
export function debugLog(message: string, ...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, ...args);
  }
}

export function debugWarn(message: string, ...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, ...args);
  }
}

// Initialize error suppression
if (typeof window !== 'undefined') {
  suppressExtensionErrors();
} 