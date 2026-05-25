import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-8 border-t-2 border-border mt-auto flex flex-col items-center gap-4 text-center select-none">
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/sushantdev-git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted hover:text-brand-blue transition-all duration-200 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/sushant-mishra-3032b81b5/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted hover:text-brand-blue transition-all duration-200 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-muted">Designed and developed by</p>
        <p className="text-sm font-heading font-extrabold text-foreground">Sushant Mishra</p>
      </div>
    </div>
  );
};

export default Footer;
