import React from "react";
import ExperienceCard from "../../components/Experience/ExperienceCard/ExperienceCard";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

interface ExperienceItem {
  profile: string;
  company: string;
  duration: string;
  techStack: string[];
  description: string[];
}

const Experience: React.FC = () => {
  const experience: ExperienceItem[] = [
    {
      profile: "Software Engineer II",
      company: "STGI (Fintech)",
      duration: "Jan 2023 - Present",
      techStack: ["NestJS", "Vue.js", "ProseMirror", "Yjs", "Django", "AWS", "Redis", "LangGraph"],
      description: [
        "Architected an in-house collaborative real-time editor using `NestJS`, `WebSockets`, `Yjs` (CRDT), and `ProseMirror` with snapshot diffing and state-vector synchronization, achieving eventual consistency and horizontal scalability via `Redis` (**$30,000/year cost savings**).",
        "Developed a high-performance, Excel-like web platform ('Spreading') using `Vue.js` and `Handsontable`, engineering a custom graph-based lexer/parser evaluation engine powered by `Topological Sort` to resolve complex formula dependencies.",
        "Engineered 'Quant Scrub,' an idempotent `Django`/`Celery` workflow utilizing `AWS Textract` for fault-tolerant, resumable data extraction, reducing operational costs by **10x** and boosting entry efficiency by **80%**.",
        "Architected GenAI workflows on `Amazon Bedrock` with `LangGraph` and `Claude` to automate credit memo drafting and borrower application template generation from PDFs.",
        "Built a structured document tree engine converting config files to `ProseMirror` formats (boosting underwriting productivity by **60%**), and integrated `DataDog` for microservice socket and throughput observability.",
        "Managed **Grain** iOS app migration with custom `Swift` automated configuration panels, establishing CI/CD automated App Store deployments using `Fastlane` and `GitHub Actions`.",
      ],
    },
    {
      profile: "Co-Founder | Software Development Engineer",
      company: "Shopoff",
      duration: "August 2022 - Present",
      techStack: ["Flutter", "NodeJs", "MongoDB", "AWS", "Firebase", "GCP"],
      description: [
        "Spearheaded mobile development, crafting the responsive `Flutter` app client architecture and managing state distributions.",
        "Developed scalable backends using `Node.js`, engineering modular `MongoDB` database models to support core marketplace logic.",
        "Integrated cross-platform APIs, third-party authentication services, payment workflows, and cloud deployments on `GCP` and `AWS`.",
      ],
    },
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto mt-10 flex flex-col gap-8 md:mt-5 sm:mt-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full flex flex-col gap-8"
      >
        <div className="text-center flex flex-col gap-2 mb-2 px-2">
          <h1 className="text-3xl font-heading font-extrabold tracking-tight sm:text-2xl">Career Pathway</h1>
          <p className="text-[1.1rem] text-muted sm:text-[0.95rem]">Step-by-step career path, showcasing my engineering experiences and milestones.</p>
        </div>

        <div className="flex flex-col">
          {experience.map((exp, ind) => (
            <ExperienceCard
              key={exp.company}
              experience={exp}
              upc={ind > 0}
              lwc={ind < experience.length - 1}
            />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Experience;
