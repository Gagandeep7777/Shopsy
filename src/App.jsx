// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Toast from './components/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from './redux/toastSlice';

const App = () => {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);

  const handleToastClose = () => {
    dispatch(hideToast());
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Conditionally render the Toast component */}
      {toast.visible && (
        <Toast message={toast.message} onClose={handleToastClose} />
      )}
    </Router>
  );
};

export default App;
