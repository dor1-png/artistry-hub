import { useEffect } from 'react';

export default function SEO({ title, description, canonical, schema }) {
  useEffect(() => {
    // Update meta title
    document.title = title || 'ARTISTRY - Contemporary Art Portfolio';
    
    // Update/create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'Explore contemporary artworks across digital, painting, photography, and sculpture disciplines.');

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink && canonical) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    if (canonical && canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }

    // Add schema markup
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonical, schema]);

  return null;
}