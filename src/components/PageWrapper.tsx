import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} - Místico</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;