import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title || 'My Portfolio'}</title>
      <meta name="description" content={description || 'A modern portfolio built with React and Tailwind CSS'} />
      <meta name="keywords" content={keywords || 'portfolio, web developer, react, frontend'} />
      <meta name="author" content="Aayan Patel" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
