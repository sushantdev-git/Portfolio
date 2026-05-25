import React from 'react';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { Button } from '../../components/UI/button';

interface ContactProps {
  showPdf: (pdf: string) => void;
}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <div className="w-full max-w-[600px] mx-auto mt-14 flex flex-col gap-8 items-center px-4 md:mt-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full flex flex-col gap-8 items-center"
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl font-heading font-extrabold tracking-tight">Get In Touch</h1>
          <p className="text-[1.1rem] text-muted">Have an exciting opportunity, a query, or want to collaborate? Let's build together.</p>
        </div>

        <div className="w-full p-10 bg-card border-2 border-border rounded-lg shadow-tactile-flat flex flex-col gap-6 items-center text-center transition-all duration-200 hover:border-active hover:shadow-tactile hover:-translate-y-1 md:p-6">
          <p className="font-body text-[1.1rem] leading-relaxed text-muted">
            I am always open to exploring full-stack engineering opportunities, participating in challenging hackathons, and collaborating on high-fidelity web and mobile products. Drop a message, and I'll get back to you as soon as possible!
          </p>

          <div className="flex gap-4 flex-wrap justify-center mt-2">
            <a 
              href="mailto:sushantmishra.job@gmail.com" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-heading text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:translate-y-[2px] h-11 px-6 py-2.5 bg-brand-blue text-white border-2 border-active shadow-tactile hover:bg-brand-blue-hover active:shadow-tactile-active text-center"
            >
              Email Me ✉️
            </a>
            
            <Button 
              variant="default"
              onClick={() => props.showPdf('/Pdfs/resume.pdf')}
            >
              View Resume 📄
            </Button>
          </div>
        </div>

        <Footer />
      </motion.div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    showPdf: (pdf: string) => dispatch({
      type: "PDF_VISIBLE",
      pdf: pdf,
    }),
  };
};

export default connect(null, mapDispatchToProps)(Contact);
