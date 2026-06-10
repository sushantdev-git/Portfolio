import React, { useEffect, useState } from "react";

export const Intro: React.FC = () => {
  const name = "Sushant Mishra";
  const [displaytext, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let isMounted = true;
    const handleTyping = () => {
      const fullText = name;
      const updatedText = isDeleting
        ? fullText.substring(0, displaytext.length - 1)
        : fullText.substring(0, displaytext.length + 1);

      if (isMounted) setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTypingSpeed(3000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTypingSpeed(500);
      } else if (isDeleting) {
        setTypingSpeed(100);
      } else {
        setTypingSpeed(150);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [displaytext, isDeleting, typingSpeed]);

  return (
    /*
      DOM order: [Avatar, Text]
      - Mobile (default base): flex-col → Avatar on top, Text below  ✓
      - Desktop (lg+):         flex-row-reverse → Avatar right, Text left  ✓
    */
    <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-8 mt-4 lg:mt-10 lg:gap-10">

      {/* Avatar — first in DOM = on top in mobile flex-col */}
      <div className="w-full flex justify-center items-center lg:w-[40%]">
        <div className="relative cursor-pointer group">
          <img
            src="https://avatars.githubusercontent.com/u/70423224?v=4"
            alt="Sushant"
            className="w-[160px] h-[160px] object-cover rounded-lg border-[3px] border-active bg-card z-10 relative block md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px]"
          />
          <div className="absolute h-full w-full top-3 left-3 border-[3px] border-active rounded-lg bg-brand-orange z-[1] transition-all duration-200 group-hover:top-2 group-hover:left-2 group-hover:bg-brand-blue lg:top-4 lg:left-4" />
        </div>
      </div>

      {/* Text — second in DOM = below avatar on mobile */}
      <div className="w-full flex flex-col gap-3 lg:w-[55%] text-center lg:text-left items-center lg:items-start">
        <div className="font-heading font-extrabold text-xl text-brand-blue flex items-center gap-2">
          Hi there 👋, I'm
        </div>
        <h1 className="text-[2.2rem] leading-[1.1] font-heading font-extrabold tracking-tight text-foreground lg:text-[3.5rem] md:text-[2.75rem]">
          {displaytext}
          <span className="text-brand-blue">👨‍💻</span>
        </h1>
        <h2 className="text-[1.2rem] font-bold text-muted tracking-tight lg:text-[1.85rem] md:text-[1.5rem]">
          Software Engineer II 💻
        </h2>
        <div className="h-1" />
        <p className="font-body text-[0.95rem] leading-relaxed text-muted lg:text-[1.1rem] text-left">
          I am a Software Engineer II specializing in distributed systems,
          real-time collaborative infrastructure, and generative AI orchestration.
          I design and build highly performant, scalable systems — ranging from
          collaborative rich-text editors and topological spreadsheet graph engines
          to high-scale geospatial matching architectures. Passionate about eventual
          consistency, event-driven microservices, and absolute code execution
          performance. 🚀
        </p>
      </div>
    </div>
  );
};
