import React from 'react';

interface DocSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const DocSection: React.FC<DocSectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-white border-b border-white/20 pb-2 font-mono">
        {title}
      </h2>
      <div className="bg-black shadow-sm rounded-lg border border-white/20 p-4 lg:p-6">
        {children}
      </div>
    </section>
  );
}; 