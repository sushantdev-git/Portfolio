import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import IconAddress from "../../../IconAddress";
import { Button } from "../../UI/button";
import { ExternalLink } from "lucide-react";

interface DisplayCardProps {
  title: string;
  subDes: string;
  des: string;
  tech: string[];
  github?: string;
  link?: string;
  images?: string[];
  showImg: (images: string[]) => void;
}

const DisplayCard: React.FC<DisplayCardProps> = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailHeight, setDetailHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);
  const mainBoxRef = useRef<HTMLDivElement>(null);

  const showDetailClicked = () => {
    setShowDetail((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setDetailHeight(showDetail ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [showDetail]);

  useEffect(() => {
    const handleResize = () => {
      if (mainBoxRef.current && mainBoxRef.current.clientWidth >= 600) {
        setShowDetail(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex"
    >
      <div className="w-full bg-card border-2 border-border rounded-lg shadow-tactile-flat overflow-hidden flex flex-col h-full transition-all duration-200 hover:border-active hover:shadow-tactile hover:-translate-y-1" ref={mainBoxRef}>
        <div className="flex flex-col h-full w-full">
          <div className="p-6 flex flex-col gap-3 flex-grow">
            <h1 className="font-heading font-extrabold text-[1.4rem] text-foreground tracking-tight">{props.title}</h1>
            <h3 className="font-body font-semibold text-[0.95rem] text-muted">{props.subDes}</h3>

            <div
              className="font-body text-[0.95rem] text-muted leading-relaxed transition-all duration-300 overflow-hidden"
              ref={contentRef}
              style={{ height: detailHeight }}
            >
              <p>{props.des}</p>
            </div>

            <button className="self-start font-heading font-bold text-sm text-brand-blue cursor-pointer hover:underline select-none" onClick={showDetailClicked}>
              {showDetail ? "Show Less ▲" : "Read More ▼"}
            </button>

            <div className="flex flex-wrap gap-2 mt-2">
              {props.tech.map((tName, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-sm font-heading font-bold text-[0.8rem] text-muted select-none">
                  <img 
                    src={IconAddress[tName] ?? 'icons/algo.png'} 
                    alt={`${tName} icon`} 
                    className="h-4 w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span>{tName}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center p-5 border-t border-border bg-card-hover mt-auto">
            <div className="flex gap-3">
              {props.github && (
                <a 
                  href={props.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted flex items-center justify-center w-9 h-9 rounded-sm border-2 border-border bg-card hover:text-foreground hover:border-active hover:shadow-tactile-sm hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100"
                  aria-label="GitHub Repository"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              )}
              {props.link && (
                <a 
                  href={props.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted flex items-center justify-center w-9 h-9 rounded-sm border-2 border-border bg-card hover:text-foreground hover:border-active hover:shadow-tactile-sm hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-100"
                  aria-label="Live Demo Website"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {props.images && props.images.length > 0 && (
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => props.showImg(props.images || [])}
              >
                Gallery 📸
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    showImg: (images: string[]) =>
      dispatch({
        type: "IMG_VISIBLE",
        images: images ? images : [],
      }),
  };
};

export default connect(null, mapDispatchToProps)(DisplayCard);
