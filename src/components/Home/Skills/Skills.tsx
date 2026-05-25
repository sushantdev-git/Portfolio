import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillProgress from "./SkillProgress";

interface Skill {
  name: string;
  icon: string;
  level: string;
  mastery: number;
  paths: string[];
}

const skillList: Skill[] = [
  // Web & Distributed Systems
  { name: "Vue.js", icon: "icons/vue.png", level: "Advanced", mastery: 90, paths: ["web"] },
  { name: "React", icon: "icons/reactjs.png", level: "Advanced", mastery: 90, paths: ["web"] },
  { name: "NestJS / Node.js", icon: "icons/nodejs.png", level: "Advanced", mastery: 91, paths: ["web"] },
  { name: "CRDTs (Yjs)", icon: "icons/algo.png", level: "Advanced", mastery: 90, paths: ["web"] },
  { name: "ProseMirror", icon: "icons/algo.png", level: "Advanced", mastery: 90, paths: ["web"] },
  { name: "Django / FastAPI", icon: "icons/python.png", level: "Advanced", mastery: 85, paths: ["web"] },
  { name: "JavaScript / TypeScript", icon: "icons/typescript.png", level: "Advanced", mastery: 92, paths: ["web"] },
  { name: "Redis", icon: "icons/redis.png", level: "Advanced", mastery: 90, paths: ["web", "core"] },

  // GenAI & Orchestration
  { name: "LangGraph", icon: "icons/algo.png", level: "Advanced", mastery: 88, paths: ["ai"] },
  { name: "Amazon Bedrock", icon: "icons/aws.png", level: "Advanced", mastery: 85, paths: ["ai"] },
  { name: "Vector Databases & RAG", icon: "icons/mongodb.png", level: "Advanced", mastery: 85, paths: ["ai"] },
  { name: "Python", icon: "icons/python.png", level: "Advanced", mastery: 90, paths: ["ai", "core"] },
  { name: "Prompt Engineering", icon: "icons/algo.png", level: "Advanced", mastery: 90, paths: ["ai"] },

  // Systems & Core CS
  { name: "Go (Golang)", icon: "icons/go.png", level: "Advanced", mastery: 88, paths: ["core", "web"] },
  { name: "C++", icon: "icons/cp.png", level: "Advanced", mastery: 90, paths: ["core"] },
  { name: "Kafka", icon: "icons/kafka.png", level: "Intermediate", mastery: 80, paths: ["core"] },
  { name: "Docker & Kubernetes", icon: "icons/docker.png", level: "Advanced", mastery: 85, paths: ["core"] },
  { name: "AWS", icon: "icons/aws.png", level: "Advanced", mastery: 85, paths: ["core", "web"] },
  { name: "Fastlane & CI/CD", icon: "icons/github.png", level: "Advanced", mastery: 85, paths: ["core"] },
  { name: "Swift / iOS", icon: "icons/swift.png", level: "Intermediate", mastery: 75, paths: ["core"] },
];

interface SkillCardProps {
  skill: Skill;
  getBadgeClass: (level: string) => string;
  variants: any;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, getBadgeClass, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-5 bg-card border-2 border-border rounded-lg shadow-tactile-flat flex flex-col gap-4 cursor-default hover:border-active hover:shadow-tactile"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-8 h-8 object-contain rounded-sm bg-background p-1 select-none"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="font-heading font-bold text-[1.1rem] text-foreground">{skill.name}</span>
        </div>
        <span className={getBadgeClass(skill.level)}>{skill.level}</span>
      </div>

      <SkillProgress mastery={skill.mastery} level={skill.level} isHovered={isHovered} />
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [activePath, setActivePath] = useState<string>("web");

  const paths = [
    { id: "web", title: "Web & Distributed Systems" },
    { id: "ai", title: "GenAI & Orchestration" },
    { id: "core", title: "Systems & Core CS" },
  ];

  const filteredSkills = skillList.filter((skill) =>
    skill.paths.includes(activePath)
  );

  const getBadgeClass = (level: string) => {
    const baseClass = "text-[0.75rem] font-extrabold font-heading px-2 py-0.5 rounded-full border-2 text-center uppercase tracking-wide select-none";
    switch (level) {
      case "Advanced":
        return `${baseClass} bg-brand-green/10 text-brand-green border-brand-green`;
      case "Intermediate":
        return `${baseClass} bg-brand-blue/10 text-brand-blue border-brand-blue`;
      default:
        return `${baseClass} bg-brand-orange/10 text-brand-orange border-brand-orange`;
    }
  };

  const getPathBtnClass = (id: string) => {
    const isActive = activePath === id;
    const base = "font-heading font-bold text-sm px-6 py-3 rounded-full border-2 border-border bg-card text-muted cursor-pointer shadow-tactile-flat hover:border-active hover:text-foreground hover:bg-card-hover transition-all duration-200 sm:px-4 sm:py-2.5 select-none";
    return isActive
      ? `${base} !text-brand-blue !bg-card !border-active shadow-tactile -translate-y-[2px]`
      : base;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <div className="w-full my-[60px] mx-auto flex flex-col gap-8 sm:my-[40px]">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-3xl font-heading font-extrabold tracking-tight">Interactive Learning Paths</h1>
        <p className="text-[1.1rem] text-muted">Select a pathway curriculum to see my stack, tools, and technical mastery.</p>
      </div>

      <div className="flex justify-center gap-4 flex-wrap mb-2 sm:gap-2">
        {paths.map((path) => (
          <button
            key={path.id}
            onClick={() => setActivePath(path.id)}
            className={getPathBtnClass(path.id)}
          >
            {path.title}
          </button>
        ))}
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5 w-full" 
        key={activePath}
      >
        {filteredSkills.map((skill) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            getBadgeClass={getBadgeClass} 
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
