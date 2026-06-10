import React, { useState } from "react";
import { Button } from "../../UI/button";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  title: string;
  text: string;
  options: Option[];
  explanation: {
    correct: string;
    incorrect: string;
  };
}

const InteractiveQuiz: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question: Question = {
    title: "Quick Engineering Challenge",
    text: "Which architectural strategy allows Sushant's Node.js & Express backends to handle thousands of concurrent client requests efficiently without blocking execution?",
    options: [
      { id: "A", text: "Spawning a separate heavy operating system thread for each incoming connection.", isCorrect: false },
      { id: "B", text: "A single-threaded non-blocking event loop using asynchronous callback queues.", isCorrect: true },
    ],
    explanation: {
      correct: "Spot on! Node.js uses a single-threaded event loop with asynchronous, non-blocking I/O operations. This makes it incredibly lightweight and high-throughput, which is why Sushant uses it for building fast, scalable real-time APIs!",
      incorrect: "Not quite. Creating a thread per request causes significant memory overhead and CPU context-switching delays. Try the non-blocking asynchronous approach!"
    }
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowExplanation(false);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto my-10 p-8 flex flex-col gap-5 bg-card border-2 border-border rounded-lg shadow-tactile-flat hover:border-active hover:shadow-tactile hover:-translate-y-1 active:translate-y-0 active:shadow-tactile-flat transition-all duration-200 sm:p-4 sm:my-6 sm:gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-heading font-extrabold text-[0.75rem] bg-brand-orange text-white px-2.5 py-1 rounded-full tracking-wider border-[1.5px] border-active shadow-[0_2px_0_var(--border-active)]">
          DAILY TEASER
        </span>
        <h3 className="text-xl font-extrabold text-foreground tracking-tight">
          {question.title}
        </h3>
      </div>
      
      <p className="text-lg font-medium text-foreground leading-relaxed">
        {question.text}
      </p>
      
      <div className="flex flex-col gap-3 w-full">
        {question.options.map((option) => {
          let btnClass = "w-full flex items-center gap-4 px-5 py-4 border-2 border-border rounded-md bg-card cursor-pointer outline-none font-body text-[1.05rem] text-left transition-all duration-200 relative shadow-sm text-foreground font-semibold";
          let letterClass = "font-heading font-extrabold w-7 h-7 flex items-center justify-center rounded-full border-2 border-border bg-background text-muted text-[0.9rem] flex-shrink-0 transition-all duration-200";

          if (selectedOption) {
            if (option.id === selectedOption.id) {
              if (option.isCorrect) {
                btnClass += " !border-brand-green bg-brand-green/5 !shadow-[0_4px_0_0_rgba(0,168,107,1)]";
                letterClass += " !border-brand-green !bg-brand-green !text-white";
              } else {
                btnClass += " !border-brand-red bg-brand-red/5 !shadow-[0_4px_0_0_rgba(239,68,68,1)]";
                letterClass += " !border-brand-red !bg-brand-red !text-white";
              }
            } else if (option.isCorrect) {
              btnClass += " !border-brand-green opacity-90";
            } else {
              btnClass += " opacity-50 cursor-not-allowed";
            }
          } else {
            btnClass += " hover:border-active hover:bg-card-hover hover:shadow-tactile hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-none";
          }

          return (
            <button
              key={option.id}
              className={btnClass}
              onClick={() => !selectedOption && handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              <span className={letterClass}>{option.id}</span>
              <span className="flex-grow">{option.text}</span>
              {selectedOption && option.id === selectedOption.id && (
                <span className="font-extrabold text-xl flex-shrink-0">
                  {option.isCorrect ? "✓" : "✗"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className={`mt-3 p-6 rounded-md border-2 flex flex-col gap-3 transition-all duration-300 ${
          selectedOption?.isCorrect 
            ? "border-brand-green bg-brand-green/[0.03] text-brand-green" 
            : "border-brand-red bg-brand-red/[0.03] text-brand-red"
        }`}>
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-[1.1rem]">
              {selectedOption?.isCorrect ? "✨ Brilliantly Answered!" : "🤔 Not quite!"}
            </span>
          </div>
          <p className="text-[1rem] leading-relaxed text-muted">
            {selectedOption?.isCorrect ? question.explanation.correct : question.explanation.incorrect}
          </p>
          {!selectedOption?.isCorrect && (
            <Button 
              variant="default" 
              size="sm" 
              className="mt-2"
              onClick={handleReset}
            >
              Try Again
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;
