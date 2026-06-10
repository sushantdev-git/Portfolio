import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface SkillProgressProps {
  mastery: number;
  level: string;
  isHovered: boolean;
}

export const SkillProgress: React.FC<SkillProgressProps> = ({ mastery, level, isHovered }) => {
  const count = useMotionValue(0);

  // Clamp display value strictly between 0 and 100
  const rounded = useTransform(count, (latest) =>
    Math.max(0, Math.min(100, Math.round(latest)))
  );

  const [displayVal, setDisplayVal] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Clamp width percentage strictly between 0% and 100%
  const widthPercent = useTransform(count, (latest) => {
    const clamped = Math.max(0, Math.min(100, latest));
    return `${clamped}%`;
  });

  // Re-trigger elastic spring on hover enter only
  useEffect(() => {
    if (isHovered) setAnimationKey((prev) => prev + 1);
  }, [isHovered]);

  useEffect(() => {
    count.set(0);
    const controls = animate(count, mastery, {
      type: "spring",
      stiffness: 85,
      damping: 8,
      mass: 0.8,
    });
    return () => controls.stop();
  }, [mastery, count, animationKey]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayVal(latest));
  }, [rounded]);

  const getProgressFillClass = (lvl: string) => {
    switch (lvl) {
      case "Advanced":   return "bg-brand-green";
      case "Intermediate": return "bg-brand-blue";
      default:           return "bg-brand-orange";
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex justify-between text-[0.85rem] font-semibold text-muted">
        <span>Mastery</span>
        <motion.span className="font-mono font-extrabold text-foreground select-none">
          {displayVal}%
        </motion.span>
      </div>
      <div className="w-full h-2.5 bg-border rounded-full overflow-hidden border border-border/80 relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]">
        <motion.div
          className={`${getProgressFillClass(level)} h-full rounded-full relative`}
          style={{ width: widthPercent }}
        >
          <span
            className="absolute inset-0 w-full"
            style={{
              background: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;
