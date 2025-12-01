import React from 'react';
import { useLocation } from 'react-router-dom';

const routeToName = (path) => {
  switch (path) {
    case '/': return 'Home';
    case '/about': return 'About Us';
    case '/services': return 'Services';
    case '/tracking': return 'Track Shipment';
    case '/quote': return 'Get Quote';
    case '/careers': return 'Careers';
    case '/news': return 'News & Resources';
    case '/contact': return 'Contact';
    case '/partners': return 'Partners';
    default: return null;
  }
};

const BreadcrumbsJsonLd = ({ location }) => {
  const segments = location.pathname.split('/').filter(Boolean);
  const baseUrl = process.env.REACT_APP_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://ahununu.com');
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` }
  ];
  let pathAcc = '';
  segments.forEach((seg, idx) => {
    pathAcc += `/${seg}`;
    const name = routeToName(pathAcc) || seg;
    items.push({ '@type': 'ListItem', position: idx + 2, name, item: `${baseUrl}${pathAcc}` });
  });
  const json = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
};

const FaqJsonLd = () => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I track my package?',
        acceptedAnswer: { '@type': 'Answer', text: 'Use our tracking tool with your tracking number.' }
      },
      {
        '@type': 'Question',
        name: 'What are your delivery times?',
        acceptedAnswer: { '@type': 'Answer', text: 'Standard: 2-3 days, Express: Next day delivery.' }
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
};

const JobsJsonLd = () => {
  const baseUrl = process.env.REACT_APP_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://ahununu.com');
  const jobs = [
    { title: 'Delivery Driver', location: 'Addis Ababa', type: 'FULL_TIME' },
    { title: 'Logistics Coordinator', location: 'Gonder', type: 'FULL_TIME' },
    { title: 'Customer Service Rep', location: 'Bahir Dar', type: 'PART_TIME' }
  ];
  const json = jobs.map((job) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    employmentType: job.type,
    hiringOrganization: { '@type': 'Organization', name: 'Ahununu Express', sameAs: baseUrl },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: job.location, addressCountry: 'ET' } },
    datePosted: new Date().toISOString(),
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    applicantLocationRequirements: { '@type': 'Country', name: 'Ethiopia' }
  }));
  return (
    <>
      {json.map((obj, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
};

const ServicesJsonLd = () => {
  const baseUrl = process.env.REACT_APP_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://ahununu.com');
  const services = [
    { name: 'Road Freight', description: 'Comprehensive ground transportation solutions.' },
    { name: 'Air Freight', description: 'Fast and reliable air cargo services.' },
    { name: 'Warehousing & Distribution', description: 'Secure storage and efficient distribution.' },
    { name: 'Last-Mile Delivery', description: 'Efficient final delivery to doorsteps.' },
    { name: 'Medical Express', description: 'Specialized medical and pharmaceutical logistics.' },
    { name: 'Bid & Contractual Logistics', description: 'Customized logistics for large-scale ops.' }
  ];
  const json = services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    provider: { '@type': 'Organization', name: 'Ahununu Express', sameAs: baseUrl },
    areaServed: { '@type': 'Country', name: 'Ethiopia' }
  }));
  return (
    <>
      {json.map((obj, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
};

const ContactPageJsonLd = () => {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Ahununu Express',
    mainEntity: {
      '@type': 'Organization',
      name: 'Ahununu Express',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@ahununu.com',
        telephone: '+251-11-000-0000',
        areaServed: 'ET',
        availableLanguage: ['en', 'am']
      }
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
};

const StructuredData = () => {
  const location = useLocation();
  return (
    <>
      <BreadcrumbsJsonLd location={location} />
      {location.pathname === '/news' && <FaqJsonLd />}
      {location.pathname === '/careers' && <JobsJsonLd />}
      {location.pathname === '/services' && <ServicesJsonLd />}
      {location.pathname === '/contact' && <ContactPageJsonLd />}
    </>
  );
};

export default StructuredData;