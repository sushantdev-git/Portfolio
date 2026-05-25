import React, { useState, useEffect } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { connect } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ImageLoading from '../ImageLoading/ImageLoading';
import { RootState } from '../../../Store/store';

interface ImageViewerProps {
  show: boolean;
  images: string[];
  close: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ show, images, close }) => {
  const [index, setIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0) {
      setIndex(0);
      setImageLoading(true);
    }
  }, [images]);

  if (!show || !images || images.length === 0) return null;

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setImageLoading(true);
    }
  };

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
      setImageLoading(true);
    }
  };

  return (
    <>
      <Backdrop show={show} clicked={close} />
      <div 
        className="fixed inset-0 z-[250] flex items-center justify-center p-4 select-none cursor-zoom-out"
        onClick={close}
      >
        <button 
          onClick={(e) => {
            e.stopPropagation();
            close();
          }} 
          className="absolute top-6 right-6 z-40 w-12 h-12 flex items-center justify-center border-2 border-active bg-card rounded-md shadow-tactile hover:-translate-y-0.5 hover:shadow-tactile-hover active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer text-foreground"
          aria-label="Close Gallery"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {index > 0 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }} 
            className="absolute left-6 z-30 w-12 h-12 flex items-center justify-center border-2 border-active bg-card rounded-md shadow-tactile hover:-translate-y-0.5 hover:shadow-tactile-hover active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer text-foreground"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
        )}

        <div 
          className="relative max-w-[85%] max-h-[85%] flex items-center justify-center z-20 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={images[index]} 
            alt={`Gallery Item ${index + 1}`} 
            className="max-w-full max-h-[80vh] object-contain rounded-lg border-[3px] border-active bg-card shadow-tactile"
            style={{ display: !imageLoading ? 'block' : 'none' }}
            onLoad={() => setImageLoading(false)}
          />
          {imageLoading && (
            <div className="w-[60vw] h-[60vh] max-w-[400px] max-h-[400px] flex items-center justify-center border-[3px] border-active bg-card rounded-lg shadow-tactile">
              <ImageLoading width="100%" height="100%" />
            </div>
          )}
        </div>

        {index < images.length - 1 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }} 
            className="absolute right-6 z-30 w-12 h-12 flex items-center justify-center border-2 border-active bg-card rounded-md shadow-tactile hover:-translate-y-0.5 hover:shadow-tactile-hover active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer text-foreground"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        )}

      </div>
    </>
  );
};

const mapStateToprops = (state: RootState) => {
  return {
    show: state.viewer.imgVisible,
    images: state.viewer.images,
  };
};

const mapDispatchToprops = (dispatch: any) => {
  return {
    close: () => dispatch({
      type: 'IMG_HIDDEN',
      images: [],
    })
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(ImageViewer);
