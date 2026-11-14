export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apextechsolution.in/#organization",
        "name": "Apex Tech Solution",
        "url": "https://apextechsolution.in",
        "logo": "https://apextechsolution.in/logo.png",
        "slogan": "Digital Growth. Smart Technology.",
        "description": "We help businesses grow online through SEO, digital marketing, high-performance websites, custom software, and AI-powered solutions.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+91-9867333477",
          "email": "info@apextechsolution.in",
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://apextechsolution.in/#website",
        "url": "https://apextechsolution.in",
        "name": "Apex Tech Solution",
        "description": "Apex Tech Solution helps businesses grow with SEO, digital marketing, website development, custom software, and custom web applications.",
        "publisher": {
          "@id": "https://apextechsolution.in/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://apextechsolution.in/#service",
        "name": "Apex Tech Solution",
        "url": "https://apextechsolution.in",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital & Technology Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)",
                "description": "Technical SEO, Local SEO, On-page SEO, Keyword Research, and SEO Audits."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing",
                "description": "Social media marketing, content marketing, paid advertising, and lead generation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development",
                "description": "Custom high-performance business websites, landing pages, and e-commerce solutions."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Software Development",
                "description": "Custom web applications, business dashboards, CRM tools, APIs, and databases."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Applications",
                "description": "Bespoke SaaS platforms, client portals, internal workflow apps, APIs, and scalable cloud databases."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
