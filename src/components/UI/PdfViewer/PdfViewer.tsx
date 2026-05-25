import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { connect } from 'react-redux';
import { RootState } from '../../../Store/store';

interface PdfViewerProps {
  pdf: string | null;
  show: boolean;
  close: () => void;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdf, show, close }) => {
  return (
    <>
      <Backdrop show={show} clicked={close} />
      <div className={`fixed left-0 right-0 bottom-0 h-[85vh] transition-all duration-300 ease-out z-[201] flex flex-col items-center justify-center bg-card border-t-4 border-active rounded-t-2xl shadow-2xl p-4 md:p-6 ${show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="w-12 h-1.5 bg-border rounded-full mb-4 shrink-0"></div>
        <div className="w-full flex-grow flex items-center justify-center overflow-hidden rounded-md border-2 border-border bg-background">
          {pdf ? (
            <iframe 
              src={pdf} 
              className="w-full h-full border-none"
              title="Resume PDF Viewer"
            ></iframe>
          ) : (
            <p className="font-heading font-semibold text-muted">No Content available</p>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToprops = (state: RootState) => {
  return {
    pdf: state.viewer.pdf,
    show: state.viewer.pdfVisible,
  };
};

const mapDispatchToprops = (dispatch: any) => {
  return {
    close: () => dispatch({
      type: 'PDF_HIDDEN',
    })
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(PdfViewer);
