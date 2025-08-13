import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO } from './seo';

export function useSEO() {
  const location = useLocation();

  useEffect(() => {
    // Update SEO meta tags when location changes
    updateSEO(location.pathname);
  }, [location.pathname]);
}
