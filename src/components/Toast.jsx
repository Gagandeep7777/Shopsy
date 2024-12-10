// src/components/Toast.js
import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the toast after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when the component is unmounted
  }, [message, onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4 z-50">
      <span>{message}</span>
      <button onClick={onClose} className="text-white font-bold">X</button>
    </div>
  );
};

export default Toast;
