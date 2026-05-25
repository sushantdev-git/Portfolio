import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Button } from "../UI/HamburgerButton/HamburgerButton";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  toggleSidePanel: () => void;
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path || (path === "/about" && location.pathname === "/");
    const baseClass = "font-heading font-bold text-sm px-4 py-2 rounded-full border-2 border-transparent text-muted cursor-pointer hover:text-foreground hover:bg-background transition-all duration-200 select-none";
    return isActive
      ? `${baseClass} !text-brand-blue bg-card !border-active shadow-tactile-sm -translate-y-[2px] active:translate-y-[1px] active:shadow-none`
      : baseClass;
  };

  return (
    <div className="w-full h-[70px] z-[100] bg-card border-b-2 border-border fixed top-0 left-0 flex justify-center items-center shadow-[0_2px_0_0_rgba(0,0,0,0.03)] dark:shadow-[0_2px_0_0_var(--border-color)] transition-all duration-300 md:h-[60px]">
      <div className="max-w-[1200px] flex w-[90%] h-full flex-row justify-between items-center">
        <div 
          className="font-heading font-extrabold text-2xl text-brand-blue cursor-pointer tracking-tight flex items-center gap-0.5 select-none" 
          onClick={() => navigate("/about")}
        >
          Sushant<span className="text-brand-orange">.</span>
        </div>
        
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex flex-row text-foreground gap-2 list-none items-center">
            <li
              onClick={() => navigate("/about")}
              className={getLinkClass("/about")}
            >
              About
            </li>
            <li
              onClick={() => navigate("/projects")}
              className={getLinkClass("/projects")}
            >
              Projects
            </li>
            <li
              onClick={() => navigate("/experience")}
              className={getLinkClass("/experience")}
            >
              Experience
            </li>
            <li
              onClick={() => navigate("/contact")}
              className={getLinkClass("/contact")}
            >
              Contact
            </li>
          </ul>

          <button 
            className="w-10 h-10 flex items-center justify-center border-2 border-border rounded-md shadow-tactile-sm hover:border-active hover:shadow-tactile-sm-hover hover:-translate-y-[1px] active:translate-y-[1px] active:shadow-tactile-sm-active transition-all duration-100 text-foreground" 
            onClick={props.toggleTheme}
            aria-label="Toggle Theme"
          >
            {props.theme === "dark" ? (
              <Sun className="w-5 h-5 text-brand-orange fill-brand-orange" />
            ) : (
              <Moon className="w-5 h-5 text-brand-blue fill-brand-blue" />
            )}
          </button>
          
          <Button clicked={props.toggleSidePanel} />
        </div>
      </div>
    </div>
  );
};

export default Header;
