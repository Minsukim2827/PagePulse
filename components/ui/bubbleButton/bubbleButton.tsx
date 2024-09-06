import React from 'react';
import './bubbleButton.css'; // Import the custom CSS file

interface BubbleButtonProps {
  children: React.ReactNode;
}

const BubbleButton: React.FC<BubbleButtonProps> = ({ children }) => {
  return (
    <button className="flex flex-row gap-2 bubble-button relative z-10 font-inherit text-black dark:text-white py-2 px-4 overflow-hidden transition-colors duration-400 ease-in-out">
      {children}
    </button>
  );
};

export default BubbleButton;
