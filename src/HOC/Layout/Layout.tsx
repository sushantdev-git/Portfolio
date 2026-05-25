import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { SidePanel } from '../../components/UI/SidePanel/SidePanel';
import ImageViewer from '../../components/UI/ImageViewer/ImageViewer';
import PdfViewer from '../../components/UI/PdfViewer/PdfViewer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });
  const layoutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (layoutRef.current) {
      layoutRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  // Apply theme to HTML tag
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleSidePanel = () => {
    setIsSidePanelVisible((prev) => !prev);
  };

  return (
    <div 
      className="max-h-screen min-h-screen w-full flex flex-col items-center bg-background text-foreground overflow-y-auto overflow-x-hidden relative scroll-smooth" 
      ref={layoutRef}
    >
      <Header 
        toggleSidePanel={toggleSidePanel} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <div className="min-h-[calc(100vh-70px)] w-full mt-[70px] p-6 max-w-[1200px] flex flex-col md:mt-[60px] md:p-4">
        {children}
      </div>
      <SidePanel 
        toggleSidePanel={setIsSidePanelVisible} 
        show={isSidePanelVisible} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ImageViewer />
      <PdfViewer />
    </div>
  );
};

export default Layout;
