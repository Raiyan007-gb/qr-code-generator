import React from 'react';
import { QrCodeIcon } from '@heroicons/react/24/outline';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out flex items-center justify-center gap-2"
    >
      <QrCodeIcon className="h-6 w-6" />
      {children}
    </button>
  );
};

export default Button;