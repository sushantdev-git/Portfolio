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

      {/* ── Timeline gutter: hidden on mobile ── */}
      <div className="flex flex-col items-center w-10 flex-shrink-0 relative sm:hidden">
        <div className="w-[3px] bg-border flex-grow" style={{ opacity: upc ? 1 : 0 }} />
        <div className="w-8 h-8 rounded-full bg-brand-green border-2 border-active shadow-tactile-sm z-10 flex items-center justify-center text-white font-heading font-extrabold text-[0.8rem] my-2 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-[2px] group-hover:shadow-tactile group-hover:bg-brand-blue">
          ✓
        </div>
        <div className="w-[3px] bg-border flex-grow" style={{ opacity: lwc ? 1 : 0 }} />
      </div>

      {/* Horizontal connector: hidden on mobile */}
      <div className="h-[3px] w-4 bg-border self-center flex-shrink-0 sm:hidden" />

      {/* ── Card ── */}
      <div className={`
        flex-grow bg-card border-2 border-border rounded-lg shadow-tactile-flat
        my-4 p-6 flex flex-col gap-3 cursor-default transition-all duration-200
        group-hover:border-active group-hover:shadow-tactile group-hover:-translate-y-1
        sm:my-2 sm:p-4 sm:gap-2
        sm:border-l-4 sm:border-l-brand-green sm:rounded-l-none sm:group-hover:border-l-brand-blue
      `}>
        <h2 className="font-heading font-extrabold text-[1.3rem] text-foreground flex items-baseline flex-wrap gap-x-2 gap-y-1 m-0 sm:text-[1.05rem]">
          <span>{experience.profile}</span>
          <span className="text-brand-blue font-bold text-[1.1rem] sm:text-[0.95rem]">{"@ " + experience.company}</span>
        </h2>
        <h3 className="font-body font-semibold text-[0.85rem] text-subtle m-0">{experience.duration}</h3>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {experience.techStack.map((tech) => (
            <div key={tech} className="inline-flex items-center gap-1 px-2 py-0.5 bg-background border border-border rounded-sm font-heading font-bold text-[0.72rem] text-muted select-none">
              <img
                src={IconAddress[tech] ?? "icons/algo.png"}
                alt={`${tech} logo`}
                className="h-3 w-auto object-contain"
                onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        <ul className="pl-4 flex flex-col gap-2 mt-1 list-disc sm:pl-3">
          {experience.description.map((desc, i) => (
            <li key={i} className="text-muted text-[0.9rem] leading-relaxed sm:text-[0.85rem]">
              <ReactMarkdown
                components={{
                  code({ children }) {
                    const content = String(children).trim();
                    const isTech = experience.techStack.some(
                      (tech) => tech.toLowerCase() === content.toLowerCase()
                    );
                    if (isTech) {
                      return (
                        <span className="inline-block px-1.5 py-0.5 mx-0.5 bg-brand-green/10 border border-brand-green/20 rounded-sm font-heading font-extrabold text-[0.78rem] text-brand-green dark:bg-brand-green/20 dark:text-green-300 transition-all duration-200 hover:bg-brand-green/20">
                          {content}
                        </span>
                      );
                    }
                    return (
                      <code className="inline-block px-1.5 py-0.5 mx-0.5 bg-brand-blue/10 border border-brand-blue/20 rounded font-mono font-bold text-[0.78rem] text-brand-blue dark:bg-brand-blue/20 dark:text-blue-300">
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
                  },
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
