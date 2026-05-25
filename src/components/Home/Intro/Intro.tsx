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

      if (isMounted) {
        setDisplayText(updatedText);
      }

      if (!isDeleting && updatedText === fullText) {
        setTypingSpeed(3000); // Hold name for 3s
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTypingSpeed(500); // Pause before typing again
      } else if (isDeleting) {
        setTypingSpeed(100); // Deleting is faster
      } else {
        setTypingSpeed(150); // Normal typing speed
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [displaytext, isDeleting, typingSpeed]);

  return (
    <div className="w-full flex flex-row justify-between items-center mt-10 gap-12 lg:flex-col-reverse lg:mt-5 lg:gap-8">
      <div className="w-[55%] flex flex-col gap-4 lg:w-full lg:text-center lg:items-center">
        <div className="font-heading font-extrabold text-2xl text-brand-blue flex items-center gap-2 lg:justify-center">
          Hi there 👋, I'm
        </div>
        <h1 className="text-[3.5rem] leading-[1.1] font-heading font-extrabold tracking-tight text-foreground lg:text-[2.75rem]">
          {displaytext}
          <span className="text-brand-blue">👨‍💻</span>
        </h1>
        <h2 className="text-[1.85rem] font-bold text-muted tracking-tight lg:text-[1.5rem]">Software Engineer II 💻</h2>
        <div className="h-3" />
        <p className="font-body text-[1.1rem] leading-relaxed text-muted">
          I am a Software Engineer II specializing in distributed systems, real-time collaborative infrastructure, and generative AI orchestration. I design and build highly performant, scalable systems—ranging from collaborative rich-text editors and topological spreadsheet graph engines to high-scale geospatial matching architectures. Passionate about eventual consistency, event-driven microservices, and absolute code execution performance. 🚀🚀
        </p>
      </div>
      <div className="w-[40%] flex justify-center items-center lg:w-full lg:mt-5">
        <div className="relative cursor-pointer group">
          <img
            src="https://avatars.githubusercontent.com/u/70423224?v=4"
            alt="Sushant"
            className="w-[280px] h-[280px] object-cover rounded-lg border-[3px] border-active bg-card z-10 relative block md:w-[220px] md:h-[220px]"
          />
          <div className="absolute h-full w-full top-4 left-4 border-[3px] border-active rounded-lg bg-brand-orange z-[1] transition-all duration-200 group-hover:top-2 group-hover:left-2 group-hover:bg-brand-blue"></div>
        </div>
      </div>
    </div>
  );
};
