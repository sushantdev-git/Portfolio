import React from "react";
import IconAddress from "../../../IconAddress";
import ReactMarkdown from "react-markdown";

interface ExperienceItem {
  profile: string;
  company: string;
  duration: string;
  techStack: string[];
  description: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  upc: boolean;
  lwc: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, upc, lwc }) => {
  return (
    <div className="flex items-stretch w-full relative group">
      <div className="flex flex-col items-center w-12 flex-shrink-0 relative">
        <div
          className="w-[3px] bg-border flex-grow"
          style={{ opacity: upc ? 1 : 0 }}
        />
        <div className="w-8 h-8 rounded-full bg-brand-green border-2 border-active shadow-tactile-sm z-10 flex items-center justify-center text-white font-heading font-extrabold text-[0.8rem] my-2 transition-all duration-200 cursor-pointer group-hover:scale-110 group-hover:-translate-y-[2px] group-hover:shadow-tactile group-hover:bg-brand-blue">
          ✓
        </div>
        <div
          className="w-[3px] bg-border flex-grow"
          style={{ opacity: lwc ? 1 : 0 }}
        />
      </div>
      
      <div className="h-[3px] w-5 bg-border self-center flex-shrink-0" />
      
      <div className="flex-grow bg-card border-2 border-border rounded-lg shadow-tactile-flat my-4 p-6 transition-all duration-200 flex flex-col gap-3 cursor-default group-hover:border-active group-hover:shadow-tactile group-hover:-translate-y-1 sm:p-4 sm:my-2">
        <h2 className="font-heading font-extrabold text-[1.35rem] text-foreground flex items-center flex-wrap gap-2 m-0 sm:text-[1.15rem]">
          <span>{experience.profile}</span>
          <span className="text-brand-blue font-bold">{"@ " + experience.company}</span>
        </h2>
        <h3 className="font-body font-semibold text-[0.9rem] text-subtle m-0">{experience.duration}</h3>
        
        <div className="flex flex-wrap gap-1.5 mt-1">
          {experience.techStack.map((tech) => (
            <div key={tech} className="inline-flex items-center gap-1 px-2.5 py-1 bg-background border border-border rounded-sm font-heading font-bold text-[0.75rem] text-muted select-none">
              <img 
                src={IconAddress[tech] ?? "icons/algo.png"} 
                alt={`${tech} logo`} 
                className="h-3.5 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              /> 
              <span>{tech}</span>
            </div>
          ))}
        </div>
        
        <ul className="pl-5 flex flex-col gap-2 mt-2 list-disc">
          {experience.description.map((desc, i) => (
            <li key={i} className="text-muted text-[0.95rem] leading-relaxed">
              <ReactMarkdown
                components={{
                  code({ children }) {
                    const content = String(children).trim();
                    const isTech = experience.techStack.some(
                      (tech) => tech.toLowerCase() === content.toLowerCase()
                    );
                    
                    if (isTech) {
                      return (
                        <span className="inline-block px-1.5 py-0.5 mx-0.5 bg-brand-green/10 border border-brand-green/20 rounded-sm font-heading font-extrabold text-[0.82rem] text-brand-green dark:bg-brand-green/20 dark:border-brand-green/30 dark:text-green-300 transition-all duration-200 hover:bg-brand-green/20">
                          {content}
                        </span>
                      );
                    }
                    
                    return (
                      <code className="inline-block px-1.5 py-0.5 mx-0.5 bg-brand-blue/10 border border-brand-blue/20 rounded font-mono font-bold text-[0.82rem] text-brand-blue dark:bg-brand-blue/20 dark:border-brand-blue/30 dark:text-blue-300">
                        {content}
                      </code>
                    );
                  },
                  strong({ children }) {
                    return (
                      <strong className="font-extrabold text-foreground dark:text-white">
                        {children}
                      </strong>
                    );
                  },
                  p({ children }) {
                    return <span className="inline">{children}</span>;
                  }
                }}
              >
                {desc}
              </ReactMarkdown>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
