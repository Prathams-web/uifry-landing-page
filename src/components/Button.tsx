import React from 'react';

interface ButtonProps {
  text: string;
  iconSrc?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, iconSrc, className = '', onClick }) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 border border-black rounded-md ${className} md:px-3 md:py-2`}
      // className={`flex items-center justify-center px-4 py-2 border border-black rounded-md ${className} md:px-6 md:py-3`}
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt="Button Icon" className="w-5 h-5 mr-2 md:w-3 md:h-3" />}
      {/* {iconSrc && <img src={iconSrc} alt="Button Icon" className="w-5 h-5 mr-2 md:w-6 md:h-6" />} */}
      {text}
    </button>
  );
};

export default Button;