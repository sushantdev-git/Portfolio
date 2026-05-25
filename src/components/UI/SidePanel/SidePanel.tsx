import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';

interface SidePanelProps {
  show: boolean;
  toggleSidePanel: (show: boolean) => void;
  theme?: string;
  toggleTheme?: () => void;
}

export const SidePanel: React.FC<SidePanelProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const fxn = () => props.toggleSidePanel(false);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path || (path === "/about" && location.pathname === "/");
    const baseClass = "w-[80%] text-center py-3 px-6 rounded-md bg-transparent hover:bg-background transition-all duration-200 cursor-pointer select-none border-2 border-transparent";
    return isActive
      ? `${baseClass} bg-background !border-active shadow-tactile-sm text-brand-blue`
      : baseClass;
  };

  return (
    <>
      <Backdrop show={props.show} clicked={props.toggleSidePanel}/>
      <div 
        className={cn(
          "w-full fixed left-0 h-[50vh] bg-card text-foreground z-[200] flex justify-center items-center border-t-4 border-active rounded-t-[24px] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 md:hidden",
          props.show ? "bottom-0" : "bottom-[-100%]"
        )}
      >
        <ul className="flex flex-col justify-center items-center w-full gap-3 list-none">
          <li className="w-full flex justify-center" onClick={() => {
            navigate('/about');
            fxn();
          }}>
            <div className={getLinkClass("/about")}>
              <h1 className="font-heading font-extrabold text-xl">About</h1>
            </div>
          </li>
          <li className="w-full flex justify-center" onClick={() => {
            navigate('/projects');
            fxn();
          }}>
            <div className={getLinkClass("/projects")}>
              <h1 className="font-heading font-extrabold text-xl">Projects</h1>
            </div>
          </li>
          <li className="w-full flex justify-center" onClick={() => {
            navigate('/experience');
            fxn();
          }}>
            <div className={getLinkClass("/experience")}>
              <h1 className="font-heading font-extrabold text-xl">Experience</h1>
            </div>
          </li>
          <li className="w-full flex justify-center" onClick={() => {
            navigate('/contact');
            fxn();
          }}>
            <div className={getLinkClass("/contact")}>
              <h1 className="font-heading font-extrabold text-xl">Contact</h1>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
