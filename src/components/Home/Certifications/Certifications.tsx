import React from "react";
import { connect } from "react-redux";

interface CertificationsProps {
  showPdf: (pdf: string) => void;
  showImg: (images: string[]) => void;
}

const Certifications: React.FC<CertificationsProps> = (props) => {
  const show = (link: string, type: "pdf" | "img") => {
    if (type === "pdf") props.showPdf(link);
    if (type === "img") props.showImg([link]);
  };

  return (
    <div className="w-full mt-12 px-4 flex flex-col gap-10">
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-foreground tracking-tight mb-2">Certifications</h2>
        <p className="font-body text-sm text-muted italic mb-6">
          Click on a path below to view verified certificates:
        </p>
        <div className="flex flex-wrap gap-4">
          <div
            onClick={() =>
              show("images/Introduction to Algorithms and Analysis.jpg", "img")
            }
            className="cursor-pointer px-5 py-3.5 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100 font-heading font-bold text-sm text-foreground flex items-center justify-center gap-2 select-none"
          >
            Algorithms | NPTEL 🎓
          </div>
          <div 
            onClick={() => show("Pdfs/github.pdf", "pdf")}
            className="cursor-pointer px-5 py-3.5 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100 font-heading font-bold text-sm text-foreground flex items-center justify-center gap-2 select-none"
          >
            Git & GitHub | Coursera 💻
          </div>
          <div 
            onClick={() => show("Pdfs/gfgcertificate.pdf", "pdf")}
            className="cursor-pointer px-5 py-3.5 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100 font-heading font-bold text-sm text-foreground flex items-center justify-center gap-2 select-none"
          >
            Data Structures & Algorithms | GFG 🧠
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-heading font-extrabold text-2xl text-foreground tracking-tight mb-2">Achievements</h2>
        <p className="font-body text-sm text-muted italic mb-6">
          Key milestones and competitive accolades:
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 w-full max-w-[900px]">
          <div className="p-6 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-200 flex flex-col gap-2 cursor-default">
            <span className="font-heading font-extrabold text-brand-orange text-[0.8rem] tracking-wider uppercase">LeetCode Knight 👑</span>
            <h3 className="font-heading font-extrabold text-[1.2rem] text-foreground leading-snug">2000+ Max Rating</h3>
            <p className="font-body text-sm text-muted leading-relaxed">
              Solved 1,000+ algorithmic problems; secured Global Ranks of **547** and **692** out of 19,000+ active global competitors.
            </p>
          </div>
          <div className="p-6 bg-card border-2 border-border rounded-md shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-200 flex flex-col gap-2 cursor-default">
            <span className="font-heading font-extrabold text-brand-blue text-[0.8rem] tracking-wider uppercase">Hackathon Winner 🏆</span>
            <h3 className="font-heading font-extrabold text-[1.2rem] text-foreground leading-snug">Code Blooded 4.0</h3>
            <p className="font-body text-sm text-muted leading-relaxed">
              Awarded **2nd Place** in Code Blooded 4.0, a highly competitive hackathon organized by STGI, for building robust scalable fintech service systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch: any) => {
  return {
    showPdf: (pdf: string) =>
      dispatch({
        type: "PDF_VISIBLE",
        pdf: pdf,
      }),
    showImg: (images: string[]) =>
      dispatch({
        type: "IMG_VISIBLE",
        images: images ? images : [],
      }),
  };
};

export default connect(null, mapDispatchToprops)(Certifications);
