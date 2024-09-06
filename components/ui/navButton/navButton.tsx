import React from "react";
import './navButton.css'; // Import the custom CSS file

const NavButton = ({ children }) => {
  return (
    <button className="flex flex-row gap-2 items-center justify-center box relative block w-36 p-4 text-center font-black bg-transparent text-black dark:text-white transition-all duration-500">
      {children}
    </button>
  );
};

export default NavButton;
