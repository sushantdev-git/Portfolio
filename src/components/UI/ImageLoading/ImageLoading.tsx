import React from 'react';

interface ImageLoadingProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const ImageLoading: React.FC<ImageLoadingProps> = ({ width, height, borderRadius }) => {
  return (
    <div style={{ overflow: 'hidden', width, height, borderRadius }} className="bg-card-hover border border-border">
      <div className="w-full h-full bg-muted animate-pulse"></div>
    </div>
  );
};

export default ImageLoading;
