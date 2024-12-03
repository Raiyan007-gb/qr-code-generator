import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full">
      {children}
    </div>
  );
};

export default Card;