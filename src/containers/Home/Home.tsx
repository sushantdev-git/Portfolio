import React from "react";
import { Intro } from "../../components/Home/Intro/Intro";
import Footer from '../../components/Footer/Footer';
import Skills from '../../components/Home/Skills/Skills';
import InteractiveQuiz from '../../components/Home/InteractiveQuiz/InteractiveQuiz';
import OnlineHandle from '../../components/Home/OnlineHandles/OnlineHandles';
import Certifications from "../../components/Home/Certifications/Certifications";
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto mt-10 flex flex-col gap-8 md:mt-5" key="1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-8 w-full"
      >
        <Intro />
        <InteractiveQuiz />
        <Skills />
        <Certifications />
        <OnlineHandle />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
