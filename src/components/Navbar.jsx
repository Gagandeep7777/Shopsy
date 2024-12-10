// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Shop</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
