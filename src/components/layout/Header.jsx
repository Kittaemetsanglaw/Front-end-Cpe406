import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/path-to-logo.png"
          alt="Logo"
          className="w-10 h-10 object-cover"
        />
        <span className="text-lg font-bold text-blue-500">
          Measure Temperature IoT
        </span>
      </div>
      {/* Logout Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Logout
      </button>
    </header>
  );
};

export default Header;
