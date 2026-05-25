import React from "react";

const OnlineHandle: React.FC = () => {
  return (
    <div className="w-full mt-12 px-4">
      <h2 className="font-heading font-extrabold text-2xl text-foreground tracking-tight mb-2">Online Profiles</h2>
      <p className="font-body text-sm text-muted italic mb-6">
        Click to explore competitive programming handles:
      </p>
      <div className="flex flex-wrap gap-4">
        <a 
          href="https://leetcode.com/sushantk_04/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-5 py-3.5 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100 font-heading font-bold text-sm text-foreground flex items-center justify-center gap-2 select-none"
        >
          LeetCode 🎯
        </a>
        <a 
          href="https://codeforces.com/profile/Sushant_Mishra"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-5 py-3.5 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100 font-heading font-bold text-sm text-foreground flex items-center justify-center gap-2 select-none"
        >
          Codeforces ⚡
        </a>
      </div>
    </div>
  );
};

export default OnlineHandle;
