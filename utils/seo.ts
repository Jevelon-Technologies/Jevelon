// SEO Configuration for Jevelon Technologies
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

// SEO configurations for each page
export const seoConfigs: Record<string, SEOConfig> = {
  // Homepage
  '/': {
    title: 'Web Development & IT Services | Jevelon Technologies',
    description: 'Transform your business with expert web development, mobile apps, and digital solutions. Get custom software development services that drive growth. Start your project today!',
    keywords: 'web development, mobile app development, IT services, software development, digital transformation, custom software, frontend development, backend development',
    ogTitle: 'Web Development & IT Services | Jevelon Technologies',
    ogDescription: 'Transform your business with expert web development, mobile apps, and digital solutions.',
    ogImage: '/assets/photos/zets.png'
  },

  // Service Pages
  '/services/web-development': {
    title: 'Web Development Services | Custom Web Applications | Jevelon',
    description: 'Get custom web development solutions including e-commerce platforms, CMS development, and full-stack applications. Expert web developers ready to build your project.',
    keywords: 'web development, custom web applications, e-commerce development, CMS development, full-stack development, web developers',
    ogTitle: 'Web Development Services | Custom Web Applications',
    ogDescription: 'Get custom web development solutions including e-commerce platforms and full-stack applications.'
  },

  '/services/frontend-development': {
    title: 'Frontend Development Services | React, Vue, Angular | Jevelon',
    description: 'Professional frontend development with React, Vue, and Angular. Create beautiful, responsive user interfaces that convert visitors into customers.',
    keywords: 'frontend development, React development, Vue.js development, Angular development, UI/UX design, responsive design',
    ogTitle: 'Frontend Development Services | React, Vue, Angular',
    ogDescription: 'Professional frontend development with modern frameworks and responsive design.'
  },

  '/services/backend-development': {
    title: 'Backend Development Services | API Development | Jevelon',
    description: 'Robust backend development and API services. Build scalable server-side solutions with Node.js, Python, and modern databases.',
    keywords: 'backend development, API development, server-side development, database design, Node.js, Python, API services',
    ogTitle: 'Backend Development Services | API Development',
    ogDescription: 'Robust backend development and API services for scalable applications.'
  },

  '/services/mobile-app-development': {
    title: 'Mobile App Development | iOS & Android Apps | Jevelon',
    description: 'Native and cross-platform mobile app development for iOS and Android. Create engaging mobile experiences that users love.',
    keywords: 'mobile app development, iOS development, Android development, React Native, Flutter, mobile apps',
    ogTitle: 'Mobile App Development | iOS & Android Apps',
    ogDescription: 'Native and cross-platform mobile app development for iOS and Android.'
  },

  '/services/digital-marketing': {
    title: 'Digital Marketing Services | SEO & Growth Marketing | Jevelon',
    description: 'Comprehensive digital marketing services including SEO, social media marketing, and growth strategies. Drive traffic and increase conversions.',
    keywords: 'digital marketing, SEO services, social media marketing, growth marketing, online marketing, lead generation',
    ogTitle: 'Digital Marketing Services | SEO & Growth Marketing',
    ogDescription: 'Comprehensive digital marketing services to drive traffic and increase conversions.'
  },

  // Content Pages
  '/blog': {
    title: 'Blog | Web Development & Tech Insights | Jevelon',
    description: 'Stay updated with the latest web development trends, tech insights, and industry best practices. Expert articles from our development team.',
    keywords: 'web development blog, tech insights, development tips, programming articles, technology blog',
    ogTitle: 'Blog | Web Development & Tech Insights',
    ogDescription: 'Stay updated with the latest web development trends and tech insights.'
  },

  '/blog/website-budget-india-2025': {
    title: 'Website Budget India (2025): A Realistic Guide to Costs',
    description: 'Planning your 2025 website budget in India? Our guide breaks down the real costs of web design, from simple sites to custom e-commerce platforms. Plan wisely.',
    keywords: 'website budget India, website cost Jaipur, how much does a website cost, small business website price, e-commerce website development cost, WordPress vs custom website cost, what affects website price',
    ogTitle: 'Website Budget India (2025): A Realistic Guide to Costs',
    ogDescription: 'Planning your 2025 website budget in India? Our guide breaks down the real costs of web design, from simple sites to custom e-commerce platforms.'
  },

  '/case-studies': {
    title: 'Case Studies | Web Development Portfolio | Jevelon',
    description: 'Explore our successful web development projects and case studies. See how we haveve helped businesses achieve their digital goals.',
    keywords: 'case studies, web development portfolio, project examples, success stories, client projects',
    ogTitle: 'Case Studies | Web Development Portfolio',
    ogDescription: 'Explore our successful web development projects and case studies.'
  },

  '/team': {
    title: 'Our Team | Expert Developers & Designers | Jevelon',
    description: 'Meet our talented team of web developers, designers, and digital experts. Learn about the professionals behind your success.',
    keywords: 'development team, web developers, designers, digital experts, tech team',
    ogTitle: 'Our Team | Expert Developers & Designers',
    ogDescription: 'Meet our talented team of web developers, designers, and digital experts.'
  },

  // Support Pages
  '/faq': {
    title: 'FAQ | Web Development Questions | Jevelon',
    description: 'Find answers to frequently asked questions about web development, our services, and working with Jevelon Technologies.',
    keywords: 'FAQ, frequently asked questions, web development questions, service inquiries',
    ogTitle: 'FAQ | Web Development Questions',
    ogDescription: 'Find answers to frequently asked questions about web development and our services.'
  },

  '/support': {
    title: 'Support | Technical Support & Contact | Jevelon',
    description: 'Get technical support and assistance for your web development projects. Contact our expert team for help and guidance.',
    keywords: 'technical support, web development support, customer support, project assistance',
    ogTitle: 'Support | Technical Support & Contact',
    ogDescription: 'Get technical support and assistance for your web development projects.'
  },

  '/careers': {
    title: 'Careers | Join Our Development Team | Jevelon',
    description: 'Join our growing team of web developers and digital professionals. Explore career opportunities in web development and technology.',
    keywords: 'careers, job opportunities, web development jobs, tech careers, join our team',
    ogTitle: 'Careers | Join Our Development Team',
    ogDescription: 'Join our growing team of web developers and digital professionals.'
  },

  // Legal Pages
  '/privacy': {
    title: 'Privacy Policy | Jevelon Technologies',
    description: 'Learn about how Jevelon Technologies protects your privacy and handles your personal information.',
    keywords: 'privacy policy, data protection, privacy terms',
    ogTitle: 'Privacy Policy | Jevelon Technologies',
    ogDescription: 'Learn about how we protect your privacy and handle your personal information.'
  },

  '/terms': {
    title: 'Terms of Service | Jevelon Technologies',
    description: 'Read our terms of service and understand the conditions for using Jevelon Technologies services.',
    keywords: 'terms of service, terms and conditions, service terms',
    ogTitle: 'Terms of Service | Jevelon Technologies',
    ogDescription: 'Read our terms of service and understand the conditions for using our services.'
  },

  '/cookies': {
    title: 'Cookie Policy | Jevelon Technologies',
    description: 'Understand how Jevelon Technologies uses cookies and similar technologies on our website.',
    keywords: 'cookie policy, cookies, tracking technologies',
    ogTitle: 'Cookie Policy | Jevelon Technologies',
    ogDescription: 'Understand how we use cookies and similar technologies on our website.'
  },

  '/disclaimer': {
    title: 'Disclaimer | Jevelon Technologies',
    description: 'Important disclaimers and legal information about Jevelon Technologies services and website.',
    keywords: 'disclaimer, legal information, terms disclaimer',
    ogTitle: 'Disclaimer | Jevelon Technologies',
    ogDescription: 'Important disclaimers and legal information about our services.'
  }
};

// Function to get SEO config for a specific path
export function getSEOConfig(path: string): SEOConfig {
  return seoConfigs[path] || seoConfigs['/'];
}

// Function to update document head with SEO meta tags
export function updateSEO(path: string): void {
  try {
    // Wait for DOM to be ready
    if (typeof document === 'undefined' || !document.head) {
      console.warn('Document not ready for SEO update');
      return;
    }

    const config = getSEOConfig(path);
    
    // Update title safely
    if (config.title && document.title !== config.title) {
      document.title = config.title;
    }
    
    // Update meta description safely
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (metaDescription.getAttribute('content') !== config.description) {
      metaDescription.setAttribute('content', config.description);
    }
    
    // Update meta keywords safely
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (metaKeywords.getAttribute('content') !== config.keywords) {
      metaKeywords.setAttribute('content', config.keywords);
    }
    
    // Update Open Graph tags safely
    if (config.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      if (ogTitle.getAttribute('content') !== config.ogTitle) {
        ogTitle.setAttribute('content', config.ogTitle);
      }
    }
    
    if (config.ogDescription) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      if (ogDescription.getAttribute('content') !== config.ogDescription) {
        ogDescription.setAttribute('content', config.ogDescription);
      }
    }
    
    if (config.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      if (ogImage.getAttribute('content') !== config.ogImage) {
        ogImage.setAttribute('content', config.ogImage);
      }
    }
    
    // Update canonical URL safely
    if (config.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      if (canonical.getAttribute('href') !== config.canonical) {
        canonical.setAttribute('href', config.canonical);
      }
    }
  } catch (error) {
    console.error('Error updating SEO meta tags:', error);
    // Don't let SEO errors break the app
  }
}
