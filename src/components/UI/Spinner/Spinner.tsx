import React from 'react';

const Spinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[100px]">
    <div className="w-10 h-10 border-4 border-border border-t-brand-blue rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
