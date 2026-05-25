import React from 'react';

interface BackdropProps {
  show: boolean;
  clicked: (show: boolean) => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show, clicked }) => (
  show ? <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm" onClick={() => clicked(false)}></div> : null
);

export default Backdrop;
