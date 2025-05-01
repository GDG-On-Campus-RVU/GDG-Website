import React, { useState } from 'react';

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3 font-['Violet Sans']">
      <button
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:outline-none font-['Violet Sans']"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold">{title}</span>
        <span className="text-xl">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="bg-gray-900 border border-t-0 border-gray-700 rounded-b px-4 py-2 text-white animate-fade-in font-['Violet Sans']">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
